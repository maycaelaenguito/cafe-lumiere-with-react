import React, { useState, useEffect } from "react";
import "./reviewslider.css"; 
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';

const reviews = [
  {
    id: 1,
    text: "Excellent coffee and comfy atmosphere. Will be back!",
    author: "John D.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690363824/JONATHAN_5022P_ppFIN_e71tcg.jpg",
  },
  {
    id: 2,
    text: "Charming cafe with yummy pastries. Loved the cinnamon roll!",
    author: "Emily S.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690363940/amanda-seyfried_wrlraj.jpg",
  },
  {
    id: 3,
    text: "Cozy spot for a quick bite. The avocado toast was fantastic!",
    author: "Alex W.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690363940/Retratos-barcelona-actor-headshots-Irene-Alguilar_jj1ock.jpg",
  },
  {
    id: 4,
    text: "Great service and a variety of teas. A tea lover's paradise!",
    author: "Sarah L.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690363941/actor-headshots-nyc-new-york-city-sadie-sink-3e844fa7_zu79ko.jpg",
  },
  {
    id: 5,
    text: "Hearty brunch options and friendly staff. Try the pancakes!",
    author: "Mike H.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690363940/f7b494_547444af3a1f4d19a509db155ac0c3c7_mv2_hqhmbn.jpg",
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
                <div className="agent-container">
                  <div className="agent">
                    <img src={review.image} alt="agent" />
                  </div>
                </div>
                <p className="author"> {review.author}</p>
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