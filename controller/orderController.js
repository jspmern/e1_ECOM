import orderModel from "../model/orderModel.js"

//this is for handling order for specific user
export let userOrderController=async (req,res)=>{
    try{
        let orders=await orderModel.find({buyer:req.user._id}).populate('products').populate('buyer')
        res.status(200).send({message:"All Orders",orders,success:true})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"somthing wrong while printing order",err,success:false})
    }
}