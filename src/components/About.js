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
      <div className="about-header">
        <div className='a-hder-con'>
          <div className="a-left-header a-hder-items">
            <p>Left</p>
          </div>
          <div className="a-right-header a-hder-items">
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
