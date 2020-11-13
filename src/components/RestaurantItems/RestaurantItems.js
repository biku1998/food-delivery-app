import "./restaurantItems.css";
import React from "react";
import RestaurantItem from "./RestaurantItem/RestaurantItem";

const RestaurantItems = (props) => {
  const menuOpenClickHandler = (restaurantId) => {
    console.log(`You have clicked on ${restaurantId}`);
    props.history.push(`/restaurants/${restaurantId}`);
  };

  return (
    <div className="restaurantItems">
      <div className="container grid">
        {props.restaurantsList.map((restaurant) => (
          <RestaurantItem
            key={restaurant.id}
            restaurant={restaurant}
            menuOpenClickHandler={menuOpenClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantItems;
