import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminDashboardMenu from '../../components/AdminDashboardMenu'

function CreateProduct() {
    return (
        <Layout title={"Create Product -Ecomm"}>
          <div className="container">
           <h1 className='text-center mt-3 mb-2'>Admin Dashboard</h1>
           <div className="row">
               <div className="col-md-3">
                   <AdminDashboardMenu/>
               </div>
               <div className="col-md-9">
                   //create Product
               </div>
           </div>
          </div>
        </Layout>
     )
}

export default CreateProduct