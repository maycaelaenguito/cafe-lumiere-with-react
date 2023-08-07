import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css'

const MenuBtn = () => {
  return (
    <div className='menu menu-btn'>
        <Link to="/about/menu">
            <button>
            See Full Menu
            </button>
        </Link>
    </div>
  )
}

export default MenuBtn
