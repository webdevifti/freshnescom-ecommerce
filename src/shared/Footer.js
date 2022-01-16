import React from 'react'
import FooterBottom from '../components/footer/FooterBottom'
import FooterTop from '../components/footer/FooterTop'

const Footer = () => {
    return (
        <>
        {/* footer area */}
            <footer>
                <div className="container">
                    {/* footer-top */}
                    <FooterTop />
                     {/* footer-middle */}
                    <FooterBottom />
                    {/* footer-bottom */}
                    <div className="footer-bottom">
                        <p>Copyright © 2020 petrbilek.com</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
                           