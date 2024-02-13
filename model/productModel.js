import mongoose from "mongoose"
let productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        require:true
    }
},{timestamps:true})