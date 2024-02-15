import React from "react";
import { Link } from "react-router-dom";

function AdminDashboardMenu() {
    let navStyle={textDecoration:"none"}
    
  return (
    <>
      <ul className="list-group">
       <Link style={navStyle} to={"/dashboard/admin/create-category"}><li className="list-group-item">Create Category</li></Link> 
        <Link style={navStyle} to={"/dashboard/admin/create-product"}> <li className="list-group-item">Create Product</li> </Link> 
        <Link style={navStyle} to={"/dashboard/admin/users"}> <li className="list-group-item">Users</li> </Link> 
        <Link style={navStyle} to={"/dashboard/admin/all-orders"}> <li className="list-group-item">Orders</li> </Link> 
      </ul>
    </>
  );
}

export default  AdminDashboardMenu;
