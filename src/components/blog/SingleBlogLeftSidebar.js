import React from 'react'
import { Link } from 'react-router-dom';
import back_arrow from '../../assets/images/Vector.png';
const SingleBlogLeftSidebar = () => {
    return (
        <div className='single-blog-left'>
            <div className='tag-widget'>
                <h3>Tags</h3>
                <Link to="/blog">Food</Link>
                <Link to="/blog">Receipes</Link>
                <Link to="/blog">Vegetables</Link>
            </div>
            <Link to="/blog" className='back-to-blog-link'><img src={back_arrow} className='back-to-blog-icon' alt="" /> Back to Blog</Link>
        </div>
    )
}

export default SingleBlogLeftSidebar
