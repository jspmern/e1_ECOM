import express from 'express'
import { loginController, profileUpdateController, registerController, restPasswordHandler } from '../controller/authController.js';
import { isAdmin, isRequire } from '../middleware/authMiddleware.js';
let route=express.Router()
// REGISTER || POST
route.post('/register',registerController)
//LOGIN || POST
route.post('/login',loginController)
//Reset || POST
route.post('/reset-password',restPasswordHandler)
//auth-route || get
route.get('/auth-user',isRequire,(req,res)=>{
    res.send({ok:true})
})
//admin-auth-route || get
route.get('/admin-auth-route',isRequire,isAdmin,(req,res)=>{
    res.send({ok:true})
})

//update user || put
route.put('/profile-update',isRequire,profileUpdateController)
export default route;