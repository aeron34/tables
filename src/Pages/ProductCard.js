import React from 'react'
import check from './check.png'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <section style={{borderBottom: `3px solid ${props.color}`}}>

      <h2>{`${props.tier}`}</h2>
      <div className='grid'>

        {props.feats.map(x =>
        {return (
          <>
            <img style={{margin:'auto'}}src={check}/>
            <p>{x}</p>
          </>
        )}
      )}
      </div>
    </section>
  )
}

export default ProductCard;
