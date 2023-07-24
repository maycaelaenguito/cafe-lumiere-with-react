import React from 'react';
import './header.css';
import BgSlideshow from './BgSlideshow';
import BrownCoffee from '../assets/Coffee 1 (1).png';
import MenuComponent from './MenuComponent';
import { Link } from 'react-router-dom';

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
              <div className='menu menu-btn'>
                <Link to="/about/menu">
                  <button>
                    See Full Menu
                  </button>
                </Link>
              </div>
            </div>
        </div>
       </div>
       <MenuComponent/>
       <div className="open-hours">
        <div>
          <h1>Open Hours</h1>
        </div>
        <div>
          <div>
          <p>Monday - Friday</p>
          <span className='dash'></span>
          <p>10:00 am - 9:00 pm</p>
          </div>
          <p>Saturday - Sunday <span className='dash'></span>10:00 am - 11:00 pm</p>
        </div>
       </div>
    </div>
  )
}

export default Header
