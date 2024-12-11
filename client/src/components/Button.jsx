import React from 'react'
import './style.css'

function Button({value, onclick, active}) {
  return (
    <button onClick={onclick} style={active?{backgroundColor:"black",color:"white"}:{}}>
        {value}
    </button>
  )
}

export default Button