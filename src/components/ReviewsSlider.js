import React, { useState, useEffect } from "react";
import "./reviewslider.css"; 
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';

const reviews = [
  {
    id: 1,
    text: "The coffee was top-notch, and the baristas were skilled and friendly. I ordered a latte, and it was expertly crafted with a beautiful latte art design. The ambiance was warm and inviting, creating a pleasant atmosphere to enjoy my coffee. ",
    author: "Karina D.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690438079/2_iegxeu.png",
  },
  {
    id: 2,
    text: "Charming cafe with yummy pastries. The cafe had a charming, cozy vibe that I enjoyed and the coffee was good, and the latte I had complemented my meal nicely. ",
    author: "Emily S.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690438079/3_diacun.png",
  },
  {
    id: 3,
    text: "What a hidden gem! This cafe exceeded my expectations. The pastries were nothing short of amazing – fresh, flavorful, and beautifully presented. I tried their almond croissant, and it was heavenly. ",
    author: "Vivian W.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690438079/4_owsms3.png",
  },
  {
    id: 4,
    text: "Great service and a variety of teas. Their outdoor seating area was lovely – a great place to people-watch while enjoying your coffee. The coffee selection was impressive, with various brewing methods available. ",
    author: "Sarah L.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690438078/1_ye7gg2.png",
  },
  {
    id: 5,
    text: "Hearty brunch options and friendly staff. The cafe had a stylish decor and a vibrant atmosphere, which initially seemed promising. ",
    author: "Mike H.",
    image: "https://res.cloudinary.com/dk3aalcb0/image/upload/v1690438079/5_lx99os.png",
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
            <BsChevronLeft size={60} className="slide-control-icon" />
          </div>
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`slider-item ${index === currentReview ? "active" : ""}`}
            >
              <div className="review-holder">
                <div className="review-text-holder">
                  <p className="review-text">{review.text}</p>
                </div>
                <div className="agent-container">
                  <div id="agent">
                    <img src={review.image} alt="agent" />
                  </div>
                </div>
                <p className="author"> {review.author}</p>
              </div>
            </div>
          ))}
          <div className="slide-control-icon" onClick={handleNext}>
            <BsChevronRight size={60} className="slide-control-icon"/>
          </div>
        </div>
    </div>
  );
};

export default ReviewSlider;