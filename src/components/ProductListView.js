import React from 'react'
import ProductListItem from './ProductListItem'

const ProductListView = () => {
    return (
        <div className='products_list_view'>
           <ProductListItem />
           <ProductListItem />
           <ProductListItem />
        </div>
    )
}

export default ProductListView
