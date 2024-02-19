import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminDashboardMenu from "../../components/AdminDashboardMenu";
import { Button, Select, Upload } from "antd";
import { Option } from "antd/es/mentions";
import { UploadOutlined } from "@ant-design/icons";
import useCategory from "../../hook/useCategory";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
    let [auth]=useAuth()
    let navigate=useNavigate()
  let { categories } = useCategory();
  let [category, setCategory] = useState();
  let [images,setImages]=useState([])
  let[name,setName]=useState('')
  let [brand,setBrand]=useState('')
  let [price,setPrice]=useState('')
  let [description,setDescrition]=useState('')
  let [shipping,setShipping]=useState('')
  let [quantity,setQuantity]=useState('')
  function categorySelector(value) {
    setCategory(value);
  }
  
  //this is for submit product handler
  async function submitProductHandler(e)
  {
    try{
        if(!name || !description || !brand || !price || !category || !quantity || !shipping )
        {
            toast('All field are required *')
        }
        if(images.length==0)
        {
           
            toast('All field are required *')    
        }
        let formData=new FormData()
        formData.append('name',name)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('brand',brand)
        formData.append('quantity',quantity)
        formData.append('category',category)
        formData.append('shipping',shipping)
         
        for(let i=0;i<images.length;i++)
        {
            formData.append("images",images[i].originFileObj)
        }
        let res= await axios.post('/api/v1/create-product',formData,{headers:{"Content-Type":"multipart/form-data",Authorization:auth.token,}})
        if(res.data.success)
        {
           toast(res.data.message)
           navigate('/dashboard/admin/products')

        }
        else{
            toast(res.data.message)
        }
    }
    catch(err)
    {
        console.log(err)
        toast(err.message)
    }
    e.preventDefault()
    console.log(name,price,brand,description,images,shipping,quantity)
  }
  return (
    <Layout title={"Create Product -Ecomm"}>
      <div className="container">
        <h1 className="text-center mt-3 mb-2">Admin Dashboard</h1>
        <div className="row">
          <div className="col-md-3">
            <AdminDashboardMenu />
          </div>
          <div className="col-md-9">
            <h4 className="text-center m-3"> Create Product </h4>
            <hr />
            {/* //this is for the category selector */}
             
            <div className="categorySelector">
              {categories.length > 0 && (
                <Select
                  showSearch
                  placeholder="Select a Category"
                  optionFilterProp="children"
                  onChange={categorySelector}
                  style={{ width: "500px" }}
                >
                  {categories?.map((item) => {
                    return <Option value={item._id}>{item.name}</Option>;
                  })}
                </Select>
              )}
            </div>
            <div className="mt-4">
              <Upload listType="picture" onChange={({fileList})=>{ 
                 setImages(fileList)}} 
                 customRequest={()=>false}
                  beforeUpload={()=>false}
                   maxCount={4}
                   multiple
                   accept="image/*">
                <Button   icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Write Product Name"
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                value={name}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Write a description"
                onChange={(e)=>{
                    setDescrition(e.target.value)
                }}
                value={description}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                className="form-control"
                placeholder="Write a brand"
                onChange={(e)=>{
                    setBrand(e.target.value)
                }}
                value={brand}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Enter your Price"
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                value={price}
              />
            </div>
            <div className="mt-4">
              <input
                type="number"
                name="quantity"
                className="form-control"
                placeholder="Write a quantity"
                onChange={(e)=>{
                    setQuantity(e.target.value)
                }}
                value={quantity}
              />
            </div>
            <div className="mt-4">
              <Select
                placeholder="Shipping"
                optionFilterProp="children"
                style={{ width: "500px" }}
                onChange={(value)=>{
                    setShipping(value)
                }}
                 
              >
                <Option value="yes">YES</Option>
                <Option value="no">NO</Option>
              </Select>
            </div>
            <div className="mt-4 mb-4">
              <button className="btn btn-primary" onClick={submitProductHandler}>Create Product</button>
            </div>
         
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;
