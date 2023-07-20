import React from 'react';
import './header.css';
import BgSlideshow from './BgSlideshow';
import BrownCoffee from '../assets/Coffee 1 (1).png'

const Header = () => {
  return (
    <div className='header-container'>
       <BgSlideshow/>
       <div className="header-section">
        <div className="header-grid-container">
            <div className="header-grid-image">
             <img src={BrownCoffee} alt="Brown Coffee"/>
            </div>
            <div className='header-grid-title'>
              <h1>Exquisite Cuisine</h1>
            </div>
            <div className="header-grid-description">
              <h3>Journey to a bygone era of elegance at Cafe Lumiere, a retro-themed haven where timeless charm meets refined indulgence.</h3>
              <p className='sub-description'>Nestled within the heart of the city, Cafe Lumiere beckons visitors with its tranquil ambiance. Sun-kissed walls adorned with captivating artwork, the scent of freshly brewed coffee filling the air, and cozy corners that invite quiet contemplation, this haven promises moments of respite and inspiration.</p>
              <p>Discover a picturesque retreat from the bustling city. Bathed in soft, natural light, the café's elegant interior boasts vibrant artwork, creating an immersive gallery-like experience.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header
