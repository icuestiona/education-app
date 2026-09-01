import React from "react";
import "./CSS/JoinUs.css";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <main className="join-page">
      <section className="join-hero">
        <p className="eyebrow">Volunteer with us</p>
        <h1>Join us and help every child thrive.</h1>
      </section>

      <section className="join-content" aria-label="Why join our programme">
        <p>
          At <strong>EnlightNet</strong>, we connect caring volunteers with children
          who need encouragement, structure, and academic support. Your time can
          help close learning gaps and spark confidence.
        </p>
        <p>
          As a tutor, mentor, or student advocate, you can share expertise in the
          subjects your community needs most. We match volunteers with learners
          based on availability, subject fit, and grade level.
        </p>
        <p>
          We care deeply about safety, inclusivity, and clear communication. Every
          session is designed to be respectful, supportive, and measurable so the
          impact is meaningful for everyone.
        </p>
        <p>
          Whether you are a teacher, student, professional, or community member, we
          welcome your support. Together, we are building a stronger future for the
          next generation.
        </p>
      </section>

      <div className="join-buttons" aria-label="Join actions">
        <Link className="primary-action" to="/tutor-register">
          Register as tutor
        </Link>
        <Link className="secondary-action" to="/student-register">
          Register as student
        </Link>
      </div>
    </main>
  );
};

export default JoinUs;


