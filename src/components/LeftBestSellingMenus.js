import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../assets/data'

const LeftBestSellingMenus = () => {
    return (
        <div className="left__menus">
            <h3>Best Selling Products</h3>
            <ul>
                {
                    categories.map((item,index) => <li key={index}><Link to={`/shop/${item.slug}`}>{item.category}</Link></li>)
                }
                
               
            </ul>
            <Link to="/products" className="btn-more">More Products <span className="material-icons">chevron_right</span></Link>
            
        </div>
    )
}

export default LeftBestSellingMenus
