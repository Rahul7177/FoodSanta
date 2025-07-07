import React from "react";
import "../style/Header.css";
import heroImg from "../Assets/Images/hero_img2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="hero-section" id="Header">
      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={heroImg}
          alt="Santa giving food"
          className="hero-illustration"
        />
      </motion.div>

      <motion.div
        className="hero-text-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Be Someone’s Santa!
        </motion.h1>

        <motion.p
          className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have Leftover Food? Help Someone Who’s Hungry
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link to="/services">
            <motion.button
              className="hero-btn share"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started ✨
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
