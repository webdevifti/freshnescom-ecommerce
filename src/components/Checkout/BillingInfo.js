import React from 'react';

const BillingInfo = () => {
  return (
    <div className='billing-info'>
      {/* Billing info title */}
      <div className='info__title'>
        <h3>Billing info</h3>
        <p>
          <span>Please enter your billing info</span>
          <span>Step 1 of 5</span>
        </p>
      </div>

      {/* Billing info input box */}
      <div className='input-field-container'>
        <div className='input-field'>
          <label htmlFor='firstName'>First name</label>
          <input type='text' id='firstName' placeholder='First name' />
        </div>

        <div className='input-field'>
          <label htmlFor='lastName'>Last name</label>
          <input type='text' id='lastName' placeholder='Last name' />
        </div>

        <div className='input-field'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email' placeholder='Email Address' />
        </div>

        <div className='input-field'>
          <label htmlFor='number'>Phone Number</label>
          <input type='number' id='number' placeholder='Phone Number' />
        </div>

        <div className='input-field'>
          <label htmlFor='address'>Address</label>
          <input type='text' id='address' placeholder='Address' />
        </div>

        <div className='input-field'>
          <label htmlFor='townCity'>Town/City</label>
          <input type='text' id='townCity' placeholder='Town/City' />
        </div>

        <div className='input-field'>
          <label htmlFor='stateCountry'>State/Country</label>
          <input
            type='text'
            id='stateCountry'
            placeholder='Choose a state or Country'
          />
        </div>

        <div className='input-field'>
          <label htmlFor='zipPortal'>Zip/Postal code</label>
          <input type='text' id='zipPortal' placeholder='Postal code or Zip' />
        </div>
      </div>

      {/* Different address type */}
      <div className='diff-address'>
        <input type='checkbox' id='diffAddress' />
        <label htmlFor='diffAddress'>Ship to a different address?</label>
      </div>
      <br></br>
    </div>
  );
};

export default BillingInfo;
