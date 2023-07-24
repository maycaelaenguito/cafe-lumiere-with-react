import React from 'react';
import './menu.css'

const MenuComponent = () => {
  return (
    <div className='menu-component'>
      <div className="menu-container">
        <div className="menu-title">
            <h1>Our Menu</h1>
        </div>
        <div className="menu-category">
            <div className="coffee food-menu">
                <h1>Coffee</h1>
            </div>
            <div className="food food-menu">
                <h1>Food</h1>
            </div>
            <div className="drinks food-menu">
                <h1>Drinks</h1>
            </div>
            <div className="desserts food-menu">
                <h1>Desserts</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuComponent
