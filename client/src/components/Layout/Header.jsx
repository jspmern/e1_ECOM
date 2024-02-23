import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Search from "../form/Search";
import useCategory from "../../hook/useCategory";

function Header() {
  let [auth, setAuth] = useAuth();
   let {categories}= useCategory()
  //function for logouthandler
  function logoutHandler() {
    setAuth({ user: "", token: null });
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🛒 EComm
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
            <Search/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
               
                
            <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                     to="/all-category"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li >
                      <Link className="dropdown-item" to={'/all-category'}>
                          All Category
                      </Link>
                    </li>
                    {categories.map((item,i)=>{
                      return   <li key={i}>
                      <Link className="dropdown-item" to={`/all-category/${item.slug}`}>
                           {item.name}
                      </Link>
                    </li>
                    })}
                    
                    
                  </ul>
                </li>

            </li>
            {auth?.token ? (
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                     to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth?.user?.name}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to={auth.user.role==true?"/dashboard/admin":"/dashboard/user"}>
                        DASHBOARD
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="dropdown-item" onClick={logoutHandler}>
                        LOGOUT
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    REGISTER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signin">
                    LOGIN
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                CART(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
