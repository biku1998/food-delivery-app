import "./backdrop.css";
import React from "react";

const Backdrop = (props) => {
  return props.show ? (
    <div className="backdrop" onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
