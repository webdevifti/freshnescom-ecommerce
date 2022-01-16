import React from 'react'
import { Link } from 'react-router-dom'
import {productsData} from '../assets/data'
const ProductListItem = () => {
    return (
        <>
        {
            productsData.map((item, index) => (
                <div className='product'>
                    <div className='product_image'>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='product_info'>
                        <h3>{item.name}</h3>
                        <p>{item.shortDesc}</p>
                        <span className='material-icons'>star</span>
                        <span className='material-icons'>star</span>
                        <span className='material-icons'>star</span>
                        <span className='material-icons'>star</span>
                        <span className='material-icons star-outline'>star_outline</span>

                        <div className='short_summary'>
                            <div className='summary'>
                                <p>Freshness <span><span className='highlighted'>New</span> ( Extra Fresh )</span></p>
                                <p>Farm <span>Grocery Tarm Fields</span></p>
                                <p>Delivery <span>Europe</span></p>
                                <p>Stock <span><span className='highlighted'>320</span> pcs</span></p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className='product_action'>
                        <h3>{item.price} USD</h3>
                        <del>{item.previousPrice}</del>
                        <p>Free Shipping</p>
                        <p className='delivery_info'>Delivery in 1 day</p>
                        <Link className='btn-buy-now' to={`/shop/${item.category_slug}/${item.slug}`}>Product Details <span className='material-icons'>chevron_right</span> </Link>
                        <button className='btn-add-to-wishlist' to="/"><span className='material-icons'>favorite_border</span> Add to wish list  </button>
                    </div>
                </div>
            ))
        }

    
        </>
        
    )
}

export default ProductListItem
