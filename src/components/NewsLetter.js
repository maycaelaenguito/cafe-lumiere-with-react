import React from 'react';
import SubBtn from './SubBtn';

const NewsLetter = () => {
  return (
    <div className='newsletter-wrapper'>
      <div>
        <div className="nletter">
            <h1>Newsletter</h1>
        </div>
        <form action="">
            <input type="text" placeholder='Full Name'/>
            <input type="email" placeholder='Email'/>
            {/* <SubBtn/> */}
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
