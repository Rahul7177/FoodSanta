import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { dataRef } from "./Firebases";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/MyAccount.css";

const MyAccount = () => {
  const { currentUser, updatePassword } = useAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [allItems, setAllItems] = useState({});
  const [myIds, setMyIds] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [toast, setToast] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [confirmAction, setConfirmAction] = useState({
    show: false,
    type: "",
    itemId: null,
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const isGoogle = currentUser.providerData.some(
      (provider) => provider.providerId === "google.com"
    );
    setIsGoogleUser(isGoogle);

    const userRef = dataRef.ref(`users/${currentUser.uid}`);
    userRef.once("value").then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserInfo(data);
        const ids = data.mylistings ? Object.values(data.mylistings) : [];
        setMyIds(ids);
      }
    });

    dataRef
      .ref("item")
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();
        if (data) setAllItems(data);
      });
  }, [currentUser, navigate]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  };

  const refreshPage = () => {
    setTimeout(() => window.location.reload(), 1000);
  };

  const handlePasswordUpdate = async () => {
    try {
      await updatePassword(newPassword);
      showToast("Password updated!");
      setNewPassword("");
    } catch {
      showToast("Failed to update password");
    }
  };

  const confirmActionHandler = (type, itemId) => {
    setConfirmAction({ show: true, type, itemId });
  };

  const executeConfirmedAction = async () => {
    const { type, itemId } = confirmAction;
    if (!itemId) return;

    if (type === "delete") {
      await dataRef.ref(`item/${itemId}`).remove();
      const snapshot = await dataRef
        .ref(`users/${currentUser.uid}/mylistings`)
        .once("value");
      const updatedListings = Object.entries(snapshot.val() || {}).filter(
        ([, value]) => value !== itemId
      );
      const newObj = Object.fromEntries(updatedListings);
      await dataRef.ref(`users/${currentUser.uid}/mylistings`).set(newObj);
      showToast("Listing deleted");
    }

    if (type === "unavailable") {
      await dataRef.ref(`item/${itemId}`).update({ status: "Not Available" });
      showToast("Marked as Not Available");
    }

    setConfirmAction({ show: false, type: "", itemId: null });
    refreshPage();
  };

  const handleEditSubmit = async () => {
    const { item_name, description, expiry_hours, id } = editItem;
    await dataRef.ref(`item/${id}`).update({
      item_name,
      description,
      expiry_hours: parseInt(expiry_hours),
    });
    setEditItem(null);
    showToast("Listing updated!");
    refreshPage();
  };

  const myListings = Array.isArray(myIds)
    ? myIds.map((id) => ({ ...allItems[id], id })).filter(Boolean)
    : [];

  return (
    <>
      <Navbar />
      <div className="account-container">
        <h1>My Account</h1>
        <div className="user-info">
          <p>
            <strong>Name:</strong> {userInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {currentUser?.email}
          </p>

          {!isGoogleUser && (
            <div className="password-section">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
              <button
                className="account-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <button className="account-btn" onClick={handlePasswordUpdate}>
                Update Password
              </button>
            </div>
          )}
        </div>

        <h2>My Listings</h2>
        <div className="listing-container">
          {myListings.map((item) => (
            <div key={item.id} className="listing-card">
              <img
                src={item.image_url}
                alt={item.item_name}
                className="listing-img"
              />
              <div className="listing-content">
                <h3>{item.item_name}</h3>
                <p className="listing-date">
                  Created on: {new Date(item.listed_at).toLocaleString()}
                </p>
                <details className="accordion">
                  <summary>Details & Actions</summary>
                  <p>
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p>
                    <strong>Status:</strong> {item.status}
                  </p>
                  <p>
                    <strong>Expires in:</strong> {item.expiry_hours} hours
                  </p>
                  <div className="btn-group">
                    <button
                      className="account-btn"
                      onClick={() =>
                        confirmActionHandler("unavailable", item.id)
                      }
                    >
                      Mark as Not Available
                    </button>
                    <button
                      className="account-btn"
                      onClick={() => setEditItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="account-btn danger"
                      onClick={() => confirmActionHandler("delete", item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </details>
              </div>
            </div>
          ))}
        </div>

        {editItem && (
          <div className="modal-overlay" onClick={() => setEditItem(null)}>
            <div className="account-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Edit Listing</h2>

              <label htmlFor="edit-name">Item Name</label>
              <input
                id="edit-name"
                type="text"
                value={editItem.item_name}
                onChange={(e) =>
                  setEditItem({ ...editItem, item_name: e.target.value })
                }
              />

              <label htmlFor="edit-desc">Description</label>
              <textarea
                id="edit-desc"
                value={editItem.description}
                onChange={(e) =>
                  setEditItem({ ...editItem, description: e.target.value })
                }
                rows="4"
              />

              <label htmlFor="edit-expiry">Expiry (in hours)</label>
              <input
                id="edit-expiry"
                type="number"
                value={editItem.expiry_hours}
                onChange={(e) =>
                  setEditItem({ ...editItem, expiry_hours: e.target.value })
                }
                min="1"
              />

              <div className="btn-group">
                <button onClick={handleEditSubmit}>Update</button>
                <button onClick={() => setEditItem(null)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {confirmAction.show && (
          <div
            className="modal-overlay"
            onClick={() =>
              setConfirmAction({ show: false, type: "", itemId: null })
            }
          >
            <div className="account-modal" onClick={(e) => e.stopPropagation()}>
              <h2>Confirm Action</h2>
              <p>
                Are you sure you want to{" "}
                {confirmAction.type === "delete"
                  ? "delete this listing"
                  : "mark this listing as Not Available"}
                ?
              </p>
              <div className="btn-group">
                <button onClick={executeConfirmedAction}>Yes</button>
                <button
                  onClick={() =>
                    setConfirmAction({ show: false, type: "", itemId: null })
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {toast && (
          <div className="account-toast">
            {toast}
            <button className="toast-close" onClick={() => setToast("")}>
              ×
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
