import "./restaurantItem.css";

import React from "react";
import StarRating from "../../UI/StarRating/StarRating";

const RestaurantItem = (props) => {
  const { restaurant } = props;
  return (
    <div className="restaurantItem">
      <div className="card">
        <div className="grid">
          <img src={restaurant.logo_url} alt={`${restaurant.name}_logo`} />
          <h3>{restaurant.name}</h3>
          <StarRating rating={restaurant.reviews} />
          {/* <span>{restaurant.reviews}</span> */}
          <p>{restaurant.about}</p>
          <span>{restaurant.type}</span>
          <button className="btn">View menu</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
