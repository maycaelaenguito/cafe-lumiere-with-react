import React from 'react'
import Navbar from './Navbar';
import '../css/menu.css';
import Footer from './Footer';

const Coffee = () => {
  return (
    <div>
      <div className="blogs-nav">
        <Navbar/>
      </div>
      <div className="menu-top">
        <div className='menu-title-wrapper'>
          <div className='team-ttl team-item coffee-title menu-bhd'>
            <h1>Coffee</h1>
          </div>
        </div>
        <div className='menu-grid-container'>
          <div className="top-grid">
            <div className="menulist">
                <ul>  
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Espresso Shot</li>
                          </div> 
                          <div>
                            <li>60</li>
                          </div>
                        </div>
                        <p>finely ground coffee beans, water</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Americano</li>
                          </div> 
                          <div>
                            <li>120</li>
                          </div>
                        </div>
                        <p>espresso, steamed milk, milk foam</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Latte</li>
                          </div> 
                          <div>
                            <li>150</li>
                          </div>
                        </div>
                        <p>espresso, steamed milk</p>
                      </div>
                      {/* Dish Label, Price and Ingredients */}
                       <div>
                        <div className='menu-label'>
                          <div>
                            <li>Mocha</li>
                          </div> 
                          <div>
                            <li>170</li>
                          </div>
                        </div>
                        <p>espresso, steamed milk, chocolate syrup, whipped cream</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Macchiato</li>
                          </div> 
                          <div>
                            <li>100</li>
                          </div>
                        </div>
                        <p>espresso, a dollop of frothy milk</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Iced Coffee</li>
                          </div> 
                          <div>
                            <li>90</li>
                          </div>
                        </div>
                        <p>brewed coffee, ice</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Turkish Coffee</li>
                          </div> 
                          <div>
                            <li>110</li>
                          </div>
                        </div>
                        <p>finely ground coffee, water, cardamom, sugar</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                        <div className='menu-label'>
                          <div>
                            <li>Cappuccino</li>
                          </div> 
                          <div>
                            <li>120</li>
                          </div>
                        </div>
                        <p>espresso, steamed milk, milk foam</p>
                    </div>
                  </ul>
              </div>
          </div>
          <div className="bottom-grid">
            <div className="menulist">
                <ul>  
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Caramel Frappuccino</li>
                        </div> 
                        <div>
                          <li>170</li>
                        </div>
                      </div>
                      <p>espresso, caramel syrup, milk, ice, whipped cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Vanilla Latte</li>
                        </div> 
                        <div>
                          <li>140</li>
                        </div>
                      </div>
                      <p>espresso, steamed milk, vanilla syrup</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Irish Coffee</li>
                        </div> 
                        <div>
                          <li>180</li>
                        </div>
                      </div>
                      <p>coffee, Irish whiskey, sugar, cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Cinnamon Dolce Latte</li>
                        </div> 
                        <div>
                          <li>170</li>
                        </div>
                      </div>
                      <p>espresso, steamed milk, cinnamon dolce syrup, whipped cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Hazelnut Coffee</li>
                        </div> 
                        <div>
                          <li>140</li>
                        </div>
                      </div>
                      <p>brewed coffee, hazelnut syrup, milk</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Coconut Iced Coffee</li>
                          </div> 
                          <div>
                            <li>150</li>
                          </div>
                        </div>
                        <p>cold brew coffee, coconut milk, sweetener, ice</p>
                      </div>
                    {/* Dish Label, Price and Ingredients */}
                      <div>
                        <div className='menu-label'>
                          <div>
                            <li>Affogato</li>
                          </div> 
                          <div>
                            <li>120</li>
                          </div>
                        </div>
                        <p>espresso, vanilla ice cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                        <div className='menu-label'>
                          <div>
                            <li>Café au Lait</li>
                          </div> 
                          <div>
                            <li>120</li>
                          </div>
                        </div>
                        <p>brewed coffee, equal parts steamed milk</p>
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

export default Coffee
