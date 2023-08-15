import React from 'react';
import Navbar from './Navbar';
import '../css/contactus.css';
import Booking from './Booking';
import Footer from './Footer';
import ContactDets from './ContactDets';


const ContactUs = () => {
  return (
    <div>
      <div className='contactus-nav'>
        <Navbar/>
      </div>
      <div className='contactus-header'>
       <div>
         <div className='htk'>
          <h1>Book a reservation or connect with us.</h1>
         </div>
        </div>
      </div>
      <div className="contactus-content">
        {/* Booking */}
        <div className="contactus-booking">
          <div className="booking-container">
            <Booking/>
          </div>
        </div>
        <div className='dets-con'>
            <ContactDets/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
