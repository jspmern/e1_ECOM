import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserDashboardMenu from '../../components/UserDashboardMenu'
function Dashbord() {
  return (
    <Layout>
         <div className="container">
          <h1 className='text-center m-3'>User Dashboard</h1>
          <div className="row d-flex justify-content-start">
             <div className="col-md-3">
               <UserDashboardMenu/>
             </div>
             <div className="col-md-9">
              //content
             </div>
          </div>
         </div>
    </Layout>
  )
}

export default Dashbord