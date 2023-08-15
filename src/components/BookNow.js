import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css'

const BookNow = () => {
  return (
    <div className='menu menu-btn booking-btn'>
        
          <Link to="https://www.opentable.com/">
              <button>
              Book A Table
              </button>
          </Link>

    </div>
  )
}

export default BookNow
