import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop'
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Blog from "../pages/Blog";
import PageNotFound from '../pages/PageNotFound'
import SingleBlog from '../pages/SingleBlog';

const AppRoute = () => {
  return (
    <>
    
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop/:category' element={<Shop />} />
        <Route path='/shop/:category/:product_name' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/blog/:blog_slug' element={<SingleBlog />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AppRoute;
