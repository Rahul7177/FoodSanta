import React from "react";

import "../style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="info">
          <div className="legal">
            <a href="#">Terms & Conditions </a>
            <span className="legal-separator">|</span>
            <a href="#"> Privacy Policy</a>
          </div>
          <div className="copyright">2025 Copyright &copy; FoodSanta</div>
        </div>
      </div>
      <div className="social">
        <h3>Follow Us on Socials</h3>
        <ul>
          <li>
            <a href="#" aria-label="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.25 6.5 13.45 6.5c.69 0 1.39.12 1.39.12v2.41h-1.22c-1.19 0-1.58.73-1.58 1.49V12h2.65l-.43 3H13V21.8C17.56 20.87 22 16.84 22 12z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2.2c-2.4 0-4.3 1.9-4.3 4.3v8.4c0 2.4 1.9 4.3 4.3 4.3h8.4c2.4 0 4.3-1.9 4.3-4.3V7.8c0-2.4-1.9-4.3-4.3-4.3H7.6m8.4 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m-1 4.5c-.32 0-.6-.28-.6-.6V9.6c0-.32.28-.6.6-.6h2.8c.32 0 .6.28.6.6v4.3c0 .32-.28.6-.6.6H11z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.1 5.48 7.5 3.68 4.96c-.36.62-.56 1.35-.56 2.13 0 1.48.75 2.8 1.91 3.56-.69 0-1.34-.21-1.91-.53v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.71 2.14 2.95 4.02 2.98-1.47 1.15-3.33 1.84-5.35 1.84-.35 0-.7-.02-1.04-.06C3.76 20.42 6.06 21 8.5 21c9.14 0 14.17-7.59 14.17-14.17 0-.22-.01-.43-.01-.64z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.5-2.33 1.32v-.86h-2.18V18.5h2.18v-6.25c0-.62.46-1.09 1.09-1.09.62 0 1.09.46 1.09 1.09V18.5h2.17M6.5 6.89a1.78 1.78 0 0 0 0-3.56 1.78 1.78 0 0 0 0 3.56M7.67 18.5V9.24H5.5V18.5h2.17z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
