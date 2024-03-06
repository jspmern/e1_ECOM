import express from 'express'
import { otpGenrateHandler, otpValiateHandler  } from '../controller/otpController.js'
let route=express.Router()
route.post('/otp',otpGenrateHandler)
 route.post('/otp-validate',otpValiateHandler)
export default route