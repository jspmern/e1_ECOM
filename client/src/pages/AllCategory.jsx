import React from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hook/useCategory'
import { NavLink } from 'react-router-dom'

function AllCategory() {
   let {categories}= useCategory()
  return (
       <Layout title={"All Category-Ecom"}>
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col">
                    <h1>All Category</h1>
                    {categories.length==0 && <h1>wait....</h1>}
                    <div className="row">
                    {categories.length>0 && categories.map((item)=>{
                        return <NavLink to={`/all-category/${item.slug}`}>{item.name}</NavLink>

                      })}
                    </div>
                    
                </div>
            </div>
        </div>
       </Layout>
  )
}

export default AllCategory