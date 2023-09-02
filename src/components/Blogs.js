import React from 'react';
import Navbar from './Navbar';
import '../css/blogs.css';
// import BlogsBtn from './BlogsBtn';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import BacktoTop from './BacktoTop';

const Blogs = () => {
  return (
    <div>
      <div className="blogs-nav">
        <Navbar/>
      </div>
      <div className='blogs-header'>
          <div className="blogs-container">
            {/* First Blog */}
            <div className="chronicles blogs">
              <div className='just-center'>
                <div className="chronicles-img blogs-img">
                </div>
              </div>
              <div className="blog-posted">
                <p>07 / 22 / 2023</p>
              </div>
              <div className="blog-title">
                <h1>Matcha vs. Mocha: Which Brew is Right for You?</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="blogs-btn">
                <div className='menu menu-btn blg-btn' style={{marginBottom: '4rem'}}>
                    <Link to ="/blogs/blog-article-1">
                            <button>
                            Read More
                            </button>
                    </Link>
                </div>
              </div>
            </div>
            {/* Second Blog */}
            <div className="bliss blogs">
              <div className="just-center">
                <div className="bliss-img blogs-img">
                </div>
              </div>
              <div className="blog-posted">
                <p>03 / 11 / 2023</p>
              </div>
              <div className="blog-title">
                <h1>From Espresso to Latte: A Coffee Drinker's Handbook</h1>
              </div>
              <div className="blog-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur tellus euismod, luctus enim id, venenatis velit. Sed cursus, neque quis vulputate tristique, augue elit consectetur elit. Suspendisse ornare ligula eu semper tempor. Fusce interdum, sapien ac fermentum vehicula, mi enim tincidunt neque, a blandit mi orci a urna. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque congue volutpat elit ac gravida. Aliquam eget dui at felis pellentesque tincidunt.</p>
              </div>
              <div className="blogs-btn">
              <div className='menu menu-btn blg-btn' style={{marginBottom: '4rem'}}>
                    <Link to ="/blogs/blog-article-2">
                            <button>
                            Read More
                            </button>
                    </Link>
                </div>
              </div>
            </div>
            {/* Third Blog */}
            <div className="delights blogs">
              <div className="just-center">
                <div className="delights-img blogs-img">
                </div>
              </div>
                <div className="blog-posted">
                  <p>02 / 14 / 2023</p>
               </div>
                <div className="blog-title">
                  <h1>Top 10 Must Try Pastries</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique nulla ac nisi venenatis, id rhoncus elit tincidunt. Cras mattis nibh vitae dolor.</p>
                </div>
                <div className="blogs-btn">
                  <div className='menu menu-btn blg-btn' style={{marginBottom: '4rem'}}>
                      <Link to ="/blogs/blog-article-3">
                              <button>
                              Read More
                              </button>
                      </Link>
                  </div>
                </div>
            </div>
            {/* Fourth Blog */}
            <div className="culture blogs">
              <div className="just-center">
                <div className="culture-img blogs-img">
                </div>
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
                <div className="blogs-btn">
                  <div className='menu menu-btn blg-btn' style={{marginBottom: '4rem'}}>
                      <Link to ="/blogs/blog-article-4">
                              <button>
                              Read More
                              </button>
                      </Link>
                  </div>
                </div>
            </div>
            {/* Fifth Blog */}
            <div className="temptations blogs">
                <div className="just-center">
                  <div className="temptations-img blogs-img">
                  </div>
                </div>
                <div className="blog-posted">
                  <p>05 / 30 / 2023</p>
                </div>
                <div className="blog-title">
                  <h1>Indulge Your Sweet Tooth: Exploring the Best Dessert Spots in Manila</h1>
                </div>
                <div className="blog-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="blogs-btn">
                  <div className='menu menu-btn blg-btn' style={{marginBottom: '4rem'}}>
                      <Link to ="/blogs/blog-article-5">
                              <button>
                              Read More
                              </button>
                      </Link>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className="floating-btn">
        <BacktoTop />
      </div>
      <Footer/>
    </div>
  )
}

export default Blogs
