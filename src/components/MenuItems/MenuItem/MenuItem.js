import "./menuItem.css";
import React from "react";

import FoodTypeIndicator from "../../UI/FoodTypeIndicator/FoodTypeIndicator";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <div className="card">
        <div className="grid">
          <div className="details">
            <h4>
              {" "}
              <FoodTypeIndicator type="veg" /> Plain Masala dosa
            </h4>
            <p className="sm">
              Masala Dosa served with aloo masala and three coconut chutneys and
              sambhar
            </p>
          </div>
          <div className="image-action flex">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/sfn1fbrqlya4qiwvjted"
              alt="dosa"
            />
            <button className="btn bg-dark">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
