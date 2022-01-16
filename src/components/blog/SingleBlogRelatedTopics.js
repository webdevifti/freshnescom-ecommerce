import React from 'react'
import { Link } from 'react-router-dom';
import { relatedTopicsData } from '../../assets/data';
const SingleBlogRelatedTopics = () => {
    return (
        <section className="section__headline">
        <div className="headline-heading">
        <h3>Related Topics</h3>
        <Link to="/">View all <span className="material-icons">chevron_right</span></Link>
        </div>
        <div className="headline__blog__item">
            {
                relatedTopicsData.map((data,index) => {
                    return (
                        <div key={index} className='single-post'>
                        <div className='article'>
                            <img src={data.thumbnail} alt="blog Thumbnail" />
                            <span className='tag-name'>{data.category}</span>
                            <Link to="/blog"><h3>{data.title}</h3></Link>
                            <span className='author_name'>{data.author}</span>
                            <span className='post_time'>{data.date}</span>
        
                        </div>
                    </div>
                    )
                })
            }
           
        </div>
    </section>
    )
}

export default SingleBlogRelatedTopics
