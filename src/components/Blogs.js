import React from 'react';
import Navbar from './Navbar';
import '../css/blogs.css';


const Blogs = () => {
  return (
    <div style={{height: '10000vh'}}>
      <div className="blogs-nav">
        <Navbar/>
      </div>
      <div className='blogs-header'>
          <div className="blogs-container">
            {/* First Blog */}
            <div className="chronicles blogs">
              <div className="chronicles-img">
              </div>
              <div className="blog-title">
                <h1>The Coffee Chronicles: Sipping through Time and Cultures</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* Second Blog */}
            <div className="bliss blogs">
              <div className="bliss-img">
              </div>
              <div className="blog-title">
                <h1>The Coffee Chronicles: Sipping through Time and Cultures</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* Third Blog */}
            <div className="delights blogs">
              <div className="chronicles-img">
                </div>
                <div className="blog-title">
                  <h1>The Coffee Chronicles: Sipping through Time and Cultures</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            {/* Fourth Blog */}
            <div className="culture blogs">
              <div className="chronicles-img">
                </div>
                <div className="blog-title">
                  <h1>The Coffee Chronicles: Sipping through Time and Cultures</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            {/* Fifth Blog */}
            <div className="temptations blogs">
              <div className="chronicles-img">
                </div>
                <div className="blog-title">
                  <h1>The Coffee Chronicles: Sipping through Time and Cultures</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Blogs
