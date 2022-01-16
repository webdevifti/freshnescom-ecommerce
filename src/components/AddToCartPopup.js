import React from 'react'
import { CartData } from '../assets/data'
const AddToCartPopup = () => {
    return (
        <div className='cart-popup'>
            {
                CartData.map((item,index) => (
                    <div className='content' key={index}>
                        <div className='cart-left-content'>
                            <img src={item.productImg} alt="" />
                        </div>
                        <div className='cart-right-content'>
                            <h4>{item.productTitle}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AddToCartPopup
