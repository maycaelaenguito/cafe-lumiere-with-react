import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/Cafe Lumiere Logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='footer-wrapper'>
            <div className="footer-holder">
                {/* Footer first row left items */}
                <div className="footer-left">
                    <div className='footer-item'>
                        <div className='footer-logo'>
                            <img src={FooterLogo} alt="Footer Logo" />
                        </div>
                    </div>

                    <div className="footer-item">
                        <div className="locations">
                            <h1>Locations</h1>
                            <ul>
                                <li><Link to="">Cebu City</Link></li>
                                <li><Link to="">Metro Manila</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
               
               {/* Footer first row right items */}
               <div className="footer-right">
                
               <div className="footer-item">
                        <div className="footer-links">
                        <div>
                            <h1>Links</h1>
                                <ul>
                                <li><Link to="/about/menu">Full Menu</Link></li>
                                <li><Link to="">Blogs</Link></li>
                                <li><Link to="">Careers</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                                </ul>
                        </div>
                        </div>
                    </div>

                    <div className="footer-item">
                        <div className="open-hours">
                            <div>
                                <h1>Open Hours</h1>
                            </div>
                            <div>
                                <div>
                                <p>
                                    Monday - Friday <span className='dash'></span>10:00 - 21:00
                                </p>
                                </div>
                                <p>
                                Saturday - Sunday <span className='dash'></span>10:00 - 23:00 
                                </p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>

            <div className="bottom-footer">
                <div className="copyright">
                    <p title='Hello'>© 2023 <Link to='/'>Maycaela</Link>. <span>All rights reserved.</span></p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
