import React from 'react';
import VISA from '../../assets/images/Visa.svg';
import PayPal from '../../assets/images/PayPal.svg';
import Bitcoin from '../../assets/images/Bitcoin.svg';

const PaymentMethod = () => {
  return (
    <div className='payment-method '>
      {/* Payment method info  */}
      <div className='info__title'>
        <h3>Payment Method</h3>
        <p>
          <span>Please enter your payment method</span>
          <span>Step 3 of 5</span>
        </p>
      </div>

      <div className='credit-card-method'>
        <div className='credit-card-method__title'>
          <label>
            <input type='radio' checked /> Credit Card
          </label>
          <img src={VISA} alt='' />
        </div>

        <div className='card-number-input'>
          <label htmlFor='cardNumber'>
            Card number
            <input type='text' id='cardNumber' placeholder='Card Number' />
          </label>
        </div>

        <div className='card-hdc'>
          <label htmlFor='cardHolder'>
            Card Holder
            <input type='text' placeholder='Card-holder' id='cardHolder' />
          </label>
          <label htmlFor='expireDate'>
            Expiration date
            <input type='text' placeholder='DD/MM/YY' id='expireDate' />
          </label>
          <label htmlFor='cvc'>
            CVC
            <input type='text' placeholder='CVC' id='cvc' />
          </label>
        </div>
      </div>

      {/* Paypal card method */}
      <div className='payment-method-card '>
        <label>
          <input type='radio' />
          Paypal
        </label>
        <img src={PayPal} alt='' />
      </div>

      {/* bitcoin card method */}
      <div className='payment-method-card '>
        <label>
          <input type='radio' /> Bitcoin
        </label>
        <img src={Bitcoin} alt='' />
      </div>
    </div>
  );
};

export default PaymentMethod;
