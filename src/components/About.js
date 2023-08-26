import React from 'react';
import Navbar from './Navbar';
import '../css/about.css';

const About = () => {
  return (
    <div>
      <div className='about-nav'>
        <Navbar/>
      </div>
      <div id='about'>
        <p>About</p>
      </div>
      <div className="about-header">
        <div className='a-hder-con'>
          <div className="a-left-header a-hder-items">
              <div className='a-header-title'>
                <p>Exquisite Cuisine</p>
              </div>
              <div className="a-header-des">
                <h3>Nestled at the heart of urban allure, Cafe Lumière beckons you into a world where gastronomy meets artistry, and where each cup of meticulously crafted coffee tells a story. </h3>
                <p className='a-header-sub'>Nestled at the heart of urban allure, Cafe Lumière beckons you into a world where gastronomy meets artistry, and where each cup of meticulously crafted coffee tells a story. Step into an inviting haven where the soft glow of vintage chandeliers dances upon exposed brick walls, seamlessly blending the nostalgic charm of yesteryears with the vibrancy of contemporary culture. At Cafe Lumière, we are more than just a coffeehouse; we are curators of flavor, purveyors of passion, and connoisseurs of comfort. Drawing inspiration from the ethereal interplay of light and shadow, our menu is a symphony of flavors that transcends boundaries, celebrating the harmonious union of diverse culinary traditions.</p>
                <p>More than a mere cafe, we are the embodiment of an ambiance where moments are woven into memories, where conversations linger, and where time itself becomes a treasured guest. Come, bask in the warm embrace of Cafe Lumière, where the essence of culinary delight and cultural fusion intertwine, casting a radiant glow that transcends the ordinary.</p>
              </div>
          </div>
          <div className="a-right-header a-hder-items">
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default About
