import React from 'react'
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='about-bg'>
        {/* <h1>About Us</h1> */}
            <h1>
              Our Aim
            </h1>
        <div className='about-caption'>
            <p className='about-para'>
              FoodSanta is intended to build a network which helps the distribution of food to the people in need. We want to reduce the irrelevent food wastage by providing the extra food to cater the hunger of those who don't even get a single proper meal in the day.
            </p>
            <img className='about-img' src='https://ik.imagekit.io/htocafs1d/FoodSanta_Images/network_TLPfYfblx.jpg?updatedAt=1679847060597'></img>
        </div>
            <h1>
              How does it works?
            </h1>
        <div className='about-caption'>
          <img className='about-img' src='https://ik.imagekit.io/htocafs1d/FoodSanta_Images/pickup_XxAYHV41g.png?updatedAt=1679847060241'></img>
            <p className='about-para'>
              We enable people and organizations like NGO's and restaurents to list their excess available food on the website so that the people who needs it can see the items on map and can pick it up.  
            </p>
        </div>
            <h1>
              How to contribute?
            </h1>
        <div className='about-caption'>
            <p className='about-para'>
              To give your valuable contribution you can register as an indivisual or an organisation.
              After that you can list the required items by posting picture and giving some information about it. It need not to be only food items instead you can list medicines, clothes and several other items.
            </p>
            <img className='about-img' src='https://ik.imagekit.io/htocafs1d/FoodSanta_Images/donate_qAHBdQGXK.jpg?updatedAt=1679848609185'></img>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default About