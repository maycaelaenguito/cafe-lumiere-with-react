import React from 'react';
import Navbar from './Navbar';
import '../css/about.css';
import Footer from './Footer';
import MenuBtn from './MenuBtn';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Nav */}
      <div className='about-nav'>
        <Navbar/>
      </div>
      {/* Top H */}
      <div id='about'>
        <p>About</p>
      </div>
      {/* Intro */}
      <div className="about-header">
        <div className='a-hder-con'>
          {/* Left */}
          <div className="a-left-header a-hder-items">
              <div className='a-header-title'>
                <p>About Us</p>
              </div>
              <div className="a-header-des">
                <h3>Nestled at the heart of urban allure, Cafe Lumière beckons you into a world where gastronomy meets artistry, and where each cup of meticulously crafted coffee tells a story. </h3>
                <p className='a-header-sub'>Nestled at the heart of urban allure, Cafe Lumière beckons you into a world where gastronomy meets artistry, and where each cup of meticulously crafted coffee tells a story. At Cafe Lumière, we are more than just a coffeehouse; we are curators of flavor, purveyors of passion, and connoisseurs of comfort.</p>
                <p>More than a mere cafe, we are the embodiment of an ambiance where moments are woven into memories, where conversations linger, and where time itself becomes a treasured guest. Come, bask in the warm embrace of Cafe Lumière, where the essence of culinary delight and cultural fusion intertwine, casting a radiant glow that transcends the ordinary.</p>
                <div >
                  <MenuBtn/>
                </div>
              </div>
          </div>
          {/* Right */}
          <div className="a-right-header a-hder-items">
          </div>

          {/* Right */}
          <div className="a-right-header2 a-hder-items">
              <div className='a-header-title'>
                <p>Timeless Tradition & Love Unfiltered</p>
              </div>
              <div className="a-header-des">
                <p className='a-header-sub'>Our team are more than just skilled professionals – they are coffee connoisseurs and ambassadors of hospitality. With their extensive knowledge of brewing techniques, they are always ready to help you discover flavors that resonate with your palate. </p>
                <p> From a warm morning greeting to a perfectly crafted latte art, our team infuse each interaction with warmth and expertise, ensuring that your visit is a delightful journey from the first hello to the last sip. Join us in savoring not only our finely brewed coffees but also the genuine care and attention that our team pour into every cup.</p>
                <div className='menu menu-btn menu-menu-btn abt-btns'>
                      <Link to="/about/how-we-started">
                              <button>
                              Our Team
                              </button>
                      </Link>
                </div>
              </div>
          </div>
          {/* Left */}
          <div className="a-left-header2 a-hder-items">
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
    
  )
}

export default About
