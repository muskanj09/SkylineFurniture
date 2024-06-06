import React from 'react'
import '../dinning/dinning.css'
import ProductNav from '../productNav/ProductNav'
import dining1 from '../../../image/dining1.jpeg'
import dining2 from '../../../image/dining2.jpg'
import dining3 from '../../../image/dining3.jpg'
import dining4 from '../../../image/dining4.jpg'
import dining5 from '../../../image/dining5.jpg'
import dining6 from '../../../image/dining6.jpg'
import dining7 from '../../../image/dining7.jpg'
import dining8 from '../../../image/dining8.jpg'
import dining9 from '../../../image/dining9.jpg'

const Dinning = () => {
  return <>
  <ProductNav />
  <section className='section-dining' >
      <div className='dining-grid'>
      <div className="dining-flex">
        <img src={dining1} className='dining-img' alt="" />
        <img src={dining2} className='dining-img' alt="" />
        <img src={dining3} className='dining-img' alt="" />
      </div>
      <div className="dining-flex">
        <img src={dining4} className='dining-img' alt="" />
        <img src={dining5} className='dining-img' alt="" />
        <img src={dining6} className='dining-img' alt="" />
      </div>
      <div className="dining-flex">
        <img src={dining7} className='dining-img' alt="" />
        <img src={dining8} className='dining-img' alt="" />
        <img src={dining9} className='dining-img' alt="" />
      </div>
      </div>
      <div className="dining-btn">
        <a href="#">Load More</a>
      </div>
    </section>
  </>
}

export default Dinning