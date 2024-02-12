import React from "react";
import { Link } from "react-router-dom";

function UserDashboardMenu() {
    let navStyle={textDecoration:"none"}
    
  return (
    <>
      <ul className="list-group">
       <Link style={navStyle} to={"/dashboard/order"}><li className="list-group-item">Orders</li></Link> 
        <Link style={navStyle} to={"/dashboard/profile"}> <li className="list-group-item">Profile</li> </Link> 
      </ul>
    </>
  );
}

export default UserDashboardMenu;
