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
              <div className='a-header-title'>
                <p>Exquisite Cuisine</p>
              </div>
              <div className="a-header-des">
                <h3>Journey to a bygone era of elegance at Cafe Lumiere, a retro-themed haven where timeless charm meets refined indulgence.</h3>
                <p className='a-header-sub'>Nestled within the heart of the city, Cafe Lumiere beckons visitors with its tranquil ambiance. Sun-kissed walls adorned with captivating artwork, the scent of freshly brewed coffee filling the air, and cozy corners that invite quiet contemplation, this haven promises moments of respite and inspiration.</p>
                <p>Discover a picturesque retreat from the bustling city. Bathed in soft, natural light, the café's elegant interior boasts vibrant artwork, creating an immersive gallery-like experience.</p>
              </div>
          </div>
          <div className="a-right-header a-hder-items">
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
