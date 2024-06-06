import React from 'react'
import '../accentSeating/accent.css'
import ProductNav from '../productNav/ProductNav'
import accent1 from '../../../image/accent1.jpg'
import accent2 from '../../../image/accent2.jpg'
import accent3 from '../../../image/accent3.jpg'
import accent4 from '../../../image/accent4.jpg'
import accent5 from '../../../image/accent5.jpg'
import accent6 from '../../../image/accent6.jpeg'
import accent7 from '../../../image/accent7.jpg'
import accent8 from '../../../image/accent8.jpg'
import accent9 from '../../../image/accent9.jpg'

const Accent = () => {
  return<>
  <ProductNav />
  <section className='section-accent' >
      <div className='accent-grid'>
      <div className="accent-flex">
        <img src={accent1} className='accent-img' alt="" />
        <img src={accent2} className='accent-img' alt="" />
        <img src={accent3} className='accent-img' alt="" />
      </div>
      <div className="accent-flex">
        <img src={accent4} className='accent-img' alt="" />
        <img src={accent5} className='accent-img' alt="" />
        <img src={accent6} className='accent-img' alt="" />
      </div>
      <div className="accent-flex">
        <img src={accent7} className='accent-img' alt="" />
        <img src={accent8} className='accent-img' alt="" />
        <img src={accent9} className='accent-img' alt="" />
      </div>
      </div>
      <div className="accent-btn">
        <a href="#">Load More</a>
      </div>
    </section>
  </>
}

export default Accent