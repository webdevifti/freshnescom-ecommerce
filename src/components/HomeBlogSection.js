import React from 'react'
import { Link } from 'react-router-dom'
import blog_img1 from "../assets/images/food.jpg"
import author_img from '../assets/images/author.png'
const HomeBlogSection = () => {
    return (
        
        <div className="section__headline">
            <div className="headline-heading">
                <h3>Read Our Blog Posts</h3>
                <Link to="/">Go to blog <span className="material-icons">chevron_right</span></Link>
            </div>
            <div className="home__blogs">
                <div className="home__blogs_left">
                    <div className="home__blogs__left__card">
                        <div className="blog_header_content">
                            <img src={blog_img1} alt="" />
                            <span className="category">Dinner tips</span>
                        </div>

                        <div className="blog_bottom_content">
                            <h3>Our Chef tips for a great and tasty dinner ready in 20 minutes</h3>
                            <div className='blog_bottom_content_footer'>

                            <img src={author_img} alt="" />
                            <span>Author</span>
                            <span>21, January, 2022</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="home__blogs_middle">
                    <img src={blog_img1} alt="" />
                    <span className="category">Dinner tips</span>
                    <h3>Our Chef tips for a great and tasty dinner ready in 20 minutes</h3>
                    <div className='blog_middle_footer'>
                            
                        <span>Author</span>
                        <span>21, January, 2022</span>
                    </div>

                </div>
                <div className="home__blogs__right">
                    <div className='home__blogs_right_content'>

                        <div className='home__blogs__right__inner_left'>
                            <h3>Our Chef tips for a great and tasty dinner ready in 20 minutes</h3>
                            <span>Author</span>
                            <span>21, January, 2022</span>
                        </div>
                        <img src={blog_img1} alt="" />
                    </div>
                    <div className='home__blogs_right_content'>

                        <div className='home__blogs__right__inner_left'>
                            <h3>Our Chef tips for a great and tasty dinner ready in 20 minutes</h3>
                            <span>Author</span>
                            <span>21, January, 2022</span>
                        </div>
                        <img src={blog_img1} alt="" />
                    </div>
                    <div className='home__blogs_right_content'>

                        <div className='home__blogs__right__inner_left'>
                            <h3>Our Chef tips for a great and tasty dinner ready in 20 minutes</h3>
                            <span>Author</span>
                            <span>21, January, 2022</span>
                        </div>
                        <img src={blog_img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlogSection
