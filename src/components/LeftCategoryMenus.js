import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../assets/data'

const LeftCategoryMenus = () => {
    return (
        <div className="left__menus">
            <h3>Category Menu</h3>
            <ul>
                {
                    categories.map((item,index) => <li key={index}><Link to={`/shop/${item.slug}`}>{item.category}</Link></li>)
                }
                
               
            </ul>
            <Link to="/category" className="btn-more">More Category <span className="material-icons">chevron_right</span></Link>
            
        </div>
    )
}

export default LeftCategoryMenus
