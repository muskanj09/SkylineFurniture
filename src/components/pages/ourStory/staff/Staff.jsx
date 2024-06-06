import React from 'react'
import '../staff/staff.css'
import staff1 from '../../../image/staff1.jpg'
import staff2 from '../../../image/staff2.jpg'
const Staff = () => {
    return <>
        <section className='section-staff'>
            <div>
                <div className="staff-text">
                    <h3>Our Process</h3>
                    <p>For over 75 years, we’ve worked with talented craftspeople and artists to hone a unique process that’s a blend of both time-honored tradition and disruptive innovation.</p>
                    <p>Each piece is made-to-order and manufactured here in Illinois. We utilize state-of-the-art technology throughout our design and manufacturing process, most of it done in-house and by our people.</p>
                </div>
                <img src={staff1} className='staff1' alt="" />
            </div>
            <div>
                <img src={staff2} className='staff2' alt="" />
                <div className="staff-content">
                    <h3>Our People</h3>
                    <p>Great people work at Skyline. We are proud to work alongside such dedicated and skilled artists, tradespeople, and craftspeople, some for generations within the same family. From design through fulfillment, our work is made possible by the efforts of our diverse, hardworking team here in Chicago.</p>
                </div>
            </div>
        </section>
    </>
}

export default Staff