import express from 'express'
import { registerController } from '../controller/authController.js';
let route=express.Router()
// REGISTER || POST
route.post('/register',registerController)
export default route;