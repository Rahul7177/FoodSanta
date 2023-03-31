import React from 'react'
import { NavLink } from 'react-router-dom';
import Signin from '../Pages/signup';
const Join = () => {
  return (
    <div className='join-bg'>
    <h1 className='join-title'>Join the initiative</h1>
    <div className='join-container'>
    <p className='join-para'>Together, we can make a real difference in the lives of those who are struggling to access food. By donating food, you can help reduce waste and support your local community. Whether you can donate a small amount or a large amount, every contribution counts and will make a significant impact. Let's come together to ensure that everyone has access to healthy and happy meals. <br/>Be a <strong>Santa 🎅🏻</strong> and give a nutritious present to the people in need.</p>
    
    <div className='card-container join-card-container'>
    <div className="card join-card">
    <img src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/santa_9qj-P7sFA.png?updatedAt=1679852335521" className="card-img-top join-img" alt="Image"/>
    <div className="card-body">
    <NavLink className='nav-link' to="/signup"><button className="btn btn-primary">Join Now</button></NavLink>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Join