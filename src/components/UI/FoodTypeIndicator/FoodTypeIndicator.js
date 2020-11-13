import React from "react";

const FoodTypeIndicator = ({ type, ...other }) => {
  let foodTypeIndicator = null;
  if (type === "veg") {
    foodTypeIndicator = "🟩";
  } else if (type === "non veg") {
    foodTypeIndicator = "🟥";
  } else {
    foodTypeIndicator = "🟩  🟥";
  }
  return (
    <span style={{ opacity: 0.7 }} {...other}>
      {foodTypeIndicator}
    </span>
  );
};

export default FoodTypeIndicator;
