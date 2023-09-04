import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css'

const BookingBtn = () => {
  return (
    <div className='landscape-btn'>
    <Link to="/contactus">
      <button>
        Book Now
      </button>
    </Link>
  </div>
  )
}

export default BookingBtn
