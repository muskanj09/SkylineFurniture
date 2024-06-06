import React from 'react'
import '../tradeMain/tradeMain.css'
import tradeMain from '../../../image/tradeMain.jpg'
const TradeMain = () => {
  return <>
  <section className='section-trade'>
    <div className="trade-img">
        <img src={tradeMain} className='tradeMain' alt="" />
    </div>
    <div className="trade-text">
        <h2>Apply Now</h2>
        <div className="trade-flex">
            <h1>Skyline Furniture Trade Program</h1>
            <p>All qualified interior designers, decorators and other trade professionals are invited to join the Skyline Furniture Trade Program. Membership provides you with instant access to our latest catalog including the newest additions to the assortment, pricing, and fabrics. Please apply below.</p>
            <p>Have questions? Visit our FAQ page here.</p>
            <h6>All previous customers will need to reapply for an account to gain access.</h6>
        </div>
    </div>
  </section>
  </>
}

export default TradeMain