import React from "react";
import "./CSS/Donate.css";

const Donate = () => {
  return (
    <div className="donate-page">
      <div className="donate-title">
        <h1> Join Us: Become a Changemaker! </h1>
      </div>
      <div className="donate-content">
        <p>
          Welcome to the heart of our cause! Your generosity fuels our mission
          to provide free, top-notch online tutoring and mentorship to children
          in need. We're committed to expanding opportunities and nurturing
          talent, but we can't do it alone.
        </p>
        <p>
          By contributing to our digital platform, you're investing in a
          brighter tomorrow for these children. Your donation directly covers
          the digital infrastructure costs and amplifies our reach, allowing us
          to impact more young lives.
        </p>
        <p>
          Let's build a world where education breaks barriers and empowers
          dreams. Every donation propels us towards this shared vision.
          Together, we can break barriers, unlock potential, and create lasting
          change.
        </p>
        <p>
          Every donation counts and takes us one step closer to a world where
          education knows no bounds. Join hands with us in this noble
          endeavor—click below to make a donation and be a beacon of hope! 💫✨"
        </p>
      </div>
      <div className="donate-buttons">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Donate;