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
                    <div>
                      <li>Mediterranean Chicken Salad<span className='tmdash'></span>300</li>
                      <p>chicken, mixed Greens, tomatoes, olives</p>
                      <li>French Croque Monsieur <span className='tmdash'></span>300</li>
                      <p>bread, ham, cheese, béchamel sauce</p>
                      <li>Truffle Mushroom Risotto<span className='tmdash'></span>350</li>
                      <p>arborio rice, chicken broth, truffles, parmesan cheese</p>
                    </div>
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
                    <li>Tiramisu Parfait <span className='tmdash'></span> 250</li>
                    <p>mascaporni cheese, espresso coffee, cocoa powder</p>
                    <li>French Macaron<span className='tmdash'></span> 270</li>
                    <p>almond flour, egg whites, granulated sugar</p>
                    <li>Black Forest Cake <span className='tmdash'></span> 300</li>
                    <p>chocolate cake, cherries, whipped cream, choco ganache</p>
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
                    <li>Café au Lait <span className='tmdash'></span> 150</li>
                    <p>coffee, milk, sugar</p>
                    <li>Spanish Sangria <span className='tmdash'></span> 200</li>
                    <p>red wine, brandy, soda</p>
                    <li>Aperol Spritz <span className='tmdash'></span> 250</li>
                    <p>aperol, soda water, prosecco</p>
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
