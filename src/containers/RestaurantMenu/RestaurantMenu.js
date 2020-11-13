import "./restaurantMenu.css";

import React from "react";
import AppBar from "../../components/AppBar/AppBar";

import vectorFood from "../../images/vector_food.svg";
import CartItem from "../../components/CartItem/CartItem";
import MenuItems from "../../components/MenuItems/MenuItems";
import Rating from "../../components/UI/Rating/Rating";
import FoodTypeIndicator from "../../components/UI/FoodTypeIndicator/FoodTypeIndicator";

const RestaurantMenu = (props) => {
  const restaurantId = props.match.params["id"];
  return (
    <div className="restaurant-menu">
      <AppBar />
      <div className="showcase">
        <div className="container flex">
          <img
            className="logo"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mqiufpiqdqrtxavhck2l"
            alt="restaurant logo"
          />
          <div className="info">
            <h3 className="py-2 md">Sri Ganesh South Indian</h3>
            <Rating rating={4.5} />
            <FoodTypeIndicator
              type="veg"
              style={{ marginLeft: "2rem", opacity: 0.7 }}
            />
          </div>
          <img className="vector-display" src={vectorFood} alt="vector food" />
        </div>
      </div>
      <div className="items-cart py-1">
        <div className="container grid">
          <div className="items">
            <h3 className="md">Explore Restaurant Menu</h3>
            <MenuItems />
          </div>
          <div className="cart">
            <h3 className="md">Cart</h3>
            <span className="sm">1 ITEM</span>
            <div className="card">
              <CartItem
                type={<FoodTypeIndicator type="veg" />}
                name="Plain Masala dosa"
                quantity={1}
              />
              <span className="sm">
                Subtotal <i className="fas fa-rupee-sign"> 34</i>
              </span>
              <button className="btn checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
