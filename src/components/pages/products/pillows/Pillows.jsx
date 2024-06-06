import React from 'react'
import '../pillows/pillows.css'
import ProductNav from '../productNav/ProductNav'
import pillow1 from '../../../image/pillow1.jpeg'
import pillow2 from '../../../image/pillow2.jpg'
import pillow3 from '../../../image/pillow3.jpg'

const Pillows = () => {
  return <>
  <ProductNav />
  <section className='section-pillow' >
      <div className='pillow-grid'>
        <img src={pillow1} className='pillow-img' alt="" />
        <img src={pillow2} className='pillow-img' alt="" />
        <img src={pillow3} className='pillow-img' alt="" />
      </div>
    </section>
  </>
}

export default Pillows