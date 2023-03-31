import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';

const Services = () => {
  return (
    <>
    <Navbar />
    <div className='service-bg'>
        <div className='service-caption'>
          <img src="https://cdn-icons-png.flaticon.com/512/3349/3349234.png"></img>
          <h1>Contribute</h1>
            <p className='about-para'>
              List Up the food extra food and other helpful items.
            </p>
          <NavLink to='/items'><button className='btn btn-primary'>List Items</button></NavLink>
        </div>
        <div className='service-caption'>
          <img src='https://cdn-icons-png.flaticon.com/512/10246/10246610.png'></img>
        <h1>Discover</h1>
            <p className='about-para'>
              Discover the listed items nearby your location.
            </p>
            <NavLink to='/discover'><button className='btn btn-primary'>Open Map</button></NavLink>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Services