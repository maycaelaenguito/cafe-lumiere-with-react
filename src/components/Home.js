import React from 'react';
import Header from './Header';
import MenuComponent from './MenuComponent';
import BgSlideshow from './BgSlideshow';
import ReviewsSlider from './ReviewsSlider';
import Gallery from './Gallery';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <BgSlideshow />
      <Header />
      <MenuComponent />
      <ReviewsSlider />
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default Home;
