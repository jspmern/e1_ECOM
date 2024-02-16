import cloudinary from "../config/cloudinary.js"

//this is for the uploading
export let uploadImageOnCloudinary=async(img)=>{
    let images=[]
    for (let i=0; i<img.length;i++)
    {
        let result=await cloudinary.uploader.upload(img[i].path)
        images.push({url:result.url,public_id:result.public_id})
    }
    return images

}
//this is for the delete 
export let deleteImageOnCloudinary=async(img)=>{
    for(let i=0;i<img.length;i++)
    { 
       await cloudinary.uploader.destroy(img[i].public_id, function(error, result) {
            if (error) {
              console.error("Error deleting image:", error);
            } else {
            //   console.log("Image deleted successfully:", result);
                return true
            } })
    } 
}
  
