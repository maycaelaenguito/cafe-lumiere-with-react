import React, { useEffect } from 'react';
import Header from './Header';
import MenuComponent from './MenuComponent';
import BgSlideshow from './BgSlideshow';
import ReviewsSlider from './ReviewsSlider';
import Gallery from './Gallery';
import Footer from './Footer';
import BacktoTop from './BacktoTop';
import GalleryCarousel from './GalleryCarousel';

const Home = () => {
  
  useEffect(() => {
    // Check if the URL has an anchor (e.g., #reviews or #open-hours) and scroll to the corresponding element
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div>
      <BgSlideshow />
      <Header />
      <MenuComponent />
      <ReviewsSlider />
      <Gallery />
      <GalleryCarousel/>
      <Footer />
      <div className="floating-btn">
        <BacktoTop />
      </div>
    </div>
  );
};

export default Home;
