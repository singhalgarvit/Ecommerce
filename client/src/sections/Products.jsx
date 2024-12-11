import React, { useContext } from 'react'
import './style.css'
import ProductBox from '../components/ProductBox'
import Productlist from '../products.json'
import { MyContext } from '../context'


function Products() {
  const {category,setCategory} = useContext(MyContext);

  const filteredList = (category == "Default")?Productlist:Productlist.filter((value)=>value.category == category); ;
  return (
    <div className='productContainer'>
        {filteredList.map((value,index)=>(
          <ProductBox key={index} name={value.product_name} img={value.product_img} price={value.price}/>
        ))}
    </div>
  )
}

export default Products