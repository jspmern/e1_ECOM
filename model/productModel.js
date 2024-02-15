import mongoose from "mongoose"
//this is my productSchema
let productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    brand:{
        type:String,
    },
    description:{
        type:String,
        require:true
    },
    images:[{
        url:{
            type:String
        },
        public_id:{
            type:String
        }
    }],
    category:{
         type:mongoose.ObjectId,
         ref:"category",
         require:true
    },
    shipping:{
        type:String,
        default:'yes'
    }
},{timestamps:true})
export default mongoose.model('product',productSchema)