import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../style/Service.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <Navbar />
      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="services-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          What We Offer
        </motion.h1>

        <div className="services-grid">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3349/3349234.png"
                alt="Contribute Icon"
              />
            </div>
            <h2 className="service-heading">Contribute</h2>
            <hr />
            <p className="service-text">
              List surplus food and essential items to help those in need around
              you.
            </p>
            <NavLink to="/items" className="service-button">
              List Items
            </NavLink>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="service-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10246/10246610.png"
                alt="Discover Icon"
              />
            </div>
            <h2 className="service-heading">Discover</h2>
            <hr />
            <p className="service-text">
              View available food and essential items on the map around you.
            </p>
            <NavLink to="/discover" className="service-button">
              Open Map
            </NavLink>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Services;
