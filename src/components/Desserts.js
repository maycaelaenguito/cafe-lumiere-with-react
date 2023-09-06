import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Desserts = () => {
  return (
    <div>
    <div className="blogs-nav">
      <Navbar/>
    </div>
    <div className="menu-top">
      <div className='menu-title-wrapper'>
        <div className='team-ttl team-item desserts-title menu-bhd'>
          <h1>Desserts & Appetizers</h1>
        </div>
      </div>
      <div className='menu-grid-container'>
        <div className="top-grid menu-grid-item">
          <div className="menulist">
              <ul>  
                <div className='drinks-category'>
                  <h4>Desserts</h4>
                </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Mango Float</li>
                        </div> 
                        <div>
                          <li>180</li>
                        </div>
                      </div>
                      <p>layered dessert with mangoes and cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Leche Flan</li>
                        </div> 
                        <div>
                          <li>120</li>
                        </div>
                      </div>
                      <p>traditional Filipino caramel custard</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Tiramisu</li>
                        </div> 
                        <div>
                          <li>220</li>
                        </div>
                      </div>
                      <p>classic Italian coffee-flavored dessert</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                     <div>
                      <div className='menu-label'>
                        <div>
                          <li>Chocolate Lava Cake</li>
                        </div> 
                        <div>
                          <li>200</li>
                        </div>
                      </div>
                      <p>warm chocolate cake with a molten center</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Bingsu </li>
                        </div> 
                        <div>
                          <li>250</li>
                        </div>
                      </div>
                      <p>korean shaved ice dessert with various toppings</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Churros with Chocolate Sauce</li>
                        </div> 
                        <div>
                          <li>180</li>
                        </div>
                      </div>
                      <p>spanish-style fried dough with chocolate dip</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Panna Cotta</li>
                        </div> 
                        <div>
                          <li>190</li>
                        </div>
                      </div>
                      <p>creamy Italian dessert with fruit compote</p>
                  </div>
                {/* Dish Label, Price and Ingredients */}
                  <div>
                      <div className='menu-label'>
                        <div>
                          <li>Buko Pie</li>
                        </div> 
                        <div>
                          <li>160</li>
                        </div>
                      </div>
                      <p> coconut pie</p>
                  </div>
                  {/* Dish Label, Price and Ingredients */}
                  <div>
                      <div className='menu-label'>
                        <div>
                          <li>Crepes with Nutella and Banana </li>
                        </div> 
                        <div>
                          <li>170</li>
                        </div>
                      </div>
                      <p>thin pancakes with chocolate and banana</p>
                  </div>
                  {/* Dish Label, Price and Ingredients */}
                  <div>
                      <div className='menu-label'>
                        <div>
                          <li>Mochi Ice Cream</li>
                        </div> 
                        <div>
                          <li>160</li>
                        </div>
                      </div>
                      <p>japanese rice cake filled with ice cream</p>
                  </div>
                </ul>
            </div>
        </div>
        <div className="bottom-grid menu-grid-item">
          <div className="menulist">
              <ul>  
                <div className='drinks-category'>
                  <h4>Appetizers</h4>
                </div>
                {/* Dish Label, Price and Ingredients */}
                  <div>
                    <div className='menu-label'>
                      <div>
                        <li>Calamares Fritos </li>
                      </div> 
                      <div>
                        <li>180</li>
                      </div>
                    </div>
                    <p>fried squid rings with garlic mayo</p>
                  </div>
                {/* Dish Label, Price and Ingredients */}
                  <div>
                    <div className='menu-label'>
                      <div>
                        <li>Bruschetta </li>
                      </div> 
                      <div>
                        <li>160</li>
                      </div>
                    </div>
                    <p>toasted bread with diced tomatoes, basil, and olive oil</p>
                  </div>
                {/* Dish Label, Price and Ingredients */}
                  <div>
                    <div className='menu-label'>
                      <div>
                        <li>Gyoza</li>
                      </div> 
                      <div>
                        <li>190</li>
                      </div>
                    </div>
                    <p>japanese pan-fried dumplings</p>
                  </div>
                {/* Dish Label, Price and Ingredients */}
                  <div>
                    <div className='menu-label'>
                      <div>
                        <li>Filipino Lumpia</li>
                      </div> 
                      <div>
                        <li>150</li>
                      </div>
                    </div>
                    <p>spring rolls with a sweet dipping sauce</p>
                  </div>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Desserts
