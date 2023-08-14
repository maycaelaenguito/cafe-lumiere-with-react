import React from 'react';
import '../css/booking.css';
import CustomDropdown from './CustomDropdown';
import CustomCalendar from './CustomCalendar';
import TimePicker from './TimePicker';
import BookNow from './BookNow';

const Booking = () => {

  return (

    <div >
      <h3>Reserve your table</h3>
     <div>
        <div className='booking-wrapper'>
          <div className='persons booking-itm'>
            <CustomDropdown/>
          </div>
          <div className='booking-date booking-itm'>
          <CustomCalendar/>
          </div>
          <div className='time-picker booking-itm'>
          <TimePicker/>
          </div>
          <div className='book booking-itm'> 
          <BookNow/>
        </div>
        </div>
     </div>
    </div>
  );
};

export default Booking;
