import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../Spinner'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

function AdminProtectedRoute() {
   let [ok,setOk]= useState(false)
   let [auth]=useAuth()
  async function isAdmin()
   {
       let res=  await axios.get('/api/v1/admin-auth-route',{headers:{"Authorization":auth?.token}})
       let data= await res.data
       if(data.ok)
       {
          setOk(data.ok)
       }
   }
   useEffect(()=>{
       isAdmin()
   },[])
  

    return ok?<Outlet/>:<Spinner/>
}

export default AdminProtectedRoute