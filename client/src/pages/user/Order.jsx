import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserDashboardMenu from '../../components/UserDashboardMenu'

function Order() {
  return (
     <Layout title={"All Order -Ecomm"}>
        <div className="container">
        <h1 className='text-center m-3'>All Orders</h1>
            <div className="row">
                <div className="col-md-3">
                    <UserDashboardMenu/>
                </div>
                <div className="col-md-9">
                    <h6>Orders</h6>
                </div>
            </div>
        </div>

     </Layout>
  )
}

export default Order