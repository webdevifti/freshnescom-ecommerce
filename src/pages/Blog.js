import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

import Post from '../components/blog/Post';
import BlogHeaderSection from '../components/blog/BlogHeaderSection';
import BlogLeftSidebar from '../components/blog/BlogLeftSidebar';

function Blog() {
    return (
        <div className="main__wrapper">
            <Header />
                <div className='container'>
                   <BlogHeaderSection />
                   <div className='blog-main-content'>
                       <div className='blog-left-side-link'>
                            <BlogLeftSidebar />
                       </div>
                       <div className='blog-post-grid'>
                            <div className='blog-posts'>
                               <Post />
                            </div>
                       </div>
                   </div>
                </div>
            <Footer />
        </div>
    )
}

export default Blog
