import React, { useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import google_logo from "../Assets/Images/google.png";
import "../style/Login.css";
import { motion } from "framer-motion";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./Firebases";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await login(email, password);
      setSuccess("Login successful!");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setError("Failed to log in. Check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await signInWithGoogle();
      setSuccess("Logged in with Google!");
      setTimeout(() => navigate("/"), 1000);
    } catch {
      setError("Google Sign-In failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handlePasswordReset() {
    const email = emailRef.current.value.trim();
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Check your inbox.");
      setResetSent(true);
    } catch {
      setError("Failed to send password reset email.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <motion.div
        className="login-bg"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="login-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Log In
        </motion.h1>

        {error && <div className="modal error">{error}</div>}
        {success && <div className="modal success">{success}</div>}

        <motion.form
          className="login-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <label>Email Address</label>
          <input type="email" ref={emailRef} placeholder="Enter your email" />

          <label>Password</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
          />

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="forgot-password">
            <button
              type="button"
              className="link-btn"
              onClick={handlePasswordReset}
              disabled={loading || resetSent}
            >
              Forgot Password?
            </button>
          </p>

          <div className="google-separator">or</div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <img src={google_logo} alt="Google logo" className="google-icon" />
            {loading ? "Please wait..." : "Continue with Google"}
          </button>

          <p className="login-footer">
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </motion.form>
      </motion.div>
      <Footer />
    </>
  );
};

export default Login;
