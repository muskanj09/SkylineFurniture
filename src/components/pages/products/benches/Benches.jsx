import React from 'react'
import '../benches/benches.css'
import ProductNav from '../productNav/ProductNav'
import bench1 from '../../../image/bench1.jpg'
import bench2 from '../../../image/bench2.jpg'
import bench3 from '../../../image/bench3.jpg'
import bench4 from '../../../image/bench4.jpg'
import bench5 from '../../../image/bench5.jpg'
import bench6 from '../../../image/bench6.jpg'
import bench7 from '../../../image/bench7.jpg'
import bench8 from '../../../image/bench8.jpg'
import bench9 from '../../../image/bench9.jpeg'

const Benches = () => {
  return <>
  <ProductNav />
  <section className='section-bench' >
      <div className='bench-grid'>
      <div className="bench-flex">
        <img src={bench1} className='bench-img' alt="" />
        <img src={bench2} className='bench-img' alt="" />
        <img src={bench3} className='bench-img' alt="" />
      </div>
      <div className="bench-flex">
        <img src={bench4} className='bench-img' alt="" />
        <img src={bench5} className='bench-img' alt="" />
        <img src={bench6} className='bench-img' alt="" />
      </div>
      <div className="bench-flex">
        <img src={bench7} className='bench-img' alt="" />
        <img src={bench8} className='bench-img' alt="" />
        <img src={bench9} className='bench-img' alt="" />
      </div>
      </div>
      <div className="bench-btn">
        <a href="#">Load More</a>
      </div>
    </section>
  </>
}

export default Benches