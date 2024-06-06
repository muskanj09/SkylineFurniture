import React from 'react'
import '../latest/latest.css'
import ProductNav from '../productNav/ProductNav'
import latest1 from '../../../image/latest1.jpg'
import latest2 from '../../../image/latest2.jpeg'
import latest3 from '../../../image/latest3.png'
import latest4 from '../../../image/latest4.jpg'
import latest5 from '../../../image/latest5.jpg'
import latest6 from '../../../image/latest6.png'
import latest7 from '../../../image/latest7.jpg'
import latest8 from '../../../image/latest8.jpg'
import latest9 from '../../../image/latest9.jpg'
const Latest = () => {
  return <>
  <ProductNav />
    <section className='section-latest' >
      <div className='latest-grid'>
      <div className="latest-flex">
        <img src={latest1} className='latest-img' alt="" />
        <img src={latest2} className='latest-img' alt="" />
        <img src={latest3} className='latest-img' alt="" />
      </div>
      <div className="latest-flex">
        <img src={latest4} className='latest-img' alt="" />
        <img src={latest5} className='latest-img' alt="" />
        <img src={latest6} className='latest-img' alt="" />
      </div>
      <div className="latest-flex">
        <img src={latest7} className='latest-img' alt="" />
        <img src={latest8} className='latest-img' alt="" />
        <img src={latest9} className='latest-img' alt="" />
      </div>
      </div>
      <div className="latest-btn">
        <a href="#">Load More</a>
      </div>
      
    </section>
    
  </>
}

export default Latest