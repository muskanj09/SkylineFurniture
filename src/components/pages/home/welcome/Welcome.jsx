import React from 'react'
import '../welcome/welcome.css'
import img1 from '../../../image/welcome.jpg'
const Welcome = () => {
  return <>
    <section className='section-welcome'>
        <div className="welcome-grid">
            <img src={img1} alt="" />
            <div className='welcome-text'>
                <h1>Welcome</h1>
                <h3>From our Founders</h3>
                <p>When Norman Wecker started Skyline Furniture in 1946, he laid the foundation of a legacy brand. He understood that a great business is built by great people, and that mantra holds true to this day. We have honed our craft over the years, passing down skills and knowledge through generations of families that have worked within our factory walls</p>
                <p>While Skyline is our family’s business, we know that a great company is always the sum of its parts. With the help of our incredible team of craftspeople, innovators, and artists, Skyline has perfected the art and science of producing quality upholstered goods. We effortlessly blend traditional manufacturing techniques with cutting-edge technology to deliver custom made-to-order products to millions of homes around the country.</p>
                <p>Skyline has been a labor of love for over 75 years. We’re proud of our reputation for being innovators in the industry, yet at our core we’re still the Chicago-based furniture company that Norman envisioned all those years ago.</p>
                <p>From our hands to yours.</p>
                <div>
                    <h4><a href="#">Our Story</a></h4>
                </div>
                
            </div>
        </div>
    </section>
  </>
}

export default Welcome