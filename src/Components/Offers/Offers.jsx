import React from "react";
import "./Offers.css";
import image from "../Assets/student-3.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>
          Together We Learn, <br />
          Together We Grow!
        </h1>
        <p>
          Our volunteering tutoring program for children and teens in need
          offers the following key services:{" "}
        </p>
        <p>
          <strong>Academic Tutoring:</strong> Personalized one-on-one support in
          various subjects to enhance learning and boost confidence.{" "}
        </p>{" "}
        <p>
          <strong>Interactive Practice Problems:</strong> Engage in hands-on
          exercises during sessions to reinforce knowledge and problem-solving
          skills.
        </p>{" "}
        <p>
          <strong>Test Preparation:</strong> Comprehensive guidance to excel in
          exams, including study strategies and practice tests.
        </p>{" "}
        <p>
          <strong>Academic Coaching:</strong> Ongoing mentorship to set and
          achieve academic goals, improve study habits, and foster a love for
          learning.
        </p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
