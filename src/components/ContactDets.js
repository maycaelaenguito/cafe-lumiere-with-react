import React from 'react';
import '../css/contactus.css';
import NewsLetter from './NewsLetter';
import GoogleMaps from './GoogleMaps';

const ContactDets = () => {
  return (
    <div className="contactus-container">
        <div className="contact-wrapper">
            <div className="contact-details">
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
            </div>
        </div>
        

        {/* Map */}
        <div className="map">
            <GoogleMaps />
        </div>


        {/* NewsLetter */}
        {/* <div>
            <NewsLetter/>
        </div> */}
    </div>
  )
}

export default ContactDets
