import express from 'express'
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
import { createProductController } from '../controller/productController.js';
let route=express.Router()
route.post('/create-product',isRequire,isAdmin,createProductController)
export default route;