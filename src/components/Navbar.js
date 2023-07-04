import React, { useState } from 'react';
import Logo from '../assets/Cafe Lumiere Logo (1).png';
import './navbar.css';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='navbar'>
      <div>
        <img src={Logo} alt="Cafe Lumiere Logo"/>
      </div>
      <div className='hamburger-toggle'>
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} duration={0.4} rounded/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
