import React, { useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Input from "../components/Input";
import SubmitBtn from "../components/SubmitBtn";
import adminLogin from "../../API/adminLogin";
import {  useNavigate } from "react-router-dom";
import {AdminContext} from "../../context/AdminContext";



function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();

  async function submitForm(e){
    e.preventDefault();
    try{
      const data=await adminLogin(email,password)
      Cookies.set("token",data.token)
      Cookies.set("email",data.email)
      navigate("/admin")
    }
    catch(err){
      alert(err)
    }
  }

  const inputEmail = (e)=>{
    setEmail(e.target.value)
  }

  const inputPassword = (e)=>{
    setPassword(e.target.value)
  }

  return (
    <div className="w-fit text-lg mx-auto mt-12 p-5  rounded-lg bg-white ">
      <p className="text-center font-bold text-2xl">Login</p> <br />
      <form onSubmit={submitForm}>
      <label htmlFor="Email">Email: </label>
      <Input type="email" name="Email" onchange={inputEmail}/>
      <br />
      <label htmlFor="Password">Password: </label>
      <Input type="password" name="Password" onchange={inputPassword}/>
      <SubmitBtn text="Submit"/>
      </form>
    </div>
  );
}

export default Login;
