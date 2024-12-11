/*

 /auth/user/login

 */


 const express=require("express")
 const router=express.Router()
 const jwt=require('jsonwebtoken')
 const userExist=require('../../middlewares/userExist')
 
 const jwt_secret=process.env.JSON_Secret;
 
 router.post("/",userExist,async(req,res)=>{
     const userData=req.body;
     if(req.savedPass == userData.password){
         const token=jwt.sign(userData,jwt_secret);
         res.status(200).json({token:token,name:req.savedName})
     }
     else{
         res.status(401).json("Password is incorrect");
     }
 })
 
 module.exports=router;