import React from "react";
import "./CSS/Donate.css";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <main className="donate-page">
      <section className="donate-hero">
        <p className="eyebrow">Support free education</p>
        <h1>Every click lights the path of learning</h1>
        <p className="donate-lead">Your gift gives a child the tools, time, and trusted support to keep learning.</p>
        <Link className="donate-button" to="/donate-now">Donate now</Link>
      </section>
      <section className="donate-content">
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
        <div className="donate-impact">
          <strong>100%</strong>
          <span>of your donation supports the learning experience</span>
        </div>
      </section>
    </main>
  );
};

export default Donate;
