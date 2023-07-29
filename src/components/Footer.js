import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-left">
        <div className="footer-links">
            <h1>Links</h1>
            <ul>
            <li><Link to="/about/menu">Full Menu</Link></li>
            <li><Link to="">Blogs</Link></li>
            <li><Link to="">Careers</Link></li>
            <li><Link to="">Contact Us</Link></li>
            </ul>
        </div>
      </div>
      <div className="footer-middle">
        <div className="locations">
            <h1>Locations</h1>
            <ul>
                <li><Link to="">Cebu City</Link></li>
                <li><Link to="">Metro Manila</Link></li>
            </ul>
        </div>
      </div>
      <div className="footer-right">
        <div className="open-hours">
            <div>
                <h1>Open Hours</h1>
            </div>
            <div>
                <div>
                <p>
                    Monday - Friday <span className='dash'></span>10:00 am - 9:00 pm
                </p>
                </div>
                <p>
                Saturday - Sunday <span className='dash'></span>10:00 am - 11:00 pm
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
