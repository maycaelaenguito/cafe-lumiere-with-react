import React from 'react';
import './bgslideshow.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const BgSlideshow = () => {
  const handleHover = (event) => {
    event.target.style.color = '#42180ab2';
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = ''; // Reset the color to default when not hovered
  };

  return (
    <div className='slide-container'>
      {/* AUTOPLAY SLIDESHOW BG-IMAGE */}
      <div className="header-bg">
      </div> 
      {/* HEADER CONTENT/separate the bg-image and the content to make the filter take effect specifically on the bg-image only */}
      <div className="nav">
        <Navbar/>
      </div>
      <div className="header-content">
        <div className='st-top'>
          <p>Savor the perfect blend</p>
        </div>
        <div className='st-middle'>
          <p>Elevating Coffee Moments with Vintage Flair</p>
        </div>
        <div className='header-btn'>
          <div className='menu'>
            <Link to="/about/menu">
              <button
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                See Full Menu
              </button>
            </Link>
          </div>
          <div className='booking'>
            <Link to="/contactus/booking">
              <button
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Book A Table
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BgSlideshow;
