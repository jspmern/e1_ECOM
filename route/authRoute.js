import express from 'express'
import { loginController, registerController } from '../controller/authController.js';
let route=express.Router()
// REGISTER || POST
route.post('/register',registerController)
//LOGIN || POST
route.post('/login',loginController)
export default route;