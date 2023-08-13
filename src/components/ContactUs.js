import React from 'react';
import Navbar from './Navbar';
import '../css/contactus.css';
import Booking from './Booking';


const ContactUs = () => {
  return (
    <div>
      <div className='contactus-nav'>
        <Navbar/>
      </div>
      <div className='contactus-header'>
        <div className="contactus-content">

          {/* Booking */}
            <div className="contactus-booking">
              <div className="booking-container">
                <Booking/>
              </div>
            </div>

          {/* Form */}
          <div className="contact-details">
           <h1>Reach Us</h1>
           <div className=''>

           </div>
          </div>
        </div>
      </div>
      
      <div className="contactus-container">
       
      </div>
    </div>
  )
}

export default ContactUs
