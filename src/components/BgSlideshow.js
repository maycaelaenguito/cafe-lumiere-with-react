import React from 'react';
import '../css/bgslideshow.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const BgSlideshow = () => {

  return (
    <div className='slide-container'>
      {/* AUTOPLAY SLIDESHOW BG-IMAGE */}
      <div className="header-bg"></div> 
      {/* HEADER CONTENT/separate the bg-image and the content to make the filter take effect specifically on the bg-image only */}
      <div className="nav">
        <Navbar/>
      </div>
      <div className="header-content">
        <div className='st-middle'>
          <p>Elevating Coffee Moments with Vintage Flair</p>
        </div>
        <div className='st-top'>
          <p>Savor the perfect blend</p>
        </div>
        <div className='header-btn'>
          <div className='menu'>
            <Link to="/about/menu">
              <button>
                See Menu
              </button>
            </Link>
          </div>
          <div className='booking'>
            <Link to="/contactus/booking">
              <button>
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BgSlideshow;
