import React from 'react';
import '../css/todaysmenu.css';

const TodaysMenu = () => {
  return (
    <div>
      <div className='todays-con'>
          <div className='team-ttl team-item'>
            <h1>Today's Menu</h1>
          </div>
          <div className='team-desc team-item'>
            <p>Satisfy your cravings with our delicious selections for the day. Discover a world of taste in every dish.</p>
          </div>
          <div className="tmenu-con">
            {/* Menu Category */}
            <div className="tmenu-wrapper tmenu-wrapper1">
              <div className="tmenu-title tmenu-title1">
                <h4>Main Dishes</h4>
                <div className="menulist">
                  <ul>  
                      {/* Dish Label, Price and Ingredients */}
                        <div>
                          <div className='menu-label'>
                            <div>
                              <li>Mediterranean Chicken Salad</li>
                            </div> 
                            <div>
                              <li>300</li>
                            </div>
                          </div>
                          <p>chicken, mixed Greens, tomatoes, olives</p>
                        </div>
                      {/* Dish Label, Price and Ingredients */}
                        <div>
                          <div className='menu-label'>
                            <div>
                              <li>French Croque Monsieur</li>
                            </div> 
                            <div>
                              <li>300</li>
                            </div>
                          </div>
                          <p>bread, ham, cheese, béchamel sauce</p>
                        </div>
                      {/* Dish Label, Price and Ingredients */}
                        <div>
                          <div className='menu-label'>
                            <div>
                              <li>Truffle Mushroom Risotto</li>
                            </div> 
                            <div>
                              <li>350</li>
                            </div>
                          </div>
                          <p>arborio rice, chicken broth, truffles, parmesan cheese</p>
                        </div>
                  </ul>
                </div>
              </div>
              {/* Dish Image */}
              <div className="tmenu tmenu-img1">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693662694/Cafe%20Lumiere/1_3_ajets9.png" alt="Main Dish" />
              </div>
            </div>
            {/* Menu Category */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title2">
                <h4>Desserts</h4>
                <div className="menulist">
                  <ul>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Tiramisu Parfait</li>
                          </div> 
                          <div>
                            <li>250</li>
                          </div>
                        </div>
                        <p>mascaporni cheese, espresso coffee, cocoa powder</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>French Macaron</li>
                          </div> 
                          <div>
                            <li>270</li>
                          </div>
                        </div>
                        <p>almond flour, egg whites, granulated sugar</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Black Forest Cake</li>
                          </div> 
                          <div>
                            <li>300</li>
                          </div>
                        </div>
                        <p>chocolate cake, cherries, whipped cream, choco ganache</p>
                      </div>
                  </ul>
                </div>
              </div>
              {/* Dish Image */}
              <div className="tmenu tmenu-img2">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693662695/Cafe%20Lumiere/2_3_yjnnrq.png" alt="Desserts" />
              </div>
            </div>
            {/* Menu Category */}
            <div className="tmenu-wrapper">
              <div className="tmenu-title tmenu-title3">
                <h4>Beverages</h4>
                <div className="menulist">
                  <ul>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Café au Lait </li>
                          </div> 
                          <div>
                            <li>150</li>
                          </div>
                        </div>
                        <p>coffee, milk, sugar</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Spanish Sangria  </li>
                          </div> 
                          <div>
                            <li>200</li>
                          </div>
                        </div>
                        <p>red wine, brandy, soda</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Aperol Spritz </li>
                          </div> 
                          <div>
                            <li>250</li>
                          </div>
                        </div>
                        <p>aperol, soda water, prosecco</p>
                      </div>
                  </ul>
                </div>
              </div>
              {/* Dish Image */}
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
