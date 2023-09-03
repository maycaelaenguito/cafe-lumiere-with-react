import React from 'react';
import MenuComponent from './MenuComponent';
import Navbar from './Navbar';
import TodaysMenu from './TodaysMenu';
import Footer from './Footer';


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
      <TodaysMenu/>
      <Footer/>
    </div>
  )
}

export default Menu
