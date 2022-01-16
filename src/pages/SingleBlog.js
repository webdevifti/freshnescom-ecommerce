import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

import BlogHeaderBanner from '../components/blog/SingleBlogHeaderBanner';
import BlogArticle from '../components/blog/SingleBlogArticle';
import SingleBlogLeftSidebar from '../components/blog/SingleBlogLeftSidebar';
import SingleBlogSocialShare from '../components/blog/SingleBlogSocialShare';
import SingleBlogRelatedTopics from '../components/blog/SingleBlogRelatedTopics';
import SingleBlogCommentSection from '../components/blog/SingleBlogCommentSection';

const SingleBlog = () => {
    const { blog_slug } = useParams();
    return (
        <div className="main__wrapper">
            <Header />
                <div className='container'>
                    <ul className='bredcrumb'>
                        <li><Link to="/">Blog</Link></li> <span>/</span>
                        <li className='bredcrumb_active'>{blog_slug}</li>
                    </ul>
                    
                    <BlogHeaderBanner />

                    <div className='blog-page-main-container'>

                        <SingleBlogLeftSidebar/>

                        <div className='single-blog-right-content'>
                            <BlogArticle />
                        </div>
                    </div>


                   <SingleBlogSocialShare />

                    <SingleBlogCommentSection />
                    <SingleBlogRelatedTopics />

                </div>
            <Footer />
        </div>
    )
}

export default SingleBlog
