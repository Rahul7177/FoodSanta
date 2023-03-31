import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error-bg'>
        <img src='https://imgs.search.brave.com/KSYWFRb6jhVdbd86eZXj_Gr5ru9ktoeUOK16_mqrtr4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzYy/OC8xNjMvb3JpZ2lu/YWwvdmVjdG9yLXNh/bnRhLWNsYXVzLWZs/eWluZy1pbi1yZWQt/c2xlaWdoLmpwZw'></img>
        <div className='error-caption'>
            <h1>
                404
            </h1>
            <p>
                The page that you are looking for is currently unavailable or does not exist.
                <p></p>
            <NavLink to="/"><btn className="btn btn-primary">Back to home</btn></NavLink>
            </p>
        </div>
    </div>
  )
}

export default Error