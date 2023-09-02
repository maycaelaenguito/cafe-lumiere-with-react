import React from 'react'
import '../css/aboutus.css';
import Navbar from './Navbar';
import '../css/bgslideshow.css';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
        <div className="aboutus-nav">
            <Navbar/>
        </div>
        <div className="about-us-container">
            <p>Our Team</p>
        </div>
        <div className="team-wrapper">
          <div>
            <div>
                <div className='team-ttl team-item'>
                  <h1>Meet Our Team</h1>
                </div>
                <div className='team-desc team-item'>
                  <p>At the heart of our offerings is the seamless synergy of our team. With a shared love for crafting exquisite cuisine, brewing comforting coffee, and delivering impeccable service, we're here to elevate your every experience.</p>
                </div>
            </div>
            <div className="team-profile">
              {/*  */}
              <div className="team-member">
                <div className="team-img">
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635111/Cafe%20Lumiere/5_rqcj56.png" alt=""/>
                    <div className="overlay">
                      <div className="team-details">
                        <h1>Michael Patel</h1>
                        <p>Owner</p>
                      </div>
                    </div>
                </div>
                  
              </div>
              {/*  */}
              <div className="team-member">
                <div className="team-img">
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635111/Cafe%20Lumiere/6_lr84jp.png" alt=""/>
                    <div className="overlay">
                      <div className="team-details">
                        <h1>Sarah Johnson</h1>
                        <p>Co-Owner</p>
                      </div>
                    </div>
                </div>
                  
              </div>
              {/*  */}
              <div className="team-member">
                <div className="team-img">
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635111/Cafe%20Lumiere/1_ytpnwa.png" alt=""/>
                    <div className="overlay">
                      <div className="team-details">
                        <h1>Daniel Mitchell</h1>
                        <p>Head-Cook</p>
                      </div>
                    </div>
                </div>
                  
              </div>
              {/*  */}
              <div className="team-member">
                <div className="team-img">
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635110/Cafe%20Lumiere/4_shiayl.png" alt=""/>
                    <div className="overlay">
                      <div className="team-details">
                        <h1>Emily Davis</h1>
                        <p>Assistant Cook</p>
                      </div>
                    </div>
                </div>
                  
              </div>
              {/*  */}
              <div className="team-member">
                <div className="team-img">
                  <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635110/Cafe%20Lumiere/2_c0jhns.png" alt=""/>
                    <div className="overlay">
                      <div className="team-details">
                        <h1>Donald Martin</h1>
                        <p>Barista</p>
                      </div>
                    </div>
                </div>
              </div>
              {/*  */}
              <div className="team-member">
                  <div className="team-img">
                    <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693635110/Cafe%20Lumiere/3_czyvp8.png" alt=""/>
                      <div className="overlay">
                        <div className="team-details">
                          <h1>Olivia Anderson</h1>
                          <p>Server</p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <Footer/>
        </div>
  )
}

export default AboutUs
