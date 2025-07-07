import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useAuth } from "../Context/AuthContext";
import { dataRef } from "./Firebases";
import "../style/Discover.css";

function formatRemainingTime(listedAt, expiryHours) {
  const listedTime = new Date(listedAt);
  const expiryTime = new Date(listedTime.getTime() + expiryHours * 3600000);
  const now = new Date();
  const diff = Math.max(0, expiryTime - now);

  const hours = Math.floor(diff / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
}

export default function Discover() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [allValue, setAllValue] = useState([]);
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [showError, setShowError] = useState(true);

  const defaultCenter = useMemo(() => ({ lat: 12.8455, lng: 80.1604 }), []);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = dataRef.ref("item").on("value", (snapshot) => {
      const data = snapshot.val();
      if (!data) return setAllValue([]);

      const items = Object.entries(data).map(([id, item]) => {
        const latitude = parseFloat(item.latitude);
        const longitude = parseFloat(item.longitude);
        const expiryTime = item.listed_at + item.expiry_hours * 3600000;
        const isExpired = Date.now() > expiryTime;

        if (isExpired && item.status === "Available") {
          dataRef.ref(`item/${id}/status`).set("Not Available");
        }

        return { ...item, latitude, longitude, id };
      });

      const filtered = items.filter(
        (item) =>
          !isNaN(item.latitude) &&
          !isNaN(item.longitude) &&
          item.status !== "Not Available"
      );

      setAllValue(filtered);
    });

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        (err) => {
          setLocationError(err.message || "Unable to retrieve your location");
          setUserLocation(defaultCenter);
        }
      );
    } else {
      setLocationError("Geolocation not supported by this browser.");
      setUserLocation(defaultCenter);
    }

    return () => dataRef.ref("item").off("value", unsubscribe);
  }, [currentUser, defaultCenter]);

  useEffect(() => {
    if (selectedPoint?.listed_at && selectedPoint?.expiry_hours) {
      const interval = setInterval(() => {
        setTimeLeft(
          formatRemainingTime(
            selectedPoint.listed_at,
            selectedPoint.expiry_hours
          )
        );
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimeLeft("Unknown");
    }
  }, [selectedPoint]);

  if (!currentUser) return null;
  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  const center = userLocation || defaultCenter;

  return (
    <>
      <GoogleMap
        zoom={userLocation ? 14 : 12}
        center={center}
        mapContainerClassName="map-container"
        options={{ disableDefaultUI: true }}
        onLoad={() => setMapLoaded(true)}
        onUnmount={() => setMapLoaded(false)}
      >
        {userLocation && mapLoaded && (
          <MarkerF
            position={userLocation}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: new window.google.maps.Size(32, 32),
            }}
          />
        )}

        {allValue.map((item) => (
          <MarkerF
            key={item.id}
            position={{ lat: item.latitude, lng: item.longitude }}
            icon={{
              url: "https://cdn-icons-png.flaticon.com/512/3803/3803692.png",
              scaledSize: new window.google.maps.Size(70, 70),
            }}
            onClick={() => {
              setSelectedPoint(item);
              setTimeLeft(
                formatRemainingTime(item.listed_at, item.expiry_hours)
              );
            }}
          />
        ))}
      </GoogleMap>

      {selectedPoint && (
        <div className="sidebar">
          <button className="close-btn" onClick={() => setSelectedPoint(null)}>
            Close
          </button>
          <img
            src={
              selectedPoint.image_url ||
              "https://ik.imagekit.io/htocafs1d/FoodSanta_Images/20250706_1230_Festive%20Gift%20Box_simple_compose_01jzf8jnwwe6tbksqqr16pk2ss%20(1)_LQXBOcf-3I.png"
            }
            alt="Item"
            className="sidebar-image"
          />
          <hr />
          <h2 className="sidebar-title">{selectedPoint.item_name}</h2>
          <p>
            <strong>Donor:</strong> {selectedPoint.donor_name || "Anonymous"}
          </p>
          <p className="sidebar-description">{selectedPoint.description}</p>
          <p>
            <strong>Expiring in:</strong> {timeLeft}
          </p>
          <p>
            <strong>Status:</strong> {selectedPoint.status || "Not specified"}
          </p>
          <hr />
          <a
            className="navigate-btn"
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPoint.latitude},${selectedPoint.longitude}`}
          >
            Navigate
          </a>
        </div>
      )}

      {locationError && showError && (
        <div className="location-error-banner">
          <strong>Error:</strong> {locationError}
          <button className="close-error" onClick={() => setShowError(false)}>
            ×
          </button>
        </div>
      )}
    </>
  );
}
