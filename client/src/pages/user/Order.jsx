import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserDashboardMenu from "../../components/UserDashboardMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function Order() {
  let [auth] = useAuth();
  let [orders, setOrders] = useState([]);
  async function getOrder() {
    try {
      let { data } = await axios("/api/v1/order", {
        headers: { Authorization: auth.token },
      });
      if (data.success) {
        console.log(data.orders);
        setOrders(data.orders);
      } else {
        toast(data.message);
        return;
      }
    } catch (err) {
      console.log(err);
      toast(err.message);
    }
  }
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <Layout title={"All Order -Ecomm"}>
      <div className="container">
        <h1 className="text-center m-3">All Orders</h1>
        <div className="row">
          <div className="col-md-3">
            <UserDashboardMenu />
          </div>
          <div className="col-md-9">
            <h6 className="text-center m-3"> All Orders</h6>
            <hr />
            <table className="table " >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Status</th>
                  <th scope="col">Buyer</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {orders.length == 0 && <h6>No Order Placed</h6>}
                {orders.length > 0 &&
                  orders?.map((item, i) => {
                    return (
                      <>
                        <tr key="i" className="mb-2">
                          <td>{i + 1}</td>
                          <td>{item?.status}</td>
                          <td>{item?.buyer?.name}</td>
                          <td>{"2/3/2023"}</td>
                          <td>{item?.payment?.success ? "Success" : "Fail"}</td>
                          <td>{item.products.length}</td>
                        </tr>
                        <tr>
                            <td>
                        <div className="container">
                          {item?.products?.map((item, i) => {
                            return (
                              <div className="row m-2" style={{border:"1px solid black"}}>
                                <div className="col-md-6">
                                  <img
                                    src={item?.images[0]?.url}
                                    alt={item?.images[0]?.url}
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-md-6">
                                  <h6>{item?.name}</h6>
                                  <p>{item?.description}</p>
                                  <p>Price:{item?.price}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        </td>
                        </tr>
                      </>
                    );
                  })}
                  <br/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Order;
