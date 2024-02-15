import express from 'express'
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
import { createProductController, getAllProductController } from '../controller/productController.js';
import uploads from '../config/multer.js';
let route=express.Router()
//create-product || POST
route.post('/create-product',isRequire,isAdmin,uploads.array('images',4),createProductController)
//getAllProduct ||GET
route.get('/products',getAllProductController)
export default route;