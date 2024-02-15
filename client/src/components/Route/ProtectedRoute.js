import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Spinner from '../Spinner'

function ProtectedRoute() {
    let [auth]=useAuth()
    let [ok,setOk] =useState(false)
   async function isUserValid()
   {
    let res= await axios.get('/api/v1/auth-user',{headers:{Authorization:auth.token}})
    let data=res.data
     if(data.ok)
     {
        setOk(data.ok)
     }
   }
   useEffect(()=>{
    if(auth.token) isUserValid()
   },[ok,auth])
 
   return ok?<Outlet/>:<Spinner/>
}

export default ProtectedRoute