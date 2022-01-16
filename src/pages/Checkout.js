import React from 'react';
import AdditionalInfo from '../components/Checkout/AdditionalInfo';
import BillingInfo from '../components/Checkout/BillingInfo';
import BillingMethod from '../components/Checkout/BillingMethod';
import Confirmation from '../components/Checkout/Confirmation';
import Order from '../components/Checkout/Order';
import PaymentMethod from '../components/Checkout/PaymentMethod';
import Header from '../shared/Header';

const Checkout = () => {
  return (
    <div className='main__wrapper'>
      <Header />
      <div className='checkout'>
        <div className='checkout__left'>
          <BillingInfo />
          <BillingMethod />
          <PaymentMethod />
          <AdditionalInfo />
          <Confirmation />
        </div>
        <div className='checkout__right'>
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
