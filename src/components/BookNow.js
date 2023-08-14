import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css'

const BookNow = () => {
  return (
    <div className='menu menu-btn'>
        <Link to="/contactus/booking">
            <button>
            Book A Table
            </button>
        </Link>
    </div>
  )
}

export default BookNow
