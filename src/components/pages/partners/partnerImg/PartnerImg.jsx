import React from 'react'
import '../partnerImg/partnerImg.css'
const PartnerImg = ({ image }) => {
    return <>
        <img src={image} className='part-img' alt="" />
    </>
}
export default PartnerImg