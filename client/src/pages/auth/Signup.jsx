import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";

function Signup() {
 let [formData,setData] =useState({name:"",password:"",phone:"",email:"",address:""})
 //this is for setting the value of form
 function formDataHandler(e)
 {
     setData((pre)=>{
      return {...pre,[e.target.name]:e.target.value}
     })
 }
 function submitHandler(e)
 {
    e.preventDefault()
    //inline validation
    if(!formData.name || !formData.email || !formData.password || !formData.phone || !formData.address)
    {
      console.log('all  field are required *')
    }
    else{
      console.log(formData)
    }
   
 }
  return (
    <Layout title="Registration -ecomm">
      <h4 className="text-center m-5">Registration Form </h4>
      <div className="container" style={{height:"70vh"}}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={formDataHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={formDataHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={formDataHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="Enter your Mobile No."
                  value={formData.phone}
                  onChange={formDataHandler}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={formDataHandler}
                />
              </div>

              <button type="submit" className="btn btn-primary" onClick={submitHandler}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
