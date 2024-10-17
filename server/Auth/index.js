const express=require("express")
const router=express.Router();


const admin=require('./Admin')
const user=require('./User')

router.use('/admin',admin)
router.use('/user',user)


module.exports=router;