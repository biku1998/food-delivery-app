import React from "react";

const StarRating = ({ rating }) => {
  const stars = new Array(Math.round(rating));
  console.log(rating, stars);
  return (
    <div>
      {stars.map((s) => (
        <i className="fas fa-star"></i>
      ))}
    </div>
  );
};

export default StarRating;
