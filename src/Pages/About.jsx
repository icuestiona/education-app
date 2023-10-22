import React from "react";
import "./CSS/About.css";
import banner from "../Components/Assets/logo.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-banner">
        <img src={banner} alt="" />
      </div>
      <div className="about-title">
        <h1>Learn More About Our Project</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>EnlightNet</strong>, a place where the wisdom and
          experience of one generation meet the curiosity and potential of the
          next. We're dedicated to making a genuine impact in the lives of
          children and teenagers in need. Our digital hub is all about providing
          accessible online classes, guidance, and support to help them flourish
          and seize brighter opportunities ahead..
        </p>
        <p>
          We understand that education is the cornerstone of a bright future,
          and every child deserves the opportunity to thrive. Our committed
          tutors, with a heart for giving back, dedicate their time and
          expertise to make a positive impact on the lives of these incredible
          children and teenagers.
        </p>
        <p>
          At <strong>EnlightNet</strong>, we're unwavering in our commitment to
          offering a healthy and safe environment for children and adolescents.
          We believe in a nurturing, inclusive, and secure space for their
          growth and development.
        </p>
        <p>
          If you would like to expand your information, make any suggestions or
          take part in the program, please do not hesitate to contact us.
        </p>
      </div>
      <div className="about-buttons">
        <a href="/">Home</a>
        <a href="/join">Join Us</a>
      </div>
    </div>
  );
}

export default About;
