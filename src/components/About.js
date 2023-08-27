import React from 'react';
import Navbar from './Navbar';
import '../css/about.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../css/menucomponent.css';
import BacktoTop from './BacktoTop';

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
                <div className='menu menu-btn abt-btns menu-menu-btn'>
                      <Link to="/about/menu">
                              <button>
                              Our Menu
                              </button>
                      </Link>
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
                <div className='menu menu-btn abt-btns menu-menu-btn'>
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

          <div className="a-header3">
            <div>
              <div>
                <h1>Favorite Picks</h1>
                <div className='ah3des'>
                  <p>Explore best picks in vegan cuisine, crafted cocktails, and exquisite delicacies.  </p>
                </div>
              </div>
              <div className='bgrcon'>
                <div className='best-one'>
                  {/* Image */}
                  <div className="pick-container">
                    <Link to="/about/menu/favorites">
                      <div className="vegan about-menu">
                      </div>
                    </Link>
                  </div>
                  <div className='pick-item'> 
                   <Link>
                      <h4>Vegan</h4>
                   </Link>
                    <div className="pick-description">
                        <p> Curabitur varius quam id massa lobortis, eget vestibulum felis rhoncus. Vivamus quis justo at urna tincidunt tincidunt. Duis euismod, libero sit amet suscipit ultrices, turpis ex tincidunt dolor. </p>
                      </div>
                  </div>
                </div>
                <div className='best-two'>
                   {/* Image */}
                   <div className="pick-container">
                    <Link to="/about/menu/favorites">
                      <div className="cocktails about-menu">
                      </div>
                    </Link>
                  </div>
                  <div className='pick-item'>
                      <Link>
                        <h4>Cocktails</h4>
                      </Link>
                      <div className="pick-description">
                        <p> Curabitur varius quam id massa lobortis, eget vestibulum felis rhoncus. Vivamus quis justo at urna tincidunt tincidunt. Duis euismod, libero sit amet suscipit ultrices, turpis ex tincidunt dolor. </p>
                      </div>
                  </div>
                </div>
                <div className='best-three'>
                   {/* Image */}
                   <div className="pick-container">
                    <Link to="/about/menu/favorites">
                      <div className="delicacies about-menu">
                      </div>
                    </Link>
                  </div>
                  <div className='pick-item'>
                    <Link>
                      <h4>Delicacies</h4>
                    </Link>
                      <div className="pick-description">
                        <p> Curabitur varius quam id massa lobortis, eget vestibulum felis rhoncus. Vivamus quis justo at urna tincidunt tincidunt. Duis euismod, libero sit amet suscipit ultrices, turpis ex tincidunt dolor. </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BacktoTop/>
      {/* Footer */}
      <Footer/>
    </div>
    
  )
}

export default About
