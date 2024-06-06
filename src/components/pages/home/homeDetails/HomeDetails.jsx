import React from 'react'
import '../homeDetails/homeDetails.css'
import { HiArrowCircleRight } from "react-icons/hi";
const HomeDetails = () => {
  return <>
    <section className='section-details'>
        <div className="details">
            <h3>Forbes</h3>
            <h2>Meganne Wecker On The Evolution Of Skyline Furniture And Cloth & Company</h2>
            <p>In the grand scheme of the furniture industry, there are very few brands that manufacture in the United States, particularly outside of North Carolina. There are even fewer that are run by female executives. But that’s what makes Meganne Wecker a true unicorn. She is the president and chief creative officer of Skyline Furniture Manufacturing, which is a brand founded by her grandfather.</p>
            <HiArrowCircleRight className='detail-icon' />
        </div>
        <div className="details">
            <h3>Furnitue Today</h3>
            <h2>What 17 home furnishings companies say about Diversity, Equity and Inclusion</h2>
            <p>"For more than 75 years, our company has been proud to represent a diverse mix of race, ethnicity, age, religion, gender, sexual orientation and socioeconomic status."</p>
            <HiArrowCircleRight className='detail-icon' />
        </div>
        <div className="details">
            <h3>New York Times</h3>
            <h2>Getting Comfortable with Furniture Customization</h2>
            <p>A growing number of e-commerce companies are offering personal choices at affordable prices. It’s a similar story at Skyline Furniture, a manufacturing company outside Chicago that was founded in 1946 and offers quick, custom-made furniture produced through recently acquired equipment.</p>
            <HiArrowCircleRight className='detail-icon' />
        </div>
    </section>
  </>
}

export default HomeDetails