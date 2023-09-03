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
            <div className="tmenu-wrapper tmenu-wrapper1">
              <div className="tmenu-title tmenu-title1">
                <h4>Main Dishes</h4>
                <div className="menulist">
                  <ul>
                    <li>Mediterranean Chicken Salad</li>
                    <li>Italian Truffle Mushroom Risotto</li>
                    <li>French Croque Monsieur</li>
                  </ul>
                </div>
              </div>
              <div className="tmenu tmenu-img1">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693662694/Cafe%20Lumiere/1_3_ajets9.png" alt="Main Dish" />
              </div>
            </div>
            {/*  */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title2">
                <h4>Desserts</h4>
                <div className="menulist">
                  <ul>
                    <li>Tiramisu Parfait Topped with Strawberries</li>
                    <li>French Macaron Assortment</li>
                    <li>German Black Forest Cake</li>
                  </ul>
                </div>
              </div>
              <div className="tmenu tmenu-img2">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693662695/Cafe%20Lumiere/2_3_yjnnrq.png" alt="Desserts" />
              </div>
            </div>
            {/*  */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title3">
                <h4>Beverages</h4>
                <div className="menulist">
                  <ul>
                    <li>Café au Lait <span className='label-hash hash7'></span> 150</li>
                    <li>Spanish Sangria <span className='label-hash hash8'></span> 200</li>
                    <li>Aperol Spritz <span className='label-hash hash9'></span> 250</li>
                  </ul>
                </div>
              </div>
              <div className="tmenu tmenu-img3">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693662693/Cafe%20Lumiere/3_3_yujvte.png" alt="Beverages" />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TodaysMenu
