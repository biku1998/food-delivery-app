import "./AppBar.css";

import React from "react";

const AppBar = (props) => {
  return (
    <div className="appbar">
      <div className="container flex">
        <div className="logo">
          <i className="fas fa-utensils fa-3x"></i>
          <h1>Food Delivery</h1>
        </div>
        <nav>
          <ul>
            <li>
              <i className="fas fa-user"></i>
              <h3>username</h3>
            </li>
            <li>
              <i className="fas fa-question-circle"></i>
              <h3>help</h3>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
