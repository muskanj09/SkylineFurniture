import React from 'react'
import '../newCard/newCard.css'
const NewCard = ({img, heading, desc}) => {
  return <>
    <div className="card">
        <img src={img} alt="" />
        <h3>{heading}</h3>
        <p>{desc}</p>
    </div>
  </>
}

export default NewCard