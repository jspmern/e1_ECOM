import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  let [auth,setAuth]=useAuth()
  //function for logouthandler
  function logoutHandler()
  {
    setAuth({"user":'',"token":null})
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/category">
                      CATEGORY
                    </NavLink>
                  </li>
                  {auth?.token ? ( <li className="nav-item">
                    < Link className="nav-link" onClick={logoutHandler}>
                        LOGOUT
                    </Link>
                  </li>):(<>
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
                  </>)}
                 
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
