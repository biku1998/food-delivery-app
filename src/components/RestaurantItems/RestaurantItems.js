import "./restaurantItems.css";
import React from "react";
import RestaurantItem from "./RestaurantItem/RestaurantItem";

const RestaurantItems = (props) => {
  console.log(props);
  return (
    <div className="restaurantItems">
      <div className="container grid">
        {props.restaurantsList.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantItems;
