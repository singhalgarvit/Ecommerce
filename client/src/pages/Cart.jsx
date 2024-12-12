import React, { useContext } from 'react'
import { MyContext } from '../context'
import Products from '../products.json'
import ProductBox from '../components/ProductBox';

function Cart() {
    const {cart,setCart} = useContext(MyContext);
    const filteredList=Products.filter((item)=>cart.includes(item.product_id));
    let cartSum =0;
    for(let i=0; i<filteredList.length;i++){
        cartSum += filteredList[i].price;
    }
  return (
    <div>
      <h1>Your Cart</h1>
      {filteredList.map((item, index) => (
        <div className='cartContainer'>
            <img src={item.product_img} alt="" />
            <h3>{item.product_name}</h3>
            <p>{item.description}</p>
            <p style={{border:"2px solid black", padding:"10px" , borderRadius:"5px"}}>{item.price} Rs.</p>
        </div>
      ))}
      <button>{cartSum}</button>
    </div>
  );
}

export default Cart