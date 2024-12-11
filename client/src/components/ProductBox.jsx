import React from 'react'
import './style.css'

function ProductBox({key,name,img,price}) {
  return (
    <div className='productBox' key={key}>
        <img src={img} alt="Img" />
        <h3>{name}</h3>
        <p>{price} Rs.</p>
    </div>
  )
}

export default ProductBox