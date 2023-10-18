import React from "react";

const TutorCard = (tutor) => {
  return (
    <div className="tutor-data">
      <img src={tutor.image} alt="" />
      <p>{tutor.name}</p>
      <div className="tutor-info">
        <div className="tutor-subject">€{tutor.subject}</div>
        <div className="tutor-days">€{tutor.availability}</div>
        <div className="tutor-hours">€{tutor.schedule}</div>
      </div>
    </div>
  );
};

export default TutorCard;
