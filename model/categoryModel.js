import mongoose from "mongoose";
let categorySchema=new mongoose.Schema({
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
export default mongoose.model('category',categorySchema)