import React from 'react';
import Navbar from './Navbar';
import '../css/about.css';

const About = () => {
  return (
    <div>
      <div className='about-nav'>
        <Navbar/>
      </div>
      <div id='about'>
        <p>About</p>
      </div>
    </div>
    
  )
}

export default About
