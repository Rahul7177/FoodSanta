import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand ms-3" href="#"><img src='https://cdn-icons-png.flaticon.com/512/2445/2445129.png'></img>FoodSanta</a>
    <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className = {`collapse navbar-collapse ${show ? "show" : ""}`} > 
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item ps-2 pe-3">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item ps-2 pe-3">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item ps-2 pe-3 ">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item ps-2 pe-4">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item ps-2 pe-4">
          <NavLink className="nav-link" to="/login">Account</NavLink>
          
        </li>
        
      </ul>
 
        
    </div>
  </div>
</nav>
</section>
</>
  )
}

export default Navbar