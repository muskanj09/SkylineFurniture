import React from 'react'
import '../pressCard/pressCard.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import pressCard1 from '../../../image/pressCard1.jpg'
import pressCard2 from '../../../image/pressCard2.jpg'
import pressCard3 from '../../../image/pressCard3.jpg'
import pressCard4 from '../../../image/pressCard4.jpg'
import pressCard5 from '../../../image/pressCard5.jpg'
const PressCard = () => {
  return <>
    <section className='press-section'>
        <div className="press-card">
            <a href="#" className="press-link bg-white">
                <h3>Furniture Today</h3>
                <p>What's Hot? Manufacturers eye new products as cure for slow sales</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <div>
            <img src={pressCard1} alt="" />
            <a href="#" className="press-link bg-white">
                <h3>Better Homes and gardens</h3>
                <p>Playing for Keeps, June 2023</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            </div>
            <a href="#" className="press-link bg-white">
                <h3>The Spruce</h3>
                <p>The 11 Best Upholstered Headboards of 2023</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <div>
            <img src={pressCard2} alt="" />
            <a href="#" className="press-link bg-white">
                <h3>Furniture Today</h3>
                <p>What 17 home furnishings companies say about Diversity, Equity and Conclusion</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            </div>
            <a href="#" className="press-link bg-white">
                <h3>New York Post</h3>
                <p>All dolled up: 3 home decor musts inspired by Barbie's Dream House</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            {/* <a href="#" className="press-link bg-gray">
                <h3>Kron 4</h3>
                <p>Best King Size headboard</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a> */}
        </div>
        <div className="press-card">
        <a href="#" className="press-link bg-gray">
                <h3>Furniture Today</h3>
                <p>The case for custom: Skyline is creating its own solutions</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
        <a href="#" className="press-link bg-gray">
                <h3>New York Times</h3>
                <p>For small business Owners, Hard Decisions Become Personal</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
        <a href="#" className="press-link bg-gray">
                <h3>Shop Every Single Room in 2022 Real Simple Home</h3>
                <p>For small business Owners, Hard Decisions Become Personal</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
        <a href="#" className="press-link bg-gray">
                <h3>Digital Commerce 360</h3>
                <p>Augmented reality shortens home goods manufacturer's lifecycle</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <div>
            <img src={pressCard3} alt="" />
            <a href="#" className="press-link bg-white">
                <h3>House Beautiful</h3>
                <p>Wild Palms, May 2023</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            </div>
            <div>
            <img src={pressCard4} alt="" />
            <a href="#" className="press-link bg-white">
                <h3>House Beautiful</h3>
                <p>Wild Palms, May 2023</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            </div>
        </div>
        <div className="press-card">
        <a href="#" className="press-link bg-white">
                <h3>Better Homes and Gardens</h3>
                <p>target made-to-order furniture: a retail giant gets personal</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <a href="#" className="press-link bg-gray">
                <h3>Furniture Today</h3>
                <p>Skyline focused on affordable, eco-friendly products for mass retail</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <div>
            <img src={pressCard5} alt="" />
            <a href="#" className="press-link bg-white">
                <h3>House Beautiful</h3>
                <p>Screen Time, Winter 2023</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            </div>
            <a href="#" className="press-link bg-gray">
                <h3>Retail Touch Points</h3>
                <p>How Cloth & Company Saved Time and Money With its 3D Virtual Showroom Collaboration</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <a href="#" className="press-link bg-gray">
                <h3>Home Accents Today</h3>
                <p>Portrait: Meganne Wecker</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
            <a href="#" className="press-link bg-gray">
                <h3>Readers Digest</h3>
                <p>96 Amazing Things Made in the U.S.A.</p>
                <h3>Read More <FaArrowAltCircleRight /></h3>
            </a>
        </div>
    </section>
  </>
}

export default PressCard