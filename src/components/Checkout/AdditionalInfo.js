import React from 'react';

const AdditionalInfo = () => {
  return (
    <div className='additional-info'>
      {/* addtional Information title */}
      <div className='info__title'>
        <h3>Additional Information</h3>
        <p>
          <span>Need something else? We will make it for you!</span>
          <span>Step 4 of 5</span>
        </p>
      </div>

      {/* additional information description */}
      <div className='additional-info-des'>
        <label>
          Order notes
          <textarea placeholder="Need a specific delivery day? Sending a gift! Let's say..."></textarea>
        </label>
      </div>
    </div>
  );
};

export default AdditionalInfo;
