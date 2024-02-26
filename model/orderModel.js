import mongoose from "mongoose";
let orderSchema=new mongoose.Schema({
     products:[{type:mongoose.ObjectId,
                 ref:"product"}] ,
    payment:{},
    buyer:{type:mongoose.ObjectId,
           ref:'users'},
    status:{
        type:String,
        default:"Not Process",
        enum:["Not Process","Processing","Shipped","Delivered","Cancel"]
    }
    
})
export default mongoose.model('order',orderSchema)