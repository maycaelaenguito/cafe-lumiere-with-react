import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Cafe Lumiere Logo.png';
import './navbar.css';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  /**
   * Handles the toggling of the hamburger menu.
   * @param {boolean} newState - The new state of the hamburger menu.
   */
  const handleToggle = (newState) => {
    setOpen(newState);
  };

  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='logo-cnt'>
        <img src={Logo} alt="Cafe Lumiere Logo"/>
      </div>

      {/* Navigation Menu */}
      <div className='nav-menu'>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/blogs">
            <li>Blogs</li> 
          </Link>
          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Toggle Button */}
      <div className='hamburger-toggle'>
        <div>
          <Hamburger
            toggled={isOpen}
            toggle={handleToggle}
            size={25}
            duration={0.4}
            rounded
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
