import React from "react";
import "./CSS/About.css";
import banner from "../Components/Assets/logo.png";

function About() {
  const values = [
    ["Equity over privilege", "Every child deserves the same quality of support regardless of family income or zip code."],
    ["Community as curriculum", "Tutors aren't just teachers, they're mentors, role models, and proof that people care."],
    ["Radical generosity", "Everything we do is free for families, always. No means-testing, no red tape, no wait list barriers."],
    ["Child safety first", "All volunteers are background-checked, trained, and supervised. Parents can observe at any time."],
    ["Accountability", "We publish our outcomes publicly, track every student's progress, and hold ourselves to high standards."],
    ["Joy in learning", "We design every session to spark curiosity, not just cover content. When kids love learning, results follow."],
  ];
  const leaders = [
    ["SO", "Sandra Okonkwo", "Founder & Executive Director", "Former public school teacher with 18 years in the classroom. Founded EnlightNet after watching too many brilliant students slip through the cracks."],
    ["MR", "Marco Reyes", "Head of Volunteer Programs", "Led volunteer initiatives at three national nonprofits. Designs our tutor training, matching, and recognition systems."],
    ["AL", "Aisha Logan", "Technology Director", "Software engineer turned education-tech advocate. Built EnlightNet's platform from the ground up and keeps it running smoothly."],
    ["DK", "David Kim", "Director of Partnerships", "Brings in school districts, community centers, and corporate partners who help us expand reach and deepen impact."],
    ["NM", "Nora Méndez", "Family Support Coordinator", "First point of contact for every family. Ensures a seamless, warm experience from first sign-up to ongoing learning."],
    ["JT", "James Thornton", "Development & Fundraising", "Manages donor relationships and grant portfolio. Has helped raise over $4M to keep EnlightNet entirely free for families."],
  ];

  return (
    <div className="about-page">
      <div className="about-banner">
        <img src={banner} alt="" />
      </div>
      <div className="about-title">
        <h1>Learn More About Our Project</h1>
      </div>
      <div className="about-content about-intro">
        <p>
         Every year, millions of children fall behind their peers, not because they're less intelligent, but because they lack access to the support that could make all the difference. Private tutoring costs hundreds of dollars a month. For families living paycheck to paycheck, that's simply not an option.</p>
         <p>
          <strong>EnlightNet</strong> eliminates that barrier entirely. Our network of vetted, passionate volunteers — retired teachers, engineers, doctors, college students, give their time freely so every child has a fair shot.
          </p>    
          <p>
          <strong>EnlightNet</strong>, is a place where the wisdom and
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
      </div>
      <section className="values-section">
        <div className="section-heading">
          <p className="eyebrow">What we stand for</p>
          <h2>Our core values</h2>
          <p>The principles that shape every session, partnership, and decision we make.</p>
        </div>
        <div className="values-grid">
          {values.map(([title, description]) => (
            <article className="value-card" key={title}>
              <span className="value-mark" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="leadership-section">
        <div className="section-heading">
          <p className="eyebrow">Our leadership team</p>
          <h2>The team behind EnlightNet</h2>
          <p>The staff and board who run EnlightNet day to day.</p>
        </div>
        <div className="leadership-grid">
          {leaders.map(([initials, name, role, bio]) => (
            <article className="leader-card" key={name}>
              <div className="leader-initials" aria-hidden="true">{initials}</div>
              <div><h3>{name}</h3><p className="leader-role">{role}</p><p>{bio}</p></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
