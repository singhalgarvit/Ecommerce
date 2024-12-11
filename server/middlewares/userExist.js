const User=require('../database/schemas/user.schema')

async function userExist(req,res,next){
    const userData=req.body;
    try{
        const user=await User.findOne({email:userData.email});
            if(!user) {
             return   res.status(404).json("User not found with this Email");
            }
            else{
                req.savedPass=user.password; //this is the password that is stored in database for the user
                req.savedName=user.name;     //this is the Name that is stored in database for the user
                next()
            }
    }
    catch(err){
        res.status(401).json(err)
    }
}

module.exports=userExist