import React, { useState, useEffect } from 'react';
import './slideshow.css'; 

const images = [
    require('../assets/1(1).png'),
    require('../assets/2(1).png'),
    require('../assets/3(1).png'),
    require('../assets/4.png'),
    require('../assets/5.png'),
    require('../assets/6.png'),
    require('../assets/7.png'),
    require('../assets/8.png'),
    require('../assets/9.png'),
    require('../assets/10.png')
  ];


  const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return (
      <div className="slideshow">
        <div className='container'>
            {images.map((image, index) => (
            <img
                key={index}
                className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                src={image}
                alt={`Slide ${index}`}
            />
            ))}
        </div>
      </div>
    );
  };  

export default Slideshow;
