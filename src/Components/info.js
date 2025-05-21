import React from 'react'

const Info = () => {
  return (
    <div className='info-bg'>
    <h1 className='info-title'>The Problem</h1>
    <div className='card-container'>
    <div className="card">
    <img src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/630a50f0360f2_DBbCpVH-F.avif?updatedAt=1679851962519" className="card-img-top" alt="Image"/>
    <div className="card-body">
    
    <p className="card-text">Hunger kills more people each year than AIDS, malaria and terrorism combined</p>
    {/* <a href="#" className="btn btn-primary">Go</a> */}
    </div>
    </div>

    <div className="card">
    <img src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/info2_GOTC_H89q.jpg?updatedAt=1679847060487" className="card-img-top" alt="Image"/>
    <div className="card-body">
    
    <p className="card-text">One-third of the food produced around the world is never consumed</p>
    {/* <a href="#" className="btn btn-primary">Go</a> */}
    </div>
    </div>

    <div className="card">
    <img src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/info3_gkHO2pqBT.jpg?updatedAt=1679847060311" className="card-img-top" alt="Image"/>
    <div className="card-body">
    
    <p className="card-text">One in every eight people sleeps hungry each night</p>
    {/* <a href="#" className="btn btn-primary">Go</a> */}
    </div>
    </div>

    <div className="card">
    <img src="https://ik.imagekit.io/htocafs1d/FoodSanta_Images/info4_-aSQhEnIUy.jpg?updatedAt=1679847060436" className="card-img-top" alt="Image"/>
    <div className="card-body">

    <p className="card-text">Around 17% of food produced worldwide is wasted every year</p>
    {/* <a href="#" className="btn btn-primary">Go</a> */}
    </div>
    </div>

    </div>
    <p className='info-para'>The real issue is not the shoratge of food. Around 82% of hungry people live in countries with food surpluses, not food shortages. Infact, the lack of uniform availibility is the cause of hunger. </p>
    </div>
  )
}

export default Info
