import React from "react";
import "./NewTutors.css";
import Item from "../Item/Item";
import all_tutors from "../Assets/all_tutors";

const NewTutors = () => {
  return (
    <div className="new-tutors">
      <h1>All Tutors</h1>
      <hr />
      <div className="tutors">
        {all_tutors.map((tutor) => {
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

export default NewTutors;
