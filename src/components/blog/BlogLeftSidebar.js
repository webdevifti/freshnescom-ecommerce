import React from 'react'
import { Link } from 'react-router-dom'

const BlogLeftSidebar = () => {
    return (
        <>
            <div className='blog-widgets'>
                <h3>Archives</h3>
                <Link to="/">December 2020</Link>
                <Link to="/">November 2020</Link>
                <Link to="/">October 2020</Link>
                <Link to="/">September 2020</Link>
                <Link to="/">August 2020</Link>
            </div>
            <div className='blog-widgets categories'>
                <h3>Category</h3>
                <Link to="/">Food</Link>
                <Link to="/">Chefs specialist</Link>
                <Link to="/">Vegetables</Link>
                <Link to="/">Meat</Link>
                <Link to="/">Recommendations</Link>
            </div>
            <div className='blog-widgets'>
                <h3>Join our list</h3>
                <p>signup to be the fisrt to hear about exclusive deals, special offers,recepies from our masters and others.</p>
            </div>
        </>
    )
}

export default BlogLeftSidebar
