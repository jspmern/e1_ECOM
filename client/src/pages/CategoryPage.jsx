import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import MoreDeatils from '../components/form/MoreDeatils'
import AddToCart from '../components/form/AddToCart'

function CategoryPage() {
    let {slug}=useParams()
    let [product,setProduct]=useState([])
     async function getDataBySlug()
     {
      try{
        let {data}=await axios.get(`/api/v1/product-category/${slug}`)
         setProduct(data.product)
      }
      catch(err)
      {
        console.log(err)
        toast(err.message)
      }
     }
     let navigate=useNavigate()
    function singlPageHandler(id)
    {
        
         navigate(`/product-details/${id}`)
    }
    useEffect(()=>{
         getDataBySlug()
    },[slug])
  return (
      <Layout title={"Category Page:Ecom"}>
        <div className="container">
            <div className="row d-flex justify-content-evenly">
            {product.length==0 && <h4>loading...</h4>}
                {product.length>0 && product.map((item)=>{
                    return <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <img src={item?.images[0]?.url} alt={item?.images[0]?.url} className='img-fluid'/>
                                </div>
                                <h6>{item?.name}</h6>
                                <p>{item?.description}</p>
                                <p>{item?.brand}</p>
                                <MoreDeatils p_id={item._id} singlPageHandler={singlPageHandler}  />
                               
                                <AddToCart prod={item}/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

      </Layout>
  )
}

export default CategoryPage