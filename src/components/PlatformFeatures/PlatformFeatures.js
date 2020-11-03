import "./platformFeatures.css";

import React from "react";

const PlatformFeatures = () => {
  return (
    <div className="features">
      <div className="flex">
        <div className="card">
          <i className="fas fa-money-bill-wave fa-4x"></i>
          <h3>No Minimum Order</h3>
          <p>
            Order in for yourself or for the group, with no restrictions on
            order value
          </p>
        </div>
        <div className="card">
          <i className="fas fa-map-marked-alt fa-4x"></i>
          <h3>Live Order Tracking</h3>
          <p>
            Know where your order is at all times, from the restaurant to your
            doorstep
          </p>
        </div>
        <div className="card">
          <i className="fas fa-shipping-fast fa-4x"></i>
          <h3>Lightning-Fast Delivery</h3>
          <p>
            Experience superfast delivery for food delivered fresh & on time
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeatures;
