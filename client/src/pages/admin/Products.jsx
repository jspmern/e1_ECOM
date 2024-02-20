import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminDashboard from "./AdminDashboard";
import AdminDashboardMenu from "../../components/AdminDashboardMenu";

function Products() {
  return (
    <Layout title={"Admin All Products- ecom"}>
      <div className="container">
        <div className="row mt-4 d-flex justify-content-start">
            <div className="col-md-3">
                <AdminDashboardMenu/>
            </div>
            <div className="col-md-9">
                <h4 className="text-center mt-2">All Product List</h4>
                <hr/>
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <div>
                              <img src="somthing" alt="somthing" className="img-fluid"/>
                            </div>
                            <p>title</p>
                            <p>description....</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
