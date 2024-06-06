import React from 'react'
import '../bedroom/bedroom.css'
import ProductNav from '../productNav/ProductNav'
import bedroom1 from '../../../image/bedroom1.jpg'
import bedroom2 from '../../../image/bedroom2.jpg'
import bedroom3 from '../../../image/bedroom3.jpg'
import bedroom4 from '../../../image/bedroom4.png'
import bedroom5 from '../../../image/bedroom5.jpg'
import bedroom6 from '../../../image/bedroom6.jpg'
import bedroom7 from '../../../image/bedroom7.png'
import bedroom8 from '../../../image/bedroom8.png'
import bedroom9 from '../../../image/bedroom9.jpg'

const Bedroom = () => {
  return <>
  <ProductNav />
  <section className='section-bedroom' >
      <div className='bedroom-grid'>
      <div className="bedroom-flex">
        <img src={bedroom1} className='bedroom-img' alt="" />
        <img src={bedroom2} className='bedroom-img' alt="" />
        <img src={bedroom3} className='bedroom-img' alt="" />
      </div>
      <div className="bedroom-flex">
        <img src={bedroom4} className='bedroom-img' alt="" />
        <img src={bedroom5} className='bedroom-img' alt="" />
        <img src={bedroom6} className='bedroom-img' alt="" />
      </div>
      <div className="bedroom-flex">
        <img src={bedroom7} className='bedroom-img' alt="" />
        <img src={bedroom8} className='bedroom-img' alt="" />
        <img src={bedroom9} className='bedroom-img' alt="" />
      </div>
      </div>
      <div className="bedroom-btn">
        <a href="#">Load More</a>
      </div>
    </section>
  </>
}

export default Bedroom