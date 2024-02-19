import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminDashboardMenu from "../../components/AdminDashboardMenu";
import { Button, Select, Upload } from "antd";
import { Option } from "antd/es/mentions";
import { UploadOutlined } from "@ant-design/icons";
import useCategory from "../../hook/useCategory";

function CreateProduct() {
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
  function fileChangeHandler({ fileList }) {
     setImages(fileList)
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
              <Upload listType="picture" onChange={fileChangeHandler}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Write Product Name"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Write a description"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                className="form-control"
                placeholder="Write a brand"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="Enter your Price"
              />
            </div>
            <div className="mt-4">
              <input
                type="number"
                name="quantity"
                className="form-control"
                placeholder="Write a quantity"
              />
            </div>
            <div className="mt-4">
              <Select
                placeholder="Shipping"
                optionFilterProp="children"
                style={{ width: "500px" }}
              >
                <Option value="yes">YES</Option>
                <Option value="no">NO</Option>
              </Select>
            </div>
            <div className="mt-4 mb-4">
              <button className="btn btn-primary">Create Product</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CreateProduct;
