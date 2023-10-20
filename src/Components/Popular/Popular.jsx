import React from "react";
import "./Popular.css";
import data_tutors from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h2>Top Monthly Rank</h2>
      <hr />
      <div className="popular-tutor">
        {data_tutors.map((tutor) => {
          return (
            <Item
              key={tutor.id}
              name={tutor.name}
              subject={tutor.subject}
              availability={tutor.availability}
              schedule={tutor.schedule}
              image={tutor.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
