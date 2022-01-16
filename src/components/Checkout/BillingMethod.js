import React from 'react';
import fedEx from '../../assets/images/FedEx_Express.svg';
import DHL from '../../assets/images/DHL.svg';

const BillingMethod = () => {
  return (
    <div className='billing-method'>
      <div className='info__title'>
        <h3>Billing method</h3>
        <p>
          <span>Please enter your payment method</span>
          <span>Step 2 of 5</span>
        </p>
      </div>

      <div className='billing-method__item'>
        <div className='billing-method__item__left'>
          <input type='checkbox' id='fedEx' />
          <label htmlFor='fedEx'>FedEx</label>
        </div>
        <div className='billing-method__item__middle'>
          <p>
            <span>+32 USD</span> Additional Price
          </p>
        </div>
        <div className='billing-method__item__right'>
          <img src={fedEx} alt='' />
        </div>
      </div>

      <div className='billing-method__item'>
        <div className='billing-method__item__left'>
          <input type='checkbox' id='fedEx' />
          <label htmlFor='fedEx'>DHL</label>
        </div>

        <div className='billing-method__item__middle'>
          <p>
            <span>+15 USD</span> Additional Price
          </p>
        </div>

        <div className='billing-method__item__right'>
          <img src={DHL} alt='' />
        </div>
      </div>
    </div>
  );
};

export default BillingMethod;
