import React from 'react'
import { Link } from 'react-router-dom'  
const SingleBlogSocialShare = () => {
    return (
        <section className='blog-social-share'>
            <div className='social-links'>
                <h4>Share</h4>
                <Link to="/"> <i className='fa fa-facebook'></i> Facebook</Link>
                <Link to="/"> <i className='fa fa-pinterest'></i> Pinterest</Link>
                <Link to="/"> <i className='fa fa-twitter'></i> Twitter</Link>
                <Link to="/"> <i className='fa fa-linkedin'></i> Linkedin</Link>
            </div>
        </section>
    )
}

export default SingleBlogSocialShare
