import React, { useContext } from "react";
import "./CSS/TutorList.css";
import { TutorContext } from "../Context/TutorContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

import TutorCard from "./TutorCard";

const TutorList = ({ tutors }) => {
  return (
    <div>
      {tutors.map((tutor) => (
        <TutorCard
          key={tutor.id}
          name={tutor.name}
          subject={tutor.subject}
          availability={tutor.availability}
          schedule={tutor.schedule}
          image={tutor.image}
        />
      ))}
    </div>
  );
};

export default TutorList;
