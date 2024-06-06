import React from 'react'
import '../partners/partners.css'
import { partner } from '../../../data'
import  PartnerImg from './partnerImg/PartnerImg'
const Partners = () => {
  return <>
  <section className='section-partners'>
    {
      partner.map((prop)=>{
        return <>
        <a href="#" className='partner-link'>
          <PartnerImg 
          image={prop.image}
        />
        </a>
        
        </>
      })
    }
  </section>
  </>
}

export default Partners