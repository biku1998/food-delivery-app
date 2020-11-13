import "./restaurantItem.css";

import React from "react";
import Rating from "../../UI/Rating/Rating";
import FoodTypeIndicator from "../../UI/FoodTypeIndicator/FoodTypeIndicator";

const RestaurantItem = (props) => {
  const { restaurant } = props;

  return (
    <div className="restaurantItem">
      <div className="card">
        <div className="grid">
          <img src={restaurant.logo_url} alt={`${restaurant.name}_logo`} />
          <h3>{restaurant.name}</h3>
          <Rating rating={restaurant.rating} />
          <p>{restaurant.about}</p>
          <FoodTypeIndicator type={restaurant.type} />
          <button
            className="btn"
            onClick={() => props.menuOpenClickHandler(restaurant.id)}
          >
            View menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
