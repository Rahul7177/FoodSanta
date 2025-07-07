import React, { useState } from "react";
import "../style/Contact.css";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [userData, setUserData] = useState({ mail: "", message: "" });
  const [modalMessage, setModalMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalMessage("");
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { mail, message } = userData;

    if (!mail || !message) {
      setModalMessage("Please fill in all the fields.");
      setModalVisible(true);
      return;
    }

    try {
      const res = await fetch(
        "https://foodsanta-eaec3-default-rtdb.firebaseio.com/userMessege.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mail, messege: message }),
        }
      );

      if (res.ok) {
        setUserData({ mail: "", message: "" });
        setModalMessage("Message sent successfully!");
      } else {
        setModalMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setModalMessage(
        "An error occurred. Please check your internet connection."
      );
    }

    setModalVisible(true);
  };

  return (
    <div>
      <div className="contact-container" id="Contact">
        <h1 className="contact-title">Connect with Us</h1>
        <form className="contact-form" onSubmit={submitData}>
          <label>Email Address</label>
          <input
            type="email"
            name="mail"
            value={userData.mail}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            value={userData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <AnimatePresence>
          {modalVisible && (
            <div className="contact-modal">
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4 }}
              >
                <p>{modalMessage}</p>
                <button onClick={closeModal} className="modal-close-btn">
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
