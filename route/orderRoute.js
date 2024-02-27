import express from 'express'
import { allOrderController, updateOrderStatusController, userOrderController } from '../controller/orderController.js'
import { isAdmin, isRequire } from '../middleware/authMiddleware.js'
let route=express.Router()
//order || GET (userOrder)
route.get('/order',isRequire,userOrderController)
//order || GET (allOrder)
route.get('/all-order',isRequire,isAdmin,allOrderController)
//Update status ||PUT
route.put('/update-order/:id',isRequire,isAdmin, updateOrderStatusController)
export default route