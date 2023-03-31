import React,{useRef,useState} from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import { useNavigate, NavLink } from 'react-router-dom'
import { useAuth } from "../Context/AuthContext"
const Login = () => {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
      e.preventDefault()
      try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate("/")
        alert("Login Successful!")
      } catch {
        setError('Failed to log in')
      }
  
      setLoading(false)
    }
  
  
  
    return (
    <>
    <Navbar/>
    <div className='signup-bg'>
      <h1>Log In</h1>
      <h1>{error}</h1>
    <form onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" ref={emailRef}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" ref={passwordRef}/>
    </div>
  <div className='form-footer'>
  <button disabled={loading} type="submit" class="btn btn-primary">Log In</button>
  <p>
    Don't have an account? 
    <NavLink to="/signup" className="form-link">Sign Up</NavLink>
  </p>
  </div>
  </form>
  </div>
  <Footer/>
  </>
  )
}

export default Login