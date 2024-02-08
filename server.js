import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'
import DbConnection from './config/db.js';
import authRoute from './route/authRoute.js';
let app=express(); 
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
app.listen(PORT,()=>{
    console.log(`Sever is started at  http://localhost:${PORT} in ${process.env.MODE} mode`)
})