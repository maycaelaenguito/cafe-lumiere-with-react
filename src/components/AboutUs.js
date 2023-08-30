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
                <div className='team-ttl team-item'>
                  <h1>Meet The Crew</h1>
                </div>
                <div className='team-desc team-item'>
                  <p>At the heart of our offerings is the seamless synergy of our team. With a shared love for crafting exquisite cuisine, brewing comforting coffee, and delivering impeccable service, we're here to elevate your every experience.</p>
                </div>
            </div>
            <div className="team-profile">
            <div class="card">
              <div class="content">
                  <h3>Lily Green</h3>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
