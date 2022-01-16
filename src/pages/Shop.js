import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import { categories as CategoryData, brandData } from '../assets/data'
import ProductListView from '../components/ProductListView'
import ProductGridView from '../components/ProductGridView'
const Shop = () => {
    const [View, setDisplayListView] = useState('list')

    const displayListView = () => {
        setDisplayListView('list')
        
    }
    const displayGridView = () => {
        setDisplayListView('grid')
    }
    const { category } = useParams();

    return (
        <>
            <div className="main__wrapper">
                <Header />
                    <div className='container'>
                        <ul className='bredcrumb'>
                            <li><Link to="/">Home</Link></li> <span>/</span>
                            <li className='bredcrumb_active'>{category}</li>
                        </ul>
                        <div className='shop__page__header'>
                            <h2 className='page__title'>{category}</h2>
                            <div className='view_items'>
                                <button onClick={() => displayListView()} className={View === 'list' ? 'active_view': ''}><span className="material-icons">list</span> List View</button>
                                <button onClick={() => displayGridView()}  className={View === 'grid' ? 'active_view': ''}> <span className="material-icons">grid_view</span> Grid View</button>
                                <button><span className='total_products_count'>122</span> products</button>
                               
                            </div>
                        </div>

                        <div className='shop_main_content'>
                            <div className='left_side_content'>
                                <div className='widgets'>
                                    <h3>Categories</h3>
                                    <ul className='categories_items'>

                                    {
                                        CategoryData.map((item,index) => (
                                            <li key={index}><Link to={`/shop/${item.slug}`}>{item.category}</Link> <span>{index}</span></li>
                                        ))
                                    }
                                    </ul>
                                </div>
                                <div className='widgets'>
                                    <h3>Brands</h3>
                                    <ul className='brand_items'>

                                        {
                                            brandData.map((item,index) => (
                                                <label key={index}>
                                                
                                                <input type="checkbox" />
                                                {item.brand}
                                                </label>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className='widgets'>
                                    <h3>Rating</h3>
                                    <ul className='rating_items'>
                                        <li>
                                            <label><input type="checkbox" value="5" />
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label><input type="checkbox" value="4" />
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star_outline</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label><input type="checkbox" value="3" />
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label><input type="checkbox" value="2" />
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label><input type="checkbox" value="1" />
                                                <span className='material-icons'>star</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                                <span className='material-icons'>star_outline</span>
                                            </label>
                                        </li>

                                    </ul>
                                </div>
                                <div className='widgets'>
                                    <h3>Price</h3>
                                    
                                </div>
                            </div>
                            <div className='right_side_content'>
                                { View === 'list' ?  <ProductListView /> : <ProductGridView /> }
                            </div>
                        </div>
                    </div>
                <Footer />

            </div>
        </>
    )
}

export default Shop
