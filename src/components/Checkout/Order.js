import React from 'react';
import SingleOrder from './SingleOrder';

const Order = () => {
  return (
    <div className='order-summery'>
      <div className='order-summery__title'>
        <h3>Order Summary</h3>
        <p>
          Price can change depending on shipping method and taxes of you state.
        </p>
      </div>
      <SingleOrder />
      <SingleOrder />

      <h4>
        <span>Subtotal</span> <span>73.9 USD</span>
      </h4>
      <h4>
        <span>Tax</span> <span>17% 16.53 USD</span>
      </h4>
      <h4>
        <span>Shipping</span> <span>0 USD</span>
      </h4>

      <div className='promo-input'>
        <input type='text' />
        <button>Apply now</button>
      </div>

      <div className='order-summery__footer'>
        <div className='order-summery__footer__left'>
          <h3>Total Order</h3>
          <p>Guaranteed delivery day: June 12, 2020</p>
        </div>
        <div className='order-summery__footer__right'>
          <h2>89.84 USD</h2>
        </div>
      </div>
    </div>
  );
};

export default Order;
