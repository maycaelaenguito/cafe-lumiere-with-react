import React from 'react';
import '../css/header.css';
import BrownCoffee from '../assets/Coffee 1 (1).png';
import BookingBtn from './BookingBtn';
import MenuBtn from './MenuBtn';

const Header = () => {
  return (
    <div className='header-container'>
       <div className="header-section">
        <div className="header-grid-container">
            <div className="header-grid-image">
             <img src={BrownCoffee} alt="Brown Coffee"/>
            </div>
            <div className='header-grid-title'>
              <p>Exquisite Cuisine</p>
            </div>
            <div className="header-grid-description">
              <h3>Journey to a bygone era of elegance at Cafe Lumiere, a retro-themed haven where timeless charm meets refined indulgence.</h3>
              <p className='sub-description'>Nestled within the heart of the city, Cafe Lumiere beckons visitors with its tranquil ambiance. Sun-kissed walls adorned with captivating artwork, the scent of freshly brewed coffee filling the air, and cozy corners that invite quiet contemplation, this haven promises moments of respite and inspiration.</p>
              <p>Discover a picturesque retreat from the bustling city. Bathed in soft, natural light, the café's elegant interior boasts vibrant artwork, creating an immersive gallery-like experience.</p>
              <MenuBtn/>
            </div>
        </div>
       </div>
       <div className="header-space">
        <div className="landscape-coffee">
          <div className="space">
            
          </div>
          <div className='landscape-text'>
            <div>
              <h1>Get that Coffee</h1>
              <h2>Sit and Sip</h2>
              <h3>Relax</h3>
            <BookingBtn/>
            </div>
          </div>
        </div>
       </div>
  
    </div>
  )
}

export default Header
