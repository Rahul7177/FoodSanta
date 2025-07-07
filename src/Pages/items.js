import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/Items.css";
import { motion } from "framer-motion";

const Items = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [toast, setToast] = useState("");
  const [currLocation, setCurrLocation] = useState({});
  const [userData, setUserData] = useState({
    item_name: "",
    description: "",
    expiry_hours: "",
    donor_name: "",
  });

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      getLocation();
    }
  }, [currentUser, navigate]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 5000);
  };

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { item_name, description, expiry_hours, donor_name } = userData;
    const { latitude, longitude } = currLocation;

    if (item_name && description && donor_name && expiry_hours) {
      const itemPayload = {
        item_name,
        description,
        donor_name,
        user_id: currentUser.uid,
        latitude,
        longitude,
        image_url:
          "https://ik.imagekit.io/htocafs1d/FoodSanta_Images/20250706_1230_Festive%20Gift%20Box_simple_compose_01jzf8jnwwe6tbksqqr16pk2ss%20(1)_LQXBOcf-3I.png?updatedAt=1751785553680",
        listed_at: Date.now(),
        expiry_hours: parseInt(expiry_hours),
        status: "Available",
      };

      try {
        const res = await fetch(
          `${process.env.REACT_APP_FIREBASE_DATABASE_URL}/item.json`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(itemPayload),
          }
        );

        const data = await res.json();
        const listingId = data.name;

        if (listingId) {
          const userRef = `https://foodsanta-eaec3-default-rtdb.firebaseio.com/users/${currentUser.uid}/mylistings.json`;

          await fetch(userRef, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(listingId),
          });

          showToast("🎉 Item listed successfully!");
          setUserData({
            item_name: "",
            description: "",
            expiry_hours: "",
            donor_name: "",
          });
        } else {
          showToast("❌ Failed to list item.");
        }
      } catch (error) {
        console.error(error);
        showToast("⚠️ An error occurred while listing the item.");
      }
    } else {
      showToast("Please fill in all fields");
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocation({ latitude, longitude });
    });
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="items-bg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="items-container"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="items-heading">List an Item</h1>
          <form className="items-form" method="POST" onSubmit={submitData}>
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              id="itemName"
              name="item_name"
              value={userData.item_name}
              onChange={postUserData}
              required
            />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={userData.description}
              onChange={postUserData}
              required
            ></textarea>

            <label htmlFor="donorName">Donor Name</label>
            <input
              type="text"
              id="donorName"
              name="donor_name"
              value={userData.donor_name}
              onChange={postUserData}
              required
            />

            <label htmlFor="expiryHours">Expiry Time (in hours)</label>
            <input
              type="number"
              id="expiryHours"
              name="expiry_hours"
              value={userData.expiry_hours}
              onChange={postUserData}
              required
              min="1"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="item-btn"
            >
              Submit Item
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="items-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="items-left-text">
            <div className="items-left-title">Share a Meal Today !</div>
            <div className="items-left-para">
              Even a small food donation can bring a smile to someone’s face. We
              thank you on their behalf : <br></br>(Thanks Santa! 🎅)
            </div>
          </div>
          <div className="items-left-img"></div>
        </motion.div>
      </motion.div>

      {toast && (
        <div className="account-toast">
          {toast}
          <button className="toast-close" onClick={() => setToast("")}>
            ×
          </button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Items;
