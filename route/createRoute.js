import express from 'express'
import { allCategoryController, createCategoryController, deleteCategoryController } from '../controller/categoryController.js';
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
let route= express.Router()
//create-category || POST
route.post('/create-category',isRequire, isAdmin,createCategoryController)
//get-all-category || GET
route.get('/all-category',allCategoryController)
//delete-category || DELETE
route.delete('/delete-category/:id',deleteCategoryController)
export default route;