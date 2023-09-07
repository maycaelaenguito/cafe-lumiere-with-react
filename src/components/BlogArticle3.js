import React from 'react';
import Navbar from './Navbar';
import BacktoTop from './BacktoTop';
import Footer from './Footer';

const BlogArticle3 = () => {
  return (
    <div className='blog-1'>
      <div className="blogs-nav">
        <Navbar/>
      </div>
      <div className="blog-posts">
        <div className="main-article article-item">
          <div>
            <div className="post-img">
              <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1691368924/Cafe%20Lumiere/bread-1284438_1280_wg5w6y.jpg" alt="Blog 1" />
              </div>
              <div className="blog-date">
                    <p>07 / 22 / 2023</p>
              </div>
              <div className="blog-header-title">
                <h1>Top 10 Must Try Pastries</h1>
              </div>
              <div className="blog-content">
                <div className="blogs-sub blogs-item">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis perferendis veritatis eius porro ullam impedit recusandae corporis quia facilis voluptatem sint aspernatur a sunt, tenetur doloremque ipsum sit rem, repellat hic at, amet architecto possimus fugit. Quam iusto ut tenetur!</p>
                <div className='blogs-item'>
                  <h2>Lorem ipsum dolor sit amet.</h2>
                    <p><span>Lorem, ipsum dolor. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit perspiciatis eveniet consequuntur minus temporibus minima dolores! Ipsum rem voluptatem veniam odit, nostrum quidem a voluptatibus, laboriosam saepe consequatur pariatur. Quasi necessitatibus quod quisquam id, fugiat beatae laborum, exercitationem laudantium quaerat repellat minima reprehenderit itaque maxime. Ea, possimus non? </p>
                    <p><span>Lorem, ipsum dolor.  </span>Voluptas excepturi sequi quae odio. Quia debitis id dignissimos similique praesentium ratione suscipit distinctio explicabo nobis ipsum tempore perferendis iure, reprehenderit possimus numquam sed eligendi enim amet fuga quo! Officiis repudiandae illum ipsum? Sint, omnis dicta! Nulla, laborum possimus! Asperiores illo numquam nostrum nam minus nulla laborum aperiam nisi odio voluptatem..</p>
                    <p><span>Lorem, ipsum.   </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestias provident, tenetur accusantium molestiae obcaecati aspernatur blanditiis, nisi eum odio praesentium!</p>
                    <p><span>Lorem, ipsum.  </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae distinctio quam eveniet dolor hic! Hic inventore aperiam maxime quo provident.</p>
                </div>
                <div className="blog-conclusion blogs-item">
                  <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, tempore?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur suscipit saepe tempore optio doloremque minima dolorem illo possimus iste rem. Quas quibusdam, animi quam sed debitis iste eveniet deserunt temporibus!</p>
                    <div>
                      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eaque?</span>
                      <ol>
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus numquam tempore tempora.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel tempora necessitatibus quia quam. Vitae quasi aspernatur voluptatem deserunt totam.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi earum aut nulla culpa dignissimos.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, exercitationem voluptates obcaecati minus reiciendis totam necessitatibus perferendis minima alias sunt.</li>
                      </ol>
                    </div>       
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum rem unde vitae cum harum modi deserunt officiis facere. Alias ratione voluptatem, temporibus voluptas modi unde quos assumenda quas beatae. Magnam sit beatae animi totam accusantium officia consequatur veritatis, dolorem quasi vero necessitatibus, labore aspernatur autem laudantium iure fugiat eveniet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-article article-item">
          <div>
            <h3>Other articles you might enjoy</h3>
            <div className="other-articles-wrapper">
              <div className='other-articles-img'>
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1694066096/Cafe%20Lumiere/matchmocha_1_r2cwff.png" alt="other blogs" />
              </div>
              <div className='other-articles-title'>
                  <div>
                    <div>
                      <p>07 / 22 / 2023</p>
                    </div>
                    <h5>From Espresso to Latte: A Coffee Drinker's Handbook</h5>
                  </div>
              </div>
            </div>
            <div className="other-articles-wrapper">
              <div className='other-articles-img'>
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693996461/Cafe%20Lumiere/matchmocha_qke1ut.png" alt="other blogs" />
              </div>
              <div className='other-articles-title'>
                  <div>
                    <div>
                      <p>07 / 22 / 2023</p>
                    </div>
                    <h5>Matcha vs. Mocha: Which Brew is Right for You?</h5>
                  </div>
              </div>
            </div>
            <div className="other-articles-wrapper">
              <div className='other-articles-img'>
                <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1691369279/Cafe%20Lumiere/cake-1284548_1280_powrs4.jpg" alt="other blogs" />
              </div>
              <div className='other-articles-title'>
                <div>
                  <div>
                    <p>07 / 22 / 2023</p>
                  </div>
                  <h5>Indulge Your Sweet Tooth: Exploring the Best Dessert Spots in Manila</h5>
                </div>
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

export default BlogArticle3
