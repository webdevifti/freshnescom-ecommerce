import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Freshnesecom.svg';


const HeaderMiddle = () => {
  const handleShowCart = () => {
    console.log('Clicked');
  }
    return (
        <div className='nav__middle'>
          <div className='logo'>
            <Link to='/'>
              {/* You Replace This Image to Uncomment below code */}
              <img src={Logo} alt='Logo' />
              
              {/* Freshnesecom */}
            </Link>
          </div>
          <div className='search__bar'>
            <form>
              <select>
                <option value='All Categories'>All Categories</option>
                <option value='All Categories'>All Categories</option>
                <option value='All Categories'>All Categories</option>
              </select>
              <span className="seperator">|</span>
              <input type='search' placeholder='Search Products, categories ...' required />
              <button className='search-btn' type="submit" >
                <span className='material-icons'>search</span>
              </button>
            </form>
          </div>
          <div className='user-menu'>
            <button className="btn-user-icon" >
              <span className='material-icons'>person_outline</span>
            </button>
            {/* You Add Wishlist Button if you want */}
            {/* <button>
              <span class='material-icons'>favorite_border</span>
            </button> */}


            <button onClick={() => handleShowCart()} className="btn-cart-icon">
              <span className='material-icons'>shopping_basket</span>
              <span className="cart-counter">4</span>
            </button>
            
            
          </div>
        </div>
    )
}

export default HeaderMiddle
