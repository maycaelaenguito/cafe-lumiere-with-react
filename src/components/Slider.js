import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './slider.css';

const Slider = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const slideLeft = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 1));
  };

  const slideRight = () => {
    setIndex((prevIndex) => (prevIndex < slides.length - 1 ? prevIndex + 1 : 0));
  };

  const handlers = useSwipeable({
    onSwipedLeft: slideRight,
    onSwipedRight: slideLeft,
  });

  return (
    <div className="slider-container" {...handlers}>
      <div className="slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? 'active' : ''}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
