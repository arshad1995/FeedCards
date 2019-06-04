import React from "react";
import "./NoCard.css";

const NoCard = props => {
  return (
    <div className="noData">
      <div className="noData1">{props.noData}</div>
    </div>
  );
};

export default NoCard;
