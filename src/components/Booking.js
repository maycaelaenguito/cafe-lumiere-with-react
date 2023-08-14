import React from 'react';
import '../css/booking.css';
import CustomDropdown from './CustomDropdown';
import CustomCalendar from './CustomCalendar';
import TimePicker from './TimePicker';

const Booking = () => {


  return (
    <div>
      <h3>Reserve Your Table</h3>
      <div className='persons'>
        <CustomDropdown/>
      </div>
      <div className='booking-date'>
       <CustomCalendar/>
      </div>
      <div className='time-picker'>
       <TimePicker/>
      </div>
    </div>
  );
};

export default Booking;
