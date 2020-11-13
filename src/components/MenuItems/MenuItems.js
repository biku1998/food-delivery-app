import "./menuItems.css";
import React from "react";
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = (props) => {
  return (
    <div className="menu-items">
      {/* {props.items.map((item) => (
          <MenuItem item={item} />
        ))} */}
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
};

export default MenuItems;
