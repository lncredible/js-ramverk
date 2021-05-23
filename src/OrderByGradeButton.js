import React from "react";

const OrderByGradeButton = (props) => {
  return (
    <button
      onClick={(e) => props.onClick("gradesSort")}
      style={{ backgroundColor: "blue", marginTop: "10px" }}
      className="btn btn-primary"
    >
      Betygsordning
    </button>
  );
};

export default OrderByGradeButton;
