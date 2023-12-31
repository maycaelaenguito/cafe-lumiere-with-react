import React from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';
import '../css/menucomponent.css';



const MenuComponent = () => {
  return (
    <div className='menu-component'>
      <div className="menu-container">
        <div className="menu-category">
          <div className="category-container">
          <Link to="/about/menu/coffee">
            <div className="coffee food-menu">
                <h1>Coffee</h1>
            </div>
            </Link>
          </div>
          <div className="category-container">
            <Link to="/about/menu/main-dish">
              <div className="food food-menu">
                <h1>Main Dishes</h1>
              </div>
            </Link>
          </div>
          <div className="category-container">
            <Link to="/about/menu/beverages">
              <div className="drinks food-menu">
                <h1>Beverages</h1>
              </div>
            </Link>
          </div>
          <div className="category-container">
           <Link to="/about/menu/desserts-appetizers">
              <div className="desserts food-menu">
                <h1>Desserts & Appetizers</h1>
              </div>
           </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MenuComponent;
