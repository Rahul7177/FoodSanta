import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../style/Navbar.css";
import userIcon from "../Assets/Images/profile-user.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="navbar-logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2445/2445129.png"
            alt="logo"
            className="logo"
          />
          <span>FoodSanta</span>
        </Link>
      </div>

      <div className="nav-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <span className="nav-cross">&times;</span>
        ) : (
          <span>&#9776;</span>
        )}
      </div>

      <div className={`nav-center ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <a
          href="/#Info"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="/#Contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
        <Link
          to="/services"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Explore
        </Link>
      </div>

      <div className={`nav-right ${menuOpen ? "show" : ""}`}>
        <div className="user-dropdown">
          <img
            src={userIcon}
            alt="User"
            className="user-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/myaccount" onClick={() => setDropdownOpen(false)}>
                My Account
              </Link>
              {!currentUser ? (
                <Link to="/login" onClick={() => setDropdownOpen(false)}>
                  Login
                </Link>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
