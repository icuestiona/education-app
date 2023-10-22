import React from "react";
import "./CSS/JoinUs.css";

const JoinUs = () => {
  return (
    <div className="join-page">
      <div className="join-title">
        <h1> Join Us: Become a Changemaker! </h1>
      </div>
      <div className="join-content">
        <p>
          Are you ready to make a profound impact in the lives of children and
          teenagers in need of academic support? At <strong>EnlightNet</strong>,
          we're on a mission to create brighter futures, and we invite you to be
          a part of this incredible journey.
        </p>
        <p>
          As a volunteer tutor, you have the power to inspire, share your
          expertise, and inspire the next generation. It's an opportunity to
          connect, mentor, and bridge generations, all while shaping promising
          tomorrows.
        </p>
        <p>
          Our platform is committed to providing a nurturing, inclusive, and
          secure environment for children and adolescents. Here, you'll be
          joining a community of like-minded individuals who are dedicated to
          creating a more equal and brighter society
        </p>
        <p>
          At <strong>EnlightNet</strong>, we're unwavering in our commitment to
          offering a healthy and safe environment for children and adolescents.
          We believe in a nurturing, inclusive, and secure space for their
          growth and development.
        </p>
        <p>
          Take the first step toward making a real difference, and join us as a
          volunteer tutor. Together, we'll empower dreams and open doors to new
          possibilities. Your knowledge, experience, and passion can shape the
          future.{" "}
        </p>
        <p>
          Let's create a world where every child's potential is a promise. Click
          below to join our team of Changemakers!"
        </p>
      </div>
      <div className="join-buttons">
        <a href="/">Home</a>
        <a href="https://enlight-net.netlify.app/join">Register</a>
      </div>
    </div>
  );
};
export default JoinUs;
