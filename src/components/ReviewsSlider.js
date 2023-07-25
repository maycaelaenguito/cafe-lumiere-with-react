import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import './reviewslider.css';

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    review: "This product is amazing! I love it!",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Highly recommended. Great quality and service.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    review: "Excellent product. Worth every penny.",
  },
];

const ReviewsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle automatic sliding
  const handleAutoSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviewsData.length);
  };

  // Start automatic sliding when component mounts
  useEffect(() => {
    const interval = setInterval(handleAutoSlide, 5000); // Slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Function to handle button click
  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {reviewsData.map((review) => (
          <div key={review.id}>
            <h2>{review.name}</h2>
            <p>{review.review}</p>
          </div>
        ))}
      </Carousel>

      <div className="buttons-container">
        {reviewsData.map((review, index) => (
          <button
            key={review.id}
            onClick={() => handleButtonClick(index)}
            className={index === currentSlide ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSlider;
