import React from 'react'
import { Link } from 'react-router-dom'
const BannerHeading = () => {
    return (
        <div className="banner__area">
            <div className="banner__card">
                <div className="banner__card__inner">
                    <p>banner subfocus</p>
                    <h1>Space for Heading</h1>
                    
                    <Link to="/">Read Recepies <span className="material-icons">chevron_right</span></Link>
                </div>
            </div>
            <div className="banner__card">
                <div className="banner__card__inner">
                    <p>banner subfocus</p>
                    <h1>Space for Heading</h1>
                    
                    <Link to="/">Read Recepies <span className="material-icons">chevron_right</span></Link>
                </div>
            </div>
        </div>
    )
}

export default BannerHeading
