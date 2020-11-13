import "./rating.css";

import React from "react";

const Rating = ({ rating }) => {
  return (
    <div
      className="rating"
      style={{
        backgroundColor: rating >= 4 ? "#48c479" : "#db7c38",
      }}
    >
      <i className="fas fa-star"></i>
      {rating}
    </div>
  );
};

export default Rating;
