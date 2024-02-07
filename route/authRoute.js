import express from 'express'
import { loginController, registerController } from '../controller/authController.js';
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
let route=express.Router()
// REGISTER || POST
route.post('/register',registerController)
//LOGIN || POST
route.post('/login',loginController)
route.get('/test',isRequire,isAdmin,(req,res)=>{
    res.send('hello i am test')
})
export default route;