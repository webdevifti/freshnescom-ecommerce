import React,{ useState } from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import { Link, useParams } from 'react-router-dom'
import img1 from '../assets/images/single-products.png'
import SingleProductsDescriptionTabContent from '../components/SingleProductsDescriptionTabContent'
import SingleProductsQuestionsTabContent from '../components/SingleProductsQuestionsTabContent'
import SingleProductsReviewTabContent from '../components/SingleProductsReviewTabContent'


const ProductDetails = () => {
    const [tab, setTab] = useState('description')
    const {category, product_name } = useParams()

    const hanldeDescriptionTab = () => {
        setTab('description')
    }
    const handleReviewTab = () => {
        setTab('review')
    }
    const handleQuestionTab = () => {
        setTab('question')
    }

    return (
        <div className="main__wrapper">
        <Header />
            <div className='container'>
                <ul className='bredcrumb'>
                    <li><Link to="/">Home</Link></li> <span>/</span>
                    <li><Link to={`/shop/${category}`}>{category}</Link></li> <span>/</span>
                    <li className='bredcrumb_active'>{product_name}</li>
                </ul>
                <div className='product__details'>
                    <div className='product__image__section'>
                        <div className='img-1'>
                            <img src={img1} alt="" />
                            <div className='op'>
                                <span>-12%</span>
                                <span>Free Shipping</span>
                            </div>
                        </div>
                        <img src={img1} alt="" />
                        <img src={img1} alt="" />

                    </div>
                    <div className='product_information_section'>
                        <h3 className='product_name'>{product_name}</h3>
                        <div className='top-review'>
                            <span className='material-icons'>star</span>
                            <span className='material-icons'>star</span>
                            <span className='material-icons'>star</span>
                            <span className='material-icons'>star</span>
                            <span className='material-icons'>star_outline</span>

                            <Link to="/" className='review-count'>( 1 customer review )</Link>

                        </div>

                        <div className='single-product-description'>
                            <p>Carrots from tomissy farm are one of the best on the market. Tomisso and his family are giving a full love to his bio products. Tomisso's carrots are growing on the fields naturally.</p>
                        </div>
                        <div className='products-metadata'>
                            <div className='data'>
                                <div>
                                    <p>SKU:</p>
                                    <span>76645</span>
                                </div>
                                <div>
                                    <p>Category: </p>
                                    <span>Vegetables</span>
                                </div>
                                <div>
                                    <p>Stock: </p>
                                    <span>In Stock</span>
                                </div>
                                <div>
                                    <p>Farm: </p>
                                    <span>Grocery Tarms Fields</span>
                                </div>
                            </div>
                            <div className='data'>
                                <div>
                                    <p>Freshness: </p>
                                    <span>1 days old</span>
                                </div>
                                <div>
                                    <p>Buy by: </p>
                                    <span>pcs, kgs, box, pack</span>
                                </div>
                                <div>
                                    <p>Delivery: </p>
                                    <span>In 2 days</span>
                                </div>
                                <div>
                                    <p>Delivery area:</p>
                                    <span>Czech republic</span>
                                </div>

                            </div>
                        </div>

                        <div className='add-to-cart-area'>
                            <div className='price-area'>
                                <h3>36.32 USD</h3>
                                <del>48.56 USD</del>
                            </div>
                            <div className='qtyandcartbtn'>
                                <select>
                                    <option>Pcs</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                                <button className='btn-buy-now'><span className='material-icons'>add</span> Add to cart</button>
                            </div>
                        </div>
                        <div className='other-action'>
                            <button className='favbtn'><span className='material-icons favicon'>favorite_border</span> Add to my wish list</button>
                            <button className='comparebtn'><span className='material-icons compareicon'>compare</span> Compare</button>
                        </div>
                        <div className='product-tab'>
                            <div className='tab-header'>
                                <button onClick={() => hanldeDescriptionTab()} className={tab === 'description' ? 'tab-active': ''}>Description</button>
                                <button onClick={() => handleReviewTab()} className={tab === 'review' ? 'tab-active': ''}>Reviews <span className='total-products-reviews'>12</span></button>
                                <button onClick={() => handleQuestionTab()} className={tab === 'question' ? 'tab-active': ''}>Questions <span className='total-product-question'>8</span></button>
                            </div>
                            {
                                tab === 'description' ?  <SingleProductsDescriptionTabContent /> : ""
                            }
                            {
                                tab === 'review' ? <SingleProductsReviewTabContent />  : ''
                            }
                            {
                                tab === 'question' ?  <SingleProductsQuestionsTabContent />: ''
                            }
                           
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        <Footer />

    </div>
    )
}

export default ProductDetails
