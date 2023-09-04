import React from 'react'
import Navbar from './Navbar';
import '../css/menu.css';
import Footer from './Footer';

const Coffee = () => {
  return (
    <div className='cofd'>
      <div className="blogs-nav">
        <Navbar/>
      </div>
      <div className="coffee-menu menu-top">
        <div className='menu-grid-container'>
          <div className="top-grid">
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
          <div className="bottom-grid">
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
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Coffee
