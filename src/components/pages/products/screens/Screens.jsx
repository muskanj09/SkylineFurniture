import React from 'react'
import '../screens/screen.css'
import ProductNav from '../productNav/ProductNav'
import screen1 from '../../../image/screen1.jpg'
import screen2 from '../../../image/screen2.jpeg'
import screen3 from '../../../image/screen3.jpg'

const Screens = () => {
  return <>
    <ProductNav />
    <section className='section-screen' >
      <div className='screen-grid'>
        <img src={screen1} className='screen-img' alt="" />
        <img src={screen2} className='screen-img' alt="" />
        <img src={screen3} className='screen-img' alt="" />
      </div>
    </section>
  </>
}

export default Screens