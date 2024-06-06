import React from 'react'
import story from '../../../image/story.jpg'
import '../story/story.css'
const Story = () => {
  return <>
    <section className='section-story'>
        <img src={story} className='story' alt="" />
        <div className='story-content'>
            <h1>Our Story</h1>
            <h3>How it Began</h3>
            <p>Furniture making has been a part of the Wecker family’s heritage for over 100 years. Our founder, Norman Wecker, learned the art of upholstery from his father-in-law, who owned a furniture shop at the turn of the century. After returning home from World War II, Norm began the next chapter of the family business. He opened a small factory in the South Suburbs of Chicago in 1946, and Skyline Furniture was born.</p>
            <p>In 1971, Norm’s son, Ted, joined the business and shifted Skyline's focus to the direct-mail segment of the furniture market. Together, the father and son team innovated a model where upholstered goods could be ordered through a catalog, custom-made on demand, and shipped directly to the customer’s front door.</p>
            <p>Norm’s granddaughter, Meganne, joined Skyline in 2001, further shaping the company’s future. Meganne had a clear vision: to infuse fashion into the already established manufacturing model and offer products through the emerging channel of e-commerce. The combination proved successful; Skyline saw rapid growth over the next decade as the world of online shopping surged. In 2016, Skyline continued its drive for innovation by becoming the first company to digitally print textiles in-house, a move that positioned the company’s supply chain as unrivaled in the industry</p>
            <p>Today, Skyline Furniture is still owned and operated by the Wecker family. It now boasts a female lead with Meganne at the helm and Ted at her side. Over its 75-year journey, Skyline has established a legacy of unwavering dedication to innovation, design, and craftsmanship which has solidified its place as a leader in the furniture world.</p>
        </div>
    </section>
  </>
}

export default Story