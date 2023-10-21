import React from "react";
import "./Item.css";

const Item = (tutor) => {
  return (
    <div className="tutor-data">
      <img src={tutor.image} alt="" />
      <p>{tutor.name}</p>
      <div className="tutor-info">
        <p>{tutor.subject}</p>
        <div className="tutor-days">
          <p>{tutor.availability}</p>
          <p>{tutor.schedule}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
