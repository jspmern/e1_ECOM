import jwt from 'jsonwebtoken'
import usersModel from '../model/usersModel.js'
export let isRequire=async(req,res,next)=>{
    try{
         let decode= jwt.verify(req.headers.authorization,process.env.SECRET_KEY)
         req.user=decode
         if(!decode)
         {
            res.status(200).send({message:"Unauthorized User"})
         }
         next()
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"User is not Autherized"})
    }
  req.headers.authorization
   
}
//this is for the admin user
export let isAdmin=async(req,res,next)=>
{
   let userData=await usersModel.findById({_id:req.user._id})
   if(userData.role!=0)
   {
       next()
   }
   else{
    return res.status(200).send({message:"User is not Autherized"})
   }
}