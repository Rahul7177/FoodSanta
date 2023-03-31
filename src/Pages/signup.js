import React, { useRef,useState } from "react";
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import { Navigate, NavLink } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useAuth } from "../Context/AuthContext";



const Signup = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
      alert("Account created successfully!")
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <>
    <Navbar/>
    <div className='signup-bg'>
      <h1>Sign Up</h1>
      <h1>{error}</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" ref={nameRef}/>
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control"  ref={emailRef}/>
    </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  ref={passwordRef}/>
    </div>
  <div className='form-footer'>
  <button disabled={loading} type='submit' className="btn btn-primary" >Sign Up</button>
  <p>
    Already have an account? 
    <NavLink to="/login" className="form-link">Login</NavLink>
  </p>
  </div>
  </form>
  </div>
  <Footer/>
  </>
  )
}

export default Signup