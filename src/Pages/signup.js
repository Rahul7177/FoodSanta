import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../Pages/Firebases";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../style/Signup.css";
import google_logo from "../Assets/Images/google.png";
import { motion } from "framer-motion";

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signInWithGoogle } = useAuth();
  const [modal, setModal] = useState({
    show: false,
    message: "",
    success: false,
  });
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showModal = (message, success = false) => {
    setModal({ show: true, message, success });
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 5000);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!name || !email || !password) {
      showModal("All fields are required.");
      return;
    }

    if (password.length < 6) {
      showModal("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const uid = res.user.uid;

      const db = getDatabase();
      await set(ref(db, "users/" + uid), {
        name,
        email,
        mylistings: [],
      });

      showToast("Account created successfully! 🎉");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        showModal("Email is already in use.");
      } else {
        showModal("Failed to create an account.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignup() {
    try {
      setLoading(true);
      const res = await signInWithGoogle();
      const uid = res.user.uid;
      const name = res.user.displayName || "Anonymous";
      const email = res.user.email;

      const db = getDatabase();
      await set(ref(db, "users/" + uid), {
        name,
        email,
        mylistings: [],
      });

      showToast("Signed up with Google! ✅");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      showModal("Google sign-up failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <motion.div
        className="signup-bg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="signup-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Create an Account
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="signup-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <label>Name</label>
          <input type="text" ref={nameRef} placeholder="Your name" />

          <label>Email</label>
          <input type="email" ref={emailRef} placeholder="your@email.com" />

          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Minimum 6 characters"
          />

          <button type="submit" disabled={loading} className="signup-btn">
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <div className="google-divider">or</div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignup}
            disabled={loading}
          >
            <img src={google_logo} alt="Google logo" className="google-icon" />
            {loading ? "Please wait..." : "Sign Up with Google"}
          </button>

          <p className="signup-footer">
            Already have an account?{" "}
            <NavLink to="/login" className="signup-link">
              Login
            </NavLink>
          </p>
        </motion.form>

        {modal.show && (
          <div
            className={`signup-modal ${modal.success ? "success" : "error"}`}
          >
            <p>{modal.message}</p>
            <button onClick={() => setModal({ ...modal, show: false })}>
              Close
            </button>
          </div>
        )}

        {toast && (
          <div className="toast" onAnimationEnd={() => setToast("")}>
            {toast}
          </div>
        )}
      </motion.div>

      <Footer />
    </>
  );
};

export default Signup;
