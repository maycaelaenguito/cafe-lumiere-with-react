import React from 'react';
import './bgslideshow.css';

const BgSlideshow = () => {
  return (
    <div className='slide-container'>
        {/* AUTOPLAY SLIDESHOW BG-IMAGE */}
        <div className="header-bg">
        </div> 
        {/* HEADER CONTENT/separate the bg-image and the content to make the filter take effect specifically on the bg-image only */}
        <div className="header-content">
            <div className='st-top'>
                <p>Savor the perfect blend</p>
            </div>
            <div className='st-middle'>
                <p>Elevating Coffee Moments with Vintage Flair</p>
            </div>
            <div className='header-btn'>
                <div>
                    <button><p>See Full Menu</p></button>
                </div>
                <div>
                    <button><p>Book A Table</p></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BgSlideshow
