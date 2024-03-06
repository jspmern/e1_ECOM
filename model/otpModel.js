import mongoose from "mongoose";
let otpSchema= new mongoose.Schema({
     email:String,
     otp:Number,
     user:{
        type: mongoose.ObjectId,
        ref: "users",
     },
     createdAt: { type: Date, expires: 80, default: Date.now },

})
export default mongoose.model('otpmodel',otpSchema)