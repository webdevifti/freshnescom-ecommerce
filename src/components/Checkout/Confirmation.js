import React from 'react';
import { Link } from 'react-router-dom';
import securitySafety from '../../assets/images/security-safety.svg';

const Confirmation = () => {
  return (
    <div className='confirmation'>
      {/* confirmation title */}
      <div className='info__title'>
        <h3>Confirmation</h3>
        <p>
          <span>
            We are getting to the end. Just few clikis and your order si ready!
          </span>
          <span>Step 5 of 5</span>
        </p>
      </div>

      <div className='condition-box'>
        <input type='checkbox' />
        <label>
          I agree with sending an Marketing and newsletter emails. No spam,
          promissed.
        </label>
      </div>
      <div className='condition-box'>
        <input type='checkbox' />
        <label>
          I agree with our
          <Link to='#'> terms and conditions</Link> and
          <Link to='#'> privacy policy</Link>
        </label>
      </div>

      <button className='complate-order-btn'>Complate order</button>

      <div className='security-safety'>
        <img src={securitySafety} alt='' />
        <h5>All your data are safe</h5>
        <p>
          We are using the most advanced securty to provide you the best
          experience ever.
        </p>
      </div>

      <div className='copyright'>Copyright &#169; 2021 Freshnesecom</div>
    </div>
  );
};

export default Confirmation;
