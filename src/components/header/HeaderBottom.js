import React from 'react'
import { Link } from 'react-router-dom';

const HeaderBottom = () => {
    return (
        <div className='nav__bottom'>
        <div className="container">
          <nav className="nav__bottom__navigation">
            <ul className="nav__bottom__main__menu">
              <li><Link to="/">Bakery <span className="material-icons">expand_more</span></Link>
                <ul className="dropdown">
                  <li><Link to="/">dropdown item 1</Link></li>
                  <li><Link to="/">dropdown item 2</Link></li>
                  <li><Link to="/">dropdown item 3</Link></li>
                </ul>
              </li>
              <li><Link to="">Fruits and vegetables</Link></li>
              <li><Link to="">Meat and fish</Link></li>
              <li><Link to="">Drinks <span className="material-icons">expand_more</span></Link>
                <ul className="dropdown">
                  <li><Link to="/">dropdown item 1</Link></li>
                  <li><Link to="/">dropdown item 2</Link></li>
                  <li><Link to="/">dropdown item 3</Link></li>
                  <li><Link to="/">dropdown item 3</Link></li>
                </ul>
              </li>
              <li><Link to="">Kitchen</Link></li>
              <li><Link to="">Special nutrition</Link></li>
              <li><Link to="">Baby</Link></li>
              <li><Link to="">Pharmacy</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
}

export default HeaderBottom
