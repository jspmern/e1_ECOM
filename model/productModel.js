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
    }
},{timestamps:true})