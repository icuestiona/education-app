import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (tutor) => {
  return (
    <Link className="tutor-data" to={`/tutor/${tutor.id}`}>
      <img src={tutor.image} alt={`${tutor.name}, tutor`} />
      <p>{tutor.name}</p>
      <div className="tutor-info">
        <p>{tutor.subject}</p>
        <div className="tutor-days">
          <p>{tutor.availability}</p>
          <p>{tutor.schedule}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
