import React from 'react';
import './header.css';
import BgSlideshow from './BgSlideshow';
import BrownCoffee from '../assets/Coffee 1 (1).png'

const Header = () => {
  return (
    <div className='header-container'>
       <BgSlideshow/>
       <div className="header-section">
        <div className="hgrid-container">
            <div className="f-img">
             <img src={BrownCoffee} alt="Brown Coffee"/>
            </div>
            <div className='hgrid-title'>
              <h1>All your favorites found in one</h1>
            </div>
            <div className="hgrid-description">
              <h2>Journey to a bygone era of elegance at Cafe Lumiere, a retro-themed haven where timeless charm meets refined indulgence.</h2>
              <p>Nestled within the heart of the city, Cafe Lumiere beckons visitors with its tranquil ambiance. Sun-kissed walls adorned with captivating artwork, the scent of freshly brewed coffee filling the air, and cozy corners that invite quiet contemplation, this haven promises moments of respite and inspiration.</p>
              <p>Discover a picturesque retreat from the bustling city. Bathed in soft, natural light, the café's elegant interior boasts vibrant artwork, creating an immersive gallery-like experience.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header
