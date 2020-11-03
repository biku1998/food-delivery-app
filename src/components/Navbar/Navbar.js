import React from "react";
import "./navbar.css";
const Navbar = ({ loginClickHandler, signupClickHandler }) => {
  return (
    <div className="navbar">
      <div className="container flex">
        <div className="logo">
          <i className="fas fa-utensils fa-3x"></i>
          <h1>Food Delivery</h1>
        </div>
        <nav>
          <ul>
            <li>
              <button className="btn btn-outline" onClick={loginClickHandler}>
                Login
              </button>
            </li>
            <li>
              <button className="btn btn-outline" onClick={signupClickHandler}>
                Signup
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
