import React from 'react'
import { Link } from 'react-router-dom';

const FooterTop = () => {
    return (
        <div className="footer-top">
            <div className="footter-item">
                <h3>Get in touch</h3>
                <ul>
                    <li>
                        <Link to='/'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/'>Careers</Link>
                    </li>
                    <li>
                        <Link to='/'>Press Releases</Link>
                    </li>
                    <li>
                        <Link to='/'>Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="footter-item">
                <h3>Connections</h3>
                <ul>
                    <li>
                        <Link to='/'>Facebook</Link>
                    </li>
                    <li>
                        <Link to='/'>Twitter</Link>
                    </li>
                    <li>
                        <Link to='/'>Instagram</Link>
                    </li>
                    <li>
                        <Link to='/'>Youtube</Link>
                    </li>
                    <li>
                        <Link to='/'>LinkedIn</Link>
                    </li>
                </ul>
            </div>
            <div className="footter-item">
                <h3>Earnings</h3>
                <ul>
                    <li>
                        <Link to='/'>Become an Affilate</Link>
                    </li>
                    <li>
                        <Link to='/'>Advertise your product</Link>
                    </li>
                    <li>
                        <Link to='/'>Advertise your product</Link>
                    </li>
                </ul>
            </div>
            <div className="footter-item">
                <h3>Account</h3>
                <ul>
                    <li>
                        <Link to='/'>Your account</Link>
                    </li>
                    <li>
                        <Link to='/'>Returns Center</Link>
                    </li>
                    <li>
                        <Link to='/'>100 % purchase protection</Link>
                    </li>
                    <li>
                        <Link to='/'>Chat with us</Link>
                    </li>
                    <li>
                        <Link to='/'>Help</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterTop
