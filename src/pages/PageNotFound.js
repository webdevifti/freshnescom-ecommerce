import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="Error_404_page_not_found">
            <h1>404 !</h1>
            <h3>Your Requested Page Does no Found.</h3>
            <p>Go to Home Page <Link to="/">Home</Link></p>
        </div>
    )
}

export default PageNotFound
