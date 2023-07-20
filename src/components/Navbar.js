import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/Cafe Lumiere Logo.png';
import './navbar.css';

/**
 * Navbar component.
 * A responsive navigation bar with a hamburger menu for mobile devices.
 * The navigation links include Home, About, Blogs, and Contact Us.
 */
const Navbar = () => {
  // State to track the open/closed state of the hamburger menu
  const [isOpen, setOpen] = useState(false);

  /**
   * useEffect hook to toggle the 'curtain' class on the body element based on the isOpen state.
   * Adds the class if isOpen is true, removes it if isOpen is false.
   */
  useEffect(() => {
    document.body.classList.toggle('curtain', isOpen);
  }, [isOpen]);

  /**
   * Toggles the isOpen state.
   */
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger menu */}
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <span></span>
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

      {/* Overlay when the hamburger menu is open */}
      {isOpen && <div className="dark-overlay"></div>}

      {/* Navbar */}
      <div className='navbar'>
        <div className='logo-cnt'>
          <img src={Logo} alt="Cafe Lumiere Logo" />
        </div>

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

        {/* Hamburger toggle button */}
        <div className={`hamburger-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div>
            <Hamburger
              toggled={isOpen}
              toggle={handleToggle}
              size={25}
              duration={0.1}
              rounded
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
