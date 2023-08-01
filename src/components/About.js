import React from 'react';
import Navbar from './Navbar';
import '../css/about.css';

const About = () => {
  return (
    <div className='about'>
     <div className="about-header">
      <Navbar/>
        <div className="about-title">
          <p>About Us</p>
        </div>
     </div>
     
    </div>
  )
}

export default About
