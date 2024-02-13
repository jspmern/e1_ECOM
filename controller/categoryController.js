import categoryModel from "../model/categoryModel.js"
import slugify from "slugify"

//this is for the crate-category 
export let createCategoryController=async(req,res)=>{
       try{
        let {name}=req.body
        if(!name)
        {
            res.send({message:"Field is required"})
        }
        let category= await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({message:"Category creation successful ",category,success:true})
       }
       catch(err)
       {
        console.log(err)
        res.status(500).send({message:"Somthing wrong while creating category",success:false,
         err})
       }
}