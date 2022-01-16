import React from 'react';
import Wishlist from '../../assets/images/single-order/wishlist.svg';
import Compare from '../../assets/images/single-order/compare.svg';
import Remove from '../../assets/images/single-order/remove.svg';

const SingleOrder = () => {
  return (
    <div className='single-order'>
      <div className='single-order__left'>
        <img
          src='https://images.unsplash.com/photo-1515589654462-a9881e276b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt=''
        />
        <div className='wishlist'>
          <img src={Wishlist} alt='' />
          <span>Wishlist</span>
        </div>
        <div className='compare'>
          <img src={Compare} alt='' />
          <span>Compare</span>
        </div>
        <div className='remove'>
          <img src={Remove} alt='' />
          <span>Remove</span>
        </div>
      </div>

      <div className='single-order__right'>
        <h4>Product Title</h4>
        <p>
          <span>Farm: </span> Tharmis Farm
        </p>
        <p>
          <span>Freshness: </span> 1 day old
        </p>

        <div className='review'>
          <span className='material-icons'>star</span>
          <span className='material-icons'>star</span>
          <span className='material-icons'>star</span>
          <span className='material-icons'>star</span>
          <span className='material-icons star-outline'>star_outline</span>
        </div>

        <div className='price-quantity'>
          <div className='price'>
            <h3>36.99 USD</h3>
            <del>48.56 USD</del>
          </div>
          <div className='quantity'>1pcs</div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
