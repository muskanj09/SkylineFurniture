import React from 'react'
import '../officeChair/officeChair.css'
import ProductNav from '../productNav/ProductNav'
import office1 from '../../../image/office1.jpg'
import office2 from '../../../image/office2.jpg'
import office3 from '../../../image/office3.jpg'
import office4 from '../../../image/office4.jpg'
import office5 from '../../../image/office5.jpg'
const OfficeChair = () => {
  return <>
  <ProductNav />
  <section className='section-office' >
      <div className='office-grid'>
      <div className="office-flex">
        <img src={office1} className='office-img' alt="" />
        <img src={office2} className='office-img' alt="" />
      </div>
      <div className="office-flex">
        <img src={office3} className='office-img' alt="" />
      </div>
      <div className="office-flex">
        <img src={office4} className='office-img' alt="" />
        <img src={office5} className='office-img' alt="" />
      </div>
      </div>
    </section>
  </>
}

export default OfficeChair