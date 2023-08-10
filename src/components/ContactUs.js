import React from 'react';
import Navbar from './Navbar';
import '../css/contactus.css'


const ContactUs = () => {
  return (
    <div>
      <div className='contactus-nav'>
        <Navbar/>
      </div>
      <div className='contactus-header'>
        <p>Contact Us</p>
      </div>
      <div className="contactus-container">
        <form action="https://getform.io/f/fb1a06c3-1dcb-48cd-a078-8bf75ab83af8" method="POST">
            <div className='form-item'>
              <label name="name">Full Name <span>*</span></label>
              <input type="text" name="name" placeholder='e.g., John Doe' required />
            </div>
            <div className="form-item">
              <label name="email">Email Address <span>*</span></label>
              <input type="email" name="email" placeholder='user@example.com' required />
            </div>
            <div className="form-item">
              <label name="message">Message <span>*</span></label>
              <div className='center'>
                <textarea name="message" id="" required></textarea>
              </div>
            </div>
            <div className="form-btn">
              <button type="submit">Send</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
