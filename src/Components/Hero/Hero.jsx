import React from "react";
import "./Hero.css";
import student from "../Assets/student.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h2>Volunteer tutors </h2>
          <div>
            <div className="hero-title">
              <h1>
                Unlocking Potential,
                <br />
                Igniting Futures
              </h1>
            </div>
            <div className="hero-presentation">
              <p>
                <strong>EnligthNet</strong> is a hub for transformative learning
                that connects compassionate tutors with eager young learners,
                breaking barriers to education.{" "}
              </p>
              <p>
                We understand that education is the cornerstone of a bright
                future, and every child deserves the opportunity to thrive. Our
                committed tutors, with a heart for giving back, dedicate their
                time and expertise to make a positive impact on the lives of
                these incredible children and teenagers.
              </p>
              <p>
                Together, we spark a love for learning, inspire creativity, and
                pave the way for a brighter tomorrow. Join us in this journey of
                endless possibilities. Let's illuminate minds and make education
                an exhilarating adventure for every child!
              </p>
            </div>
          </div>
          <div className="find-tutors">
            <button>Find your tutor</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={student} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
