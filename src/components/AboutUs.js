import React from 'react'
import '../css/aboutus.css';
import Navbar from './Navbar';
import '../css/bgslideshow.css'

const AboutUs = () => {
  return (
    <div>
        <div className="aboutus-nav">
            <Navbar/>
        </div>
        <div className="about-us-container">
            <p>Our Team</p>
        </div>
    </div>
  )
}

export default AboutUs
