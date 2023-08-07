import React from 'react';
import { Link } from 'react-router-dom';
import '../css/buttons.css'

const BlogsBtn = () => {
return (
    <div className='menu menu-btn' style={{marginBottom: '4rem'}}>
        <Link to="/blogs">
            <button>
            Read More
            </button>
        </Link>
    </div>
    )
}

export default BlogsBtn
