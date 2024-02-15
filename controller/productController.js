import cloudinary from "../config/cloudinary.js"
import { uploadImageOnCloudinary } from "../helper/cloudinaryHelper.js"
import productModel from "../model/productModel.js"
//this is for product creation
export let createProductController=async(req,res)=>{
    try{
          let {name,price,quantity,description,category,brand,shipping}=req.body
          let images=req.files
        if(!name || !price || !quantity || !description || !category || !brand || !shipping)    
        {
          return  res.status(200).send({message:"All fields are required *"})
        } 
        if(images.length==0)
        {
             return res.status(200).send({message:"At least Upload one image"}) 
        }
        let image= await uploadImageOnCloudinary(req.files) 
        let product = await new productModel({name,price,quantity,description,category,brand,shipping,images:image}).save()
        res.status(201).send({message:"Product Created Successful",success:true,product})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Somthing wrong while creating product",success:false,err})
    }
}
//getAllProduct
export let getAllProductController=async(req,res)=>{
    try{
        let products=await productModel.find({}).populate('category').sort({createdAt:-1})
        res.status(200).send({message:"All Products",success:true,products,total:products.length})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Somthing wrong while getting Product"})
    }
}