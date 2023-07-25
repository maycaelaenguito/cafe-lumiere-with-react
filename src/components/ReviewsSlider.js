import React, { useState, useEffect } from "react";
import "./reviewslider.css"; 
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';

const reviews = [
  {
    id: 1,
    text: "Excellent coffee and comfy atmosphere. Will be back!",
    author: "John D.",
  },
  {
    id: 2,
    text: "Charming cafe with yummy pastries. Loved the cinnamon roll!",
    author: "Emily S.",
  },
  {
    id: 3,
    text: "Cozy spot for a quick bite. The avocado toast was fantastic!",
    author: "Alex W.",
  },
  {
    id: 4,
    text: "Great service and a variety of teas. A tea lover's paradise!",
    author: "Sarah L.",
  },
  {
    id: 5,
    text: "Hearty brunch options and friendly staff. Try the pancakes!",
    author: "Mike H.",
  },
  // Add more reviews here
];

const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }
    }, 3000); // Change the interval time as desired (5 seconds in this example)

    return () => {
      clearInterval(sliderInterval);
    };
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="slider-container" onMouseEnter={handlePause} onMouseLeave={handlePause}>
        <div className="slide-control">
          <div className="slide-control-icon" onClick={handlePrev}>
            <BsChevronLeft size={40} className="slide-control-icon" />
          </div>
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`slider-item ${index === currentReview ? "active" : ""}`}
            >
              <div className="review-holder">
                <p className="review-text">{review.text}</p>
                <p className="author">- {review.author}</p>
              </div>
            </div>
          ))}
          <div className="slide-control-icon" onClick={handleNext}>
            <BsChevronRight size={40} className="slide-control-icon"/>
          </div>
        </div>
    </div>
  );
};

export default ReviewSlider;