import React,{useEffect} from "react";
import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF,InfoWindow } from "@react-google-maps/api";
import {dataRef} from "./firebases"



export default function Discover() {
  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;

}



function Map() {
  const [allValue,setAllValue]=useState([])
  useEffect(()=>{
    dataRef.ref().child("item").on('value',data=>{
        const getData=Object.values(data.val())
        setAllValue(getData)
    }) 

},[])


  const center = useMemo(() => ({ lat: 12.845501230927379, lng: 80.1604657192738 }), []);
  const options = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),[]);

  const [selectedPoint, setSelectedPoint] = useState(null);

  return (
  
    <GoogleMap zoom={12} center={center} 
    mapContainerClassName="map-container" 
    className='map-container'
    options={options}
    >
      {allValue.map(key => (
        <MarkerF 
        position = {{lat: key['latitude'], lng: key['longitude']}}
        icon={{
          url:'https://cdn-icons-png.flaticon.com/512/3803/3803692.png',
          scaledSize: new window.google.maps.Size(70,70)
        }}
        onClick={() => {
          setSelectedPoint(key);
        }}
         />

      ))}

      {selectedPoint && (
        <InfoWindow 
        position={{lat: selectedPoint['latitude'], lng: selectedPoint['longitude']}}
        onCloseClick={() => {
          setSelectedPoint(null);
        }}
        >
          <div style={{width:100,height:100}}><h4>{selectedPoint['item_name']}</h4><br></br>{selectedPoint['description']}</div>
          </InfoWindow>
      )}
      
    </GoogleMap>
  );
}
