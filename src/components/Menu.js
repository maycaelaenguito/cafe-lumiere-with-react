import React from 'react';
import '../css/menucomponent.css';
import MenuComponent from './MenuComponent';
import Navbar from './Navbar';

const Menu = () => {
  return (
    <div>
      <div className="menu-nav">
        <Navbar/>
      </div>
      <div className='menu-header'>
          <p>Menu</p>
      </div>
      <MenuComponent/>
    </div>
  )
}

export default Menu
