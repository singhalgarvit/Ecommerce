import React, { useContext } from 'react'
import './style.css'
import Button from '../components/Button'
import logo from '../assets/image.png'
import {MyContext} from '../context'
import { Navigate, useNavigate } from 'react-router-dom'

function Navbar() {
  const {category,setCategory,username,setUsername,jwtToken,setJwtToken,cart,setCart} = useContext(MyContext);
  const navigate = useNavigate();

  const logout = ()=>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm("Are You Sure To Logout") == true){
      localStorage.clear();
      setUsername(null);
      setJwtToken(null);
    }
  }

  return (
    <nav>
        <img src={logo} alt="" />
        <div className='buttonGroup'>
            <Button active={(category=="Default")} value="All" onclick={(e)=>setCategory("Default")}/>
            <Button active={(category=="Man")} value="Man" onclick={(e)=>setCategory("Man")}/>
            <Button active={(category=="Woman")} value="Woman" onclick={(e)=>setCategory("Woman")}/>
            <Button active={(category=="Kids")} value="Kids" onclick={(e)=>setCategory("Kids")}/>
            <Button value={`Cart (${cart.length})`}/>
            {!username && <Button value="Login" onclick={(e)=>navigate("/login")}/>}
            {username && 
            <>
            <Button value="Logout" onclick={logout}/>
            <span title={username}>{username[0]}</span>
            </>
            }
        </div>
    </nav>
  )
}

export default Navbar