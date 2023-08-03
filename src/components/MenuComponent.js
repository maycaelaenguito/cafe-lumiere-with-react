import React from 'react';
import '../css/menu.css';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <div className='menu-component'>
      <div className="menu-container">
        <div className="menu-category">
          <div className="category-container">
          <Link to="/about/menu">
            <div className="coffee food-menu">
                <h1>Coffee</h1>
            </div>
            </Link>
          </div>
          <div className="category-container">
            <Link to="/about/menu">
              <div className="food food-menu">
                <h1>Food</h1>
              </div>
            </Link>
          </div>
          <div className="category-container">
            <Link to="/about/menu">
              <div className="drinks food-menu">
                <h1>Drinks</h1>
              </div>
            </Link>
          </div>
          <div className="category-container">
           <Link to="/about/menu">
              <div className="desserts food-menu">
                <h1>Desserts</h1>
              </div>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
