import express from 'express'
import { userOrderController } from '../controller/orderController.js'
import { isRequire } from '../middleware/authMiddleware.js'
let route=express.Router()
//order || get (userOrder)
route.get('/order',isRequire,userOrderController)
export default route