import React from 'react';
import '../css/todaysmenu.css';

const TodaysMenu = () => {
  return (
    <div>
      <div>
          <div className='team-ttl team-item'>
            <h1>Today's Menu</h1>
          </div>
          <div className='team-desc team-item'>
            <p>Satisfy your cravings with our delicious selections for the day. Discover a world of taste in every dish.</p>
          </div>
          <div className="tmenu-con">
            {/*  */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title1">
                <h4>Main Dishes</h4>
                <ul>
                  <li>Mediterranean Chicken Salad</li>
                  <li>Italian Truffle Mushroom Risotto</li>
                  <li>French Croque Monsieur</li>
                </ul>
              </div>
              <div className="tmenu tmenu-img1">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693661720/Cafe%20Lumiere/1_2_r1wk7x.png" alt="Main Dish" />
              </div>
            </div>
            {/*  */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title2">
                <h4>Desserts</h4>
                <ul>
                  <li>Tiramisu Parfait Topped with Strawberries</li>
                  <li>French Macaron Assortment</li>
                  <li>German Black Forest Cake</li>
                </ul>
              </div>
              <div className="tmenu tmenu-img2">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693661720/Cafe%20Lumiere/2_2_niwyoh.png" alt="Desserts" />
              </div>
            </div>
            {/*  */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title3">
                <h4>Beverages</h4>
                <ul>
                  <li>Café au Lait</li>
                  <li>Spanish Sangria</li>
                  <li>Aperol Spritz</li>
                </ul>
              </div>
              <div className="tmenu tmenu-img3">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693661720/Cafe%20Lumiere/3_2_fmfuvy.png" alt="Beverages" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TodaysMenu
