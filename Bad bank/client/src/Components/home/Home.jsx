import React from 'react'
import Video from './Video'
import Nav from '../nav/Nav'
// import {useNavigate} from 'react-router-dom'
const Home = () => {
  // const navigate=useNavigate()

  return (
    <div>
      <Nav />
      <Video />
    </div>
  )
}

export default Home