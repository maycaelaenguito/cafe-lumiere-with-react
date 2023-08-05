import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/Cafe Lumiere Logo.png';
import '../css/navbar.css';

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
          <Link exact="true" to="/">
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
            <Link to='/'><img src={Logo} alt="Cafe Lumiere Logo" /></Link>
          </div>
          <div className='nav-menu'>
            <ul id="menu">
              <li className='sub-menu'>
                <NavLink exact to="/" activeClassName="active" className='parent-links'>
                  Home
                </NavLink>
                <div id='sub-links'>
                  <ul>
                    <li> <Link to="/">Homepage</Link> </li>
                    <li> <a href="/#reviews">Reviews</a> </li>
                    <li> <a href="/#open-hours">Open Hours</a> </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu">
                <NavLink exact="true" to="/about" activeclassname="active">About</NavLink>
                <div id="sub-links">
                  <ul>
                    <li> <Link to="/about/how-we-started">Our Team</Link> </li>
                    <li> <Link to="/about/menu">Our Menu</Link> </li>
                  </ul>
                </div>
              </li>
              <li className="sub-menu"> 
                <NavLink exact="true" to="/blogs" activeclassname="active">Blogs</NavLink>
               <div id="sub-links">
                <ul>
                    <li> <Link to="/blogs/blog-one">Coffee Chronicles</Link> </li>
                    <li> <Link to="/blogs/blog-two">Brewing Bliss</Link> </li>
                    <li> <Link to="/blogs/blog-three">Divine Delights</Link> </li>
                    <li> <Link to="/blogs/blog-four">Caffeine Culture</Link> </li>
                    <li> <Link to="/blogs/blog-four">Sweet Temptations</Link> </li>

                  </ul>
               </div>
              </li>
              <li className="sub-menu"> 
                <NavLink exact="true" to="/contactus" activeclassname="active">Contact Us</NavLink> 
                <div id="sub-links">
                  <ul>
                    <li><Link to="/contactus/booking">Book Now</Link></li>
                  </ul>
                </div>
              </li>
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
