import React from 'react'
import NewCard from '../homeCard/newCard/NewCard'
import { homeCard } from '../../../../data'
import '../containerCard/containerCard.css'
const ContainerCard = () => {
  return <>
  <section className='containerCard'>
    {homeCard.map((card)=>{
            return <>
                <NewCard 
                    img={card.img}
                    heading={card.heading}
                    desc={card.desc}
                />
            </>
        })} 
  </section>
    
  </>
}

export default ContainerCard