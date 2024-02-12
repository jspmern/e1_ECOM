import React from 'react'
import Layout from '../../components/Layout/Layout'

function AdminDashboard() {
  return (
    <Layout>
    <div className="container">
     <h1 className='text-center m-3'>Admin Dashboard</h1>
     <div className="row d-flex justify-content-start">
        <div className="col-md-3">
          {/* <UserDashboardMenu/> */}
          //admin dashboardMenu
        </div>
        <div className="col-md-9">
         //content
        </div>
     </div>
    </div>
</Layout>
  )
}

export default AdminDashboard