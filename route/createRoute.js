import express from 'express'
import { createCategoryController } from '../controller/categoryController.js';
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
let route= express.Router()
//create-category || POST
route.post('/create-category',isRequire, isAdmin,createCategoryController)
export default route;