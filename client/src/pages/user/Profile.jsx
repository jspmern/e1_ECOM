import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserDashboardMenu from '../../components/UserDashboardMenu'

function Profile() {
  return (
     <Layout title={"User Profile -Ecomm"}>
        <div className="container">
        <h1 className='text-center m-3'>User Profile</h1>
            <div className="row">
                <div className="col-md-3">
                    <UserDashboardMenu/>
                </div>
                <div className="col-md-9">
                    <h6>User Profile</h6>
                </div>
            </div>
        </div>

     </Layout>
  )
}

export default Profile