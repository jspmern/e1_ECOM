import mongoose from "mongoose";
let userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    answer:{
        type:String,
        require:true
    },
    role:{
        type:Boolean,
        default:0
    }
},{timestamps:true})

export default mongoose.model('users',userSchema)