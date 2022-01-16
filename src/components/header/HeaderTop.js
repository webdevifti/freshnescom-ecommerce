import React from 'react'
import { Link } from 'react-router-dom';
const HeaderTop = () => {
    return (
        <div className='nav__top'>
        {/* Nav top left */}
        <ul className='nav__top__left'>
          <li>
            <Link to='/'>Chat with us</Link>
          </li>
          <li>
            <Link to='tel:+420 336 775 664'>+420 336 775 664</Link>
          </li>
          <li>
            <Link to='mailto:info@freshnesecom.com'>info@freshnesecom.com</Link>
          </li>
        </ul>

        {/* Nav top right  */}
        <ul className='nav__top__right'>
          <li>
            <Link to='/'>Blog</Link>
          </li>
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to='/'>Careers</Link>
          </li>
        </ul>
      </div>
    )
}

export default HeaderTop
