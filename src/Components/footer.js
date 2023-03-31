import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer>
          <div className='footer-left'>
          <ul>
            <li><NavLink to='/'>Home </NavLink>|</li>
            <li><NavLink to="/services">Servies </NavLink>|</li>
            <li><NavLink to="/about">About </NavLink>|</li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>


      <div className="info">
        <div className="legal">
          <a href="#">Terms & Conditions</a>
          |
          <a href="#"> Privacy Policy</a>
          
        <div className="copyright">2023 Copyright &copy;  FoodSanta</div>
        </div>
      </div>
      </div>
      <div className="social">
            <h3>Follow Us on Socials</h3>
            <ul>
                <li><a href='#'><img src='https://cdn-icons-png.flaticon.com/512/2168/2168281.png'></img></a></li>
                <li><a href='#'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384015.png'></img></a></li>
                <li><a href='#'><img src='https://cdn-icons-png.flaticon.com/512/4138/4138168.png'></img></a></li>
                <li><a href='#'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png'></img></a></li>
            </ul>
      </div>
        </footer>
    </div>
  )
}

export default Footer