import React from 'react';
import './home.css';
import Header from './Header';
import MenuComponent from './MenuComponent';
import BgSlideshow from './BgSlideshow';
import ReviewsSlider from './ReviewsSlider';


// import image1 from '../assets/1(1).png';
// import image2 from '../assets/2(1).png';
// import image3 from '../assets/3(1).png';
// import image4 from '../assets/4.png';
// import image5 from '../assets/5.png';
// import image6 from '../assets/6.png';
// import image7 from '../assets/6.png';

// const images = [image1, image2, image3, image4, image5, image6, image7,];

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
