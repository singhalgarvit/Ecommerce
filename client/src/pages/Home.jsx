import React, { useState } from 'react'
import Navbar from '../sections/Navbar'
import Products from '../sections/Products'
import { MyContext } from '../context'

function Home() {

  return (
    <>
    <Navbar/>    
    <Products/>
    </>
  )
}

export default Home