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
        <div className="team-wrapper">
          <div>
            <div>
              <h1>Meet The Crew</h1>
              <p>At the heart of our offerings is the seamless synergy of our team. With a shared love for crafting exquisite cuisine, brewing comforting coffee, and delivering impeccable service, we're here to elevate your every experience.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
