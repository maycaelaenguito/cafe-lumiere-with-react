import React, { useState } from 'react';
import '../css/booking.css';
import CustomDropdown from './CustomDropdown';
import CustomCalendar from './CustomCalendar';



const Booking = () => {

  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div>
      <h3>Reserve Your Table</h3>
      <div className='persons'>
        <CustomDropdown/>
      </div>
      <div className='booking-date'>
       <CustomCalendar/>
      </div>
      <div>
        <label htmlFor="selectedTime">Time:</label>
        <input
          type="time"
          id="selectedTime"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
    </div>
  );
};

export default Booking;
