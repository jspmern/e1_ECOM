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
//this is for getting all category
export let allCategoryController =async (req,res)=>{
    try{
        let category= await categoryModel.find({}).sort({createdAt:-1})
        res.status(200).send({message:"All Category",success:true,category,total:category.length})        
    }
    catch(err)
    {
        res.status(500).send({message:"Somthing wrong while fetching all category",success:false,err})
    }
    

}
//delete category
export let deleteCategoryController=async (req,res)=>{
    try{
        let {id}=req.params
        let result=await categoryModel.findByIdAndDelete({_id:id})
        res.status(200).send({message:"Category Deleted successful",success:true,result})
    }
    catch(err)
    {
        res.status(500).send({message:"somthing wrong while deleting",success:false,err})
    }
}