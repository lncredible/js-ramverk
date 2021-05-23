import React from "react";

const OrderByAlphaButton = (props) => {
  return (
    <button
      onClick={(e) => props.onClick("alphaSort")}
      style={{ backgroundColor: "blue", marginTop: "10px" }}
      className="btn btn-primary"
    >
      Alfabetisk ordning
    </button>
  );
};

export default OrderByAlphaButton;
