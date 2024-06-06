import React from 'react'
import '../featuredHome/featuredHome.css'
import FeaturedSlider from '../featuredSlider/FeaturedSlider'
const FeaturedHome = () => {
    return <>
        <section className='section-featured'>
            <h3>Also Featured In</h3>
            <FeaturedSlider />
            <div className='featurebtn'>
                <h4>
                    <a href="#">View All Press</a>
                </h4>
            </div>
        </section>
    </>
}

export default FeaturedHome