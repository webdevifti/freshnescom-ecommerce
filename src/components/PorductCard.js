import React from 'react'
import { productsData } from '../assets/data'

const PorductCard = (props) => {
    
    return (
        <>
            {productsData.slice(0, props.limit).map((item, index) => (
                  <div className="single-product" key={index}>
                    <div className="product-header">
                      <img src={item.img} alt={item.name} />
                      <span>{item.discount}</span>
                    </div>

                    <h3>{item.name}</h3>
                    <p>{item.shortDesc}</p>
                    <div className="single-product-footer">
                      <div className="product-price">
                        <h2>{item.price}</h2>
                        <del>{item.previousPrice}</del>
                      </div>
                      <button className="btn-buy-now">Buy Now</button>
                    </div>
                    
                  </div>
                ))}
        </>
    )
}

export default PorductCard
