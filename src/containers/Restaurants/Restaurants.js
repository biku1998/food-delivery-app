import "./restaurants.css";

import React, { useEffect, useState } from "react";
import AppBar from "../../components/AppBar/AppBar";
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";

const Restaurants = (props) => {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    setRestaurantsList([
      {
        id: "101",
        name: "Restaurant 1",
        about: "About restaurant 1",
        type: "veg",
        reviews: 4.5,
        logo_url:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1547&q=80",
      },
      {
        id: "102",
        name: "Restaurant 2",
        about: "About restaurant 2",
        type: "non-veg",
        reviews: 5,
        logo_url:
          "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      {
        id: "103",
        name: "Restaurant 3",
        about: "About restaurant 3",
        type: "veg",
        reviews: 3.5,
        logo_url:
          "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      },
      {
        id: "104",
        name: "Restaurant 4",
        about: "About restaurant 4",
        type: "both",
        reviews: 4.2,
        logo_url:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
      },
      {
        id: "105",
        name: "Restaurant 5",
        about: "About restaurant 5",
        type: "non-veg",
        reviews: 4.5,
        logo_url:
          "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
    ]);
  }, []);
  return (
    <div className="restaurants">
      <AppBar />
      <RestaurantItems restaurantsList={restaurantsList} />
    </div>
  );
};

export default Restaurants;
