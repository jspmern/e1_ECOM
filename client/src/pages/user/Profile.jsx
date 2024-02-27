import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserDashboardMenu from "../../components/UserDashboardMenu";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

function Profile() {
  let [auth,setAuth] = useAuth();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [address, setAddress] = useState("");
  let [password, setPassword] = useState("");
  let navigate=useNavigate()
  let location=useLocation()
  //this is for submit product handler
  async function updateUserProfile(e) {
    try {
      if (!name || !address || !phone) {
        toast("All field are required *");
      } else {
        let { data } = await axios.put("/api/v1/profile-update", {
          name,
          phone,
          address,
          password: password ? password : "",
        },{headers:{"Authorization":auth.token}});
        toast(data.message)
        console.log(data)
        setAuth({user:data.user,token:auth.token})
        navigate(location.state||"/");
      }
    } catch (err) {
      console.log(err.message);
      toast(err.message);
      return;
    }
  }
  // //this is for the deleting the file

  useEffect(() => {
    setName(auth.user.name);
    setEmail(auth.user.email);
    setAddress(auth.user.address);
    setPhone(auth.user.phone);
  }, []);
  return (
    <Layout title={"Update Profile -ecom"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <UserDashboardMenu />
          </div>

          <>
          
              <div className="col-md-9">
                <h4 className="text-center m-3">Update Profile</h4>
                <hr />
                <div className="mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    disabled
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Phone no"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </div>

                <div className="mt-4 mb-4">
                  <button
                    className="btn btn-primary"
                    onClick={updateUserProfile}
                  >
                    Update User
                  </button>
                </div>
              </div>
             
          </>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
