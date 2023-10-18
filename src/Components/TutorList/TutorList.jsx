import React from "react";
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
