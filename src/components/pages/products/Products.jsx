import React from 'react'
import '../products/Products.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import ProductNav from './productNav/ProductNav'


const Products = () => {
  return <>
  <section className='section-product'>
    <ProductNav />
  </section>
    
  </>
}

export default Products