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
              <div className="chronicles-img blogs-img">
              </div>
              <div className="blog-posted">
                <p>07 / 22 / 2023</p>
              </div>
              <div className="blog-title">
                <h1>Coffee Chronicles: Sipping through Time and Cultures</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            {/* Second Blog */}
            <div className="bliss blogs">
              <div className="bliss-img">
              </div>
              <div className="blog-posted">
                <p>03 / 11 / 2023</p>
              </div>
              <div className="blog-title">
                <h1>Unveiling the Art of Brewing Blissful Cups at Home</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur tellus euismod, luctus enim id, venenatis velit. Sed cursus, neque quis vulputate tristique, augue elit consectetur elit. Suspendisse ornare ligula eu semper tempor. Fusce interdum, sapien ac fermentum vehicula, mi enim tincidunt neque, a blandit mi orci a urna. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque congue volutpat elit ac gravida. Aliquam eget dui at felis pellentesque tincidunt.</p>
              </div>
            </div>
            {/* Third Blog */}
            <div className="delights blogs">
              <div className="delights-img blogs-img">
                </div>
                <div className="blog-posted">
                  <p>02 / 14 / 2023</p>
               </div>
                <div className="blog-title">
                  <h1>10 Most Popular Pastries in Europe</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique nulla ac nisi venenatis, id rhoncus elit tincidunt. Cras mattis nibh vitae dolor.</p>
                </div>
            </div>
            {/* Fourth Blog */}
            <div className="culture blogs">
              <div className="culture-img blogs-img">
                </div>
                <div className="blog-posted">
                 <p>06 / 01 / 2023</p>
                </div>
                <div className="blog-title">
                  <h1>Best Alternatives to Caffeine</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            {/* Fifth Blog */}
            <div className="temptations blogs">
              <div className="temptations-img blogs-img">
                </div>
                <div className="blog-posted">
                  <p>05 / 30 / 2023</p>
                </div>
                <div className="blog-title">
                  <h1>Reasons Why You'll love These Desserts</h1>
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
