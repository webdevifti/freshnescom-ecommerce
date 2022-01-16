import React from 'react'
import { Link } from 'react-router-dom';
import blog_img1 from '../../assets/images/food.jpg';
const BlogHeaderBanner = () => {
    return (
        <div className='single-blog-page-banner'>
            <div className='single-blog-banner-section'>
                <img src={blog_img1} alt="" />
                <div className='banner-text-content'>
                    <div className='inner-content-div'>
                        <div className='inner-container'>
                            <div className='a'>
                                <div className=''><span>Date: </span> <p>12, January 2022</p></div>
                                <div className=''><span>Category: </span> <Link to="/blog">Foods</Link></div>
                                <div className=''><span>Author: </span> <Link to="/blog">Admin</Link></div>
                            </div>
                            <div className='b'>
                                <h2>Space for your heading, can be larger so don’t worry - large heading looks better</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogHeaderBanner
