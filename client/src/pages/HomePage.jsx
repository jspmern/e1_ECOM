import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Checkbox, Radio } from "antd";
import useProduct from "../hook/useProduct";
import useCategory from "../hook/useCategory";
import { Price } from "../components/Price";
import axios from "axios";

function HomePage() {
  let { products, loading, error,total } = useProduct();
  let [selectedCategory, setSelectedCategory] = useState([]);
  let [price, setPrice] = useState("");
  let { categories } = useCategory();
  let [filterData, setFilterData] = useState([]);
  //filter  count
  let [filterCount,setFilterCount]=useState('')
  //totalcount
  //this is for handling category
  function changeCategoryHandler(e, id) {
    let all = [...selectedCategory];
    let checked = e.target.checked;
    if (checked) {
      all.push(id);
    } else {
      all = all.filter((data) => {
        return data != id;
      });
    }
    setSelectedCategory([...all]);
  }
  //this is for price handler
  function priceHandler(e) {
    setPrice(e.target.value);
  }
  async function filterHanlder() {
    let res = await axios.post("/api/v1/filter-product", {
      price,
      checked: selectedCategory,
    });
    setFilterData(res.data.products);
  }
  useEffect(() => {
    filterHanlder();
  }, [price, selectedCategory]);

  return (
    <Layout title="Best Offer -ecomm">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="category-checkbox mt-2">
              <h6>All Category</h6>
              <hr />
              <div className="mt-1">
                {categories.map((item) => {
                  return (
                    <div key={item._id}>
                      <Checkbox
                        value={item._id}
                        className="p-2"
                        style={{ fontSize: "16px" }}
                        onChange={(e) => {
                          changeCategoryHandler(e, item._id);
                        }}
                      >
                        {item.name}
                      </Checkbox>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="price-range mt-2">
              <h6> Filter By Price</h6>
              <hr />
              <div className="mt-2">
                <Radio.Group onChange={priceHandler}>
                  {Price.map((item) => {
                    return (
                      <div key={item._id} className="p-2">
                        <Radio value={item.array}>{item.name}</Radio>
                      </div>
                    );
                  })}
                </Radio.Group>
              </div>
            </div>
            <div className="mt-2">
              <button className="btn btn-danger" onClick={()=>{
                window.location.reload()
              }}>CLEAR ALL</button>
            </div>
          </div>
          <div className="col-md-9">
            <h4 className="text-center mt-2"> All Products </h4>
            <p className="text-end">{price || selectedCategory.length>0 ? <p>{filterData.length}/{total} Found</p>:`All Product ${total}`}</p>
            <div className="row">
              {loading && <h4>loding.....</h4>}
              {loading && products.length == 0 && <h4>loading....</h4>}
              {!loading && error && <h4>somthing wrong....</h4>}
              {!loading && products.length > 0 && (
                <>
                  {(selectedCategory.length > 0 || price
                    ? filterData
                    : products
                  ).map((item, i) => {
                    let {
                      name = "unknow",
                      price = 0,
                      brand = "unknown",
                      images,
                    } = item;
                    return (
                      <div className="col-md-4 mb-3" key={i}>
                        <div className="card">
                          <div className="card-body">
                            <div className="img">
                              <img
                                src={images[0]?.url}
                                alt={images[0]?.url}
                                className="img-fluid"
                              />
                            </div>
                            <p>
                              <b>{name}</b>
                            </p>
                            <p>{brand}</p>
                            <p>{price}</p>
                            <div className="action d-flex">
                              <button className="btn btn-primary">
                                More Details
                              </button>
                              <button className="btn btn-secondary ms-2">
                                ADD TO CART
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
