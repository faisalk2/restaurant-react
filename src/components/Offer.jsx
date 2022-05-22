import React from 'react'

const Offer = (props) => {
    
  return (
    <section className="offers">
    <div className="container">
       {
           props.offer.map((offers,index)=>{
               return <img key={index} className="offer" src={offers}/>
           })
       }
        
    </div>
</section>
  )
}

export default Offer