import mongoose from "mongoose";

let DbConnection=async()=>{
    try{
        let connection= await  mongoose.connect('mongodb://127.0.0.1:27017/e1ecom')
        console.log('Connected!')
    }
    catch{
        console.log('somthing wrong while db connection')
    }
}
export default DbConnection