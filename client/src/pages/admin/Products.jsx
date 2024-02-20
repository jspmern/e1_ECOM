import React from "react";
import Layout from "../../components/Layout/Layout";
 
import AdminDashboardMenu from "../../components/AdminDashboardMenu";
import useProduct from "../../hook/useProduct";
import { Link } from "react-router-dom";

function Products() {
 let {loading,products,error}= useProduct()
  return (
    <Layout title={"Admin All Products- ecom"}>
      <div className="container">
        <div className="row mt-4 d-flex justify-content-start">
            <div className="col-md-3">
                <AdminDashboardMenu/>
            </div>
            <div className="col-md-9">
                <h4 className="text-center ">All Product List</h4>
                <hr/>
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      {loading && <h4>loading......</h4>}
                      {!loading && error && <h1>somthing wrong ....</h1>}
                      {!loading && products.length>0 && <>
                      {products?.map((item,i)=>{
                        let {name="unknown",description="contente will load",brand="unknown",images=[],_id}=item
                        return  <div className="col-md-3 m-2" key={i}>
                           <Link to={`/dashboard/admin/products/${_id}`} style={{textDecoration:"none" ,color:"black"}}>
                           <div className="card" >
                          <div className="card-body">
                            <div>
                              <img src={images.length==0?'':images[0].url} alt="somthing" className="img-fluid"/>
                            </div>
                            <p><strong>{name}</strong></p>
                            <p>{description}</p>
                            <p>{brand}</p>
                          </div>
                        </div>
                           </Link>
                      
                      </div>
                      })}
                      </>}
                  
                      
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
