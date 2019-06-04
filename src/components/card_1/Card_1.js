import React from "react";
import "./Card_1.css";

const Card_1 = ({ cardData }) => {
  return (
    <div className="all">
      <div className="image">
        <h5 className="content2">{cardData.subtext}</h5>
        <img src={cardData.image} alt={""} />
        <div className="content1">
          <i className="fa fa-map-marker" />
          {cardData.heading}
        </div>
      </div>
    </div>
  );
};

export default Card_1;
