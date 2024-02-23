import React from 'react'
import Videos from '../assets/space.mp4'
import './Video.css'
import {useNavigate} from 'react-router-dom'
const Video = () => {
  const navigate=useNavigate()
  const handle= () => {
    navigate('/user/register')
  }
  const log= () => {
    navigate('/user/login')
  }
  
  return (
    <div className="hero" >
    <video autoPlay loop muted id="video" >
        <source src={Videos} type="video/mp4" />
     </video>
     <div className="content">
        <h1>Axis Bank</h1>
        <p>Pure Banking, Nothing Else<br/></p>
    <div>
        <button onClick={handle} alt="Create" className="btn" >Register</button>
        <button  onClick={log}  className="btn-light" >Login</button>

    </div>
     </div>
</div>
  )
}

export default Video