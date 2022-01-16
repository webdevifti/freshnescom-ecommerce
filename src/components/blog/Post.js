import React from 'react'
import { Link } from 'react-router-dom'
import {PostData } from '../../assets/data'

const Post = () => {
    return (
        <>
        {
            PostData.map((post, index) => (
                <div className='single-post' key={index}>
                    <div className='article'>
                        <img src={post.thumbnail} alt="blog Thumbnail" />
                        <span className='tag-name'>{post.category}</span>
                        <Link to={`/blog/${post.url}`}> <h3>{post.title}</h3></Link>
                        
                        <span className='author_name'>{post.author}</span>
                        <span className='post_time'>{post.date}</span>

                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Post
