import React, { useEffect, useState } from "react";
import "../style/LoaderOverlay.css";
import logo from "../Assets/Images/logo.png";

const LoaderOverlay = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-overlay">
      <img src={logo} alt="FoodSanta Logo" className="loader-logo" />
      <h1>Food Santa</h1>
    </div>
  );
};

export default LoaderOverlay;
