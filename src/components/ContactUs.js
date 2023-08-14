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
       <div>
          <h1>Reserve a Table or Connect with Us!</h1>
          <p>Book a reservation or get in touch.</p>
          <div className="contactus-content">

            {/* Booking */}
              <div className="contactus-booking">
                <div className="booking-container">
                  <Booking/>
                </div>
              </div>

            {/* Form */}
            {/* <div className="contact-details">
            <h3>Reach Us</h3>
            <div className='details'>
              <div className="e-address contact-info">
                <div>
                  <h4>Email</h4>
                </div>
                <div>
                  <p>info@cafelumiere.com</p>
                </div>
              </div>
              <div className="phone-number contact-info">
                <div>
                  <h4>Phone</h4>
                </div>
                <div>
                  <p>(05) 3888-9920</p>
                </div>
              </div>
              <div className="address contact-info">
                <div>
                  <h4>Address</h4>
                </div>
                <div>
                  <p>987 Araneta Avenue, Quezon City, Metro Manila, Philippines</p>
                </div>
              </div>
            </div>
            </div> */}

          </div>
       </div>
      </div>
      
      <div className="contactus-container">
       
      </div>
    </div>
  )
}

export default ContactUs
