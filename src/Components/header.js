import React from 'react'

const Header = () => {
  return (
    <div classNameName='banner'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://ik.imagekit.io/htocafs1d/Screenshot_2023-03-25_223015_V1qbZFRSb.png?updatedAt=1679763744847" className="carousal-img" alt="..."/>
      <div className="carousel-caption">
        <p>Become a santa for someone and give them a nutritious present.</p>
      </div>

    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://images.unsplash.com/photo-1595561579181-263fe6175b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVuZ3J5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" className="carousal-img" alt="..."/>
      <div className="carousel-caption">
        <p>The food you are wasting might save lives of some people.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://serudsindia.org/wp-content/uploads/2020/11/Donate-Money-For-Food-In-India-To-Special-Charity-Programs.png" className="carousal-img" alt="..."/>
      <div className="carousel-caption">
        <p>Lets remove hunger together !</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Header