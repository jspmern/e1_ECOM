import express from 'express'
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
import { createProductController, deleteProductController, filterProductController, getAllProductController, getSingleProductController, totalProductController, updateProductController } from '../controller/productController.js';
import uploads from '../config/multer.js';
let route=express.Router()
//create-product || POST
route.post('/create-product',isRequire,isAdmin,uploads.array('images',4),createProductController)
//getAllProduct ||GET
route.get('/products',getAllProductController)
//singleproduct ||GET
route.get('/single-product/:id',getSingleProductController)
//deleteProduct ||DELETE
route.delete('/delete-product/:id',isRequire,isAdmin,deleteProductController)
//updateProduct ||PUT
route.put('/update-product/:id',isRequire,isAdmin,uploads.array('images',4),updateProductController)
//FilterProduct || POST
route.post('/filter-product',filterProductController)
//TotalProductCount || GET
route.post ('/totalProduct',totalProductController)
export default route;