import "./showcase.css";
import foodChinese from "../../images/food_chinese.jpg";
import foodMeat from "../../images/food_meat.jpg";
import foodPizza from "../../images/food_pizza.jpg";

import React from "react";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="grid">
        <div>
          <h2 className="md text-center">Restaurants in your pocket</h2>
          <p className="lead text-center">
            Order from your favorite restaurants & track on the go
          </p>
        </div>
        <div className="grid">
          <img src={foodChinese} alt="chinese food" />
          <img src={foodMeat} alt="meat food" />
          <img src={foodPizza} alt="sandwitch food" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
