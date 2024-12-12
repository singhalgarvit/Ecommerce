import React, { useContext } from 'react'
import './style.css'
import { MyContext } from '../context'
import Button from './Button';

function ProductBox({key,name,img,price,p_id}) {
  const {cart,setCart} = useContext(MyContext);
  return (
    <div className='productBox' key={key}>
        <img src={img} alt="Img" />
        <h3>{name}</h3>
        <p>{price} Rs.</p>
        <Button value="Cart" onclick={(e)=>setCart((prev)=>[...prev,p_id])}></Button>
    </div>
  )
}

export default ProductBox