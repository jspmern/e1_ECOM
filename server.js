import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'
import DbConnection from './config/db.js';
import authRoute from './route/authRoute.js';
import categoryRoute from './route/createRoute.js'
import productRoute from './route/productRoute.js'
import orderRoute from './route/orderRoute.js'
import otpRoute from './route/otpRoute.js'
let app=express(); 
//.....with new laptop......//
//config
//this is for dotenv
dotenv.config()
//this for setting your request body
app.use(express.json())
//this is for morgan
app.use(morgan('dev'))
//this is for db
DbConnection()
//this is for cors
app.use(cors())
let PORT=process.env.PORT 
//authRoute
app.use('/api/v1',authRoute)
//categoryRoute
app.use('/api/v1',categoryRoute)
//productRoute
app.use('/api/v1',productRoute)
//order Route
app.use('/api/v1',orderRoute)
//otp Route
app.use('/api/v1',otpRoute)
app.listen(PORT,()=>{
    console.log(`Sever is started at  http://localhost:${PORT} in ${process.env.MODE} mode`)
})