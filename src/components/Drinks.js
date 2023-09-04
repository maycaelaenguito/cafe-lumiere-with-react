import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Drinks = () => {
  return (
    <div>
    <div className="blogs-nav">
      <Navbar/>
    </div>
    <div className="menu-top">
      <div className='menu-title-wrapper'>
        <div className='team-ttl team-item drinks-title menu-bhd'>
          <h1>Beverages</h1>
        </div>
      </div>
      <div className='menu-grid-container'>
        <div className="top-grid menu-grid-item">
          <div className="menulist">
              <ul>  
                <div className='drinks-category'>
                  <h4>Local Beverages</h4>
                </div>
                  {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Halo-Halo Shake</li>
                        </div> 
                        <div>
                          <li>150</li>
                        </div>
                      </div>
                      <p>mixed fruits with ube ice cream</p>
                    </div>
                  {/* Dish Label, Price and Ingredients */}
                  <div>
                      <div className='menu-label'>
                        <div>
                          <li>Buko Pandan Smoothie</li>
                        </div> 
                        <div>
                          <li>120</li>
                        </div>
                      </div>
                      <p>coconut and pandan smoothie</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Calamansi Juice</li>
                        </div> 
                        <div>
                          <li>70</li>
                        </div>
                      </div>
                      <p>calamansi citrus juice</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Mango Shake</li>
                        </div> 
                        <div>
                          <li>130</li>
                        </div>
                      </div>
                      <p>fresh mango blended with ice</p>
                    </div>
                    <div className='drinks-category'>
                      <h4>European Beverages</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Iced Tea</li>
                        </div> 
                        <div>
                          <li>90</li>
                        </div>
                      </div>
                      <p>traditional sweetened iced tea</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Hot Chocolate</li>
                        </div> 
                        <div>
                          <li>110</li>
                        </div>
                      </div>
                      <p>rich and creamy hot cocoa</p>
                    </div>
                    <div className='drinks-category'>
                      <h4>Korean Flavors</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Korean Iced Tea</li>
                        </div> 
                        <div>
                          <li>100</li>
                        </div>
                      </div>
                      <p>traditional Korean barley tea</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Soju Cocktails</li>
                        </div> 
                        <div>
                          <li>150</li>
                        </div>
                      </div>
                      <p>various fruity soju cocktails</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Yuzu Ade</li>
                        </div> 
                        <div>
                          <li>110</li>
                        </div>
                      </div>
                      <p>refreshing yuzu citrus drink</p>
                    </div>
                </ul>
            </div>
        </div>
        <div className="bottom-grid menu-grid-item">
          <div className="menulist">
              <ul>  
                    <div className='drinks-category'>
                      <h4>Classic and Refreshing</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Lemonade</li>
                        </div> 
                        <div>
                          <li>90</li>
                        </div>
                      </div>
                      <p>freshly squeezed lemonade</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Minty Mojito </li>
                        </div> 
                        <div>
                          <li>120</li>
                        </div>
                      </div>
                      <p>classic mint and lime mocktail</p>
                    </div>
                    <div className='drinks-category'>
                      <h4>Specialty Drinks</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Café Lumiere Special Blend</li>
                        </div> 
                        <div>
                          <li>130</li>
                        </div>
                      </div>
                      <p>signature tea blend</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Taro Bubble Tea </li>
                        </div> 
                        <div>
                          <li>140</li>
                        </div>
                      </div>
                      <p>taro Bubble Tea</p>
                    </div>
                    <div className='drinks-category'>
                      <h4>Alcoholic Options</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>San Miguel Pale Pilsen</li>
                        </div> 
                        <div>
                          <li>70</li>
                        </div>
                      </div>
                      <p>beer</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Red or White Wine  </li>
                        </div> 
                        <div>
                          <li>250</li>
                        </div>
                      </div>
                      <p>selected European wines</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Champagne </li>
                        </div> 
                        <div>
                          <li>270</li>
                        </div>
                      </div>
                      <p>grapes, yeast, sugar</p>
                    </div>
                    <div className='drinks-category'>
                      <h4>Non-Alcoholic Specials</h4>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Virgin Piña Colada</li>
                        </div> 
                        <div>
                          <li>140</li>
                        </div>
                      </div>
                      <p>pineapple and coconut mocktail</p>
                    </div>
                    {/* Dish Label, Price and Ingredients */}
                    <div>
                      <div className='menu-label'>
                        <div>
                          <li>Cucumber Cooler</li>
                        </div> 
                        <div>
                          <li>80</li>
                        </div>
                      </div>
                      <p>cucumber and mint infused water</p>
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

export default Drinks
