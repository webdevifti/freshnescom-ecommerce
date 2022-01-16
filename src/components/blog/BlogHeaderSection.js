import React from 'react'
import { Link } from 'react-router-dom'
import { BlogHeaderSectionData } from '../../assets/data'

const BlogHeaderSection = () => {
    return (
        <div className='blog-header-section'>
            <div className='blog-header-conten'>
                
                {
                    BlogHeaderSectionData.map((data, index) => (
                        <div className="home__blogs_left" key={index}>
                            <div className="home__blogs__left__card">
                                <div className="blog_header_content">
                                    <img src={data.thumbnail} alt="" />
                                    <span className="category">{data.category}</span>
                                </div>

                                <div className="blog_bottom_content">
                                    <Link to="/"><h3>{data.title}</h3></Link>
                                    <div className='blog_bottom_content_footer'>

                                    <img src={data.authorimg} alt="" />
                                    <span>{data.author}</span>
                                    <span>{data.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogHeaderSection
