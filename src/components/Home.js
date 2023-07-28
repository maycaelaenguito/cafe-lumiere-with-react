import React from 'react';
import './css/home.css';
import Header from './Header';
import MenuComponent from './MenuComponent';
import BgSlideshow from './BgSlideshow';
import ReviewsSlider from './ReviewsSlider';

const Home = () => {
  return (
    <div>
      <BgSlideshow />
      <Header />
      <MenuComponent />
      <ReviewsSlider />
      <div className="open-hours">
        <div>
          <h1>Open Hours</h1>
        </div>
        <div>
          <div>
            <p>
              Monday - Friday <span className='dash'></span>10:00 am - 9:00 pm
            </p>
          </div>
          <p>
            Saturday - Sunday <span className='dash'></span>10:00 am - 11:00 pm
          </p>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;
