import React from "react";
import { Link } from "react-router-dom";
import "./CSS/StudentDashboard.css";

const sessions = [
  { day: "Today", time: "4:00 PM", subject: "Mathematics", tutor: "Oscar Simmons", type: "Next session" },
  { day: "Thu, 18 Apr", time: "5:30 PM", subject: "English", tutor: "Carla Wilson", type: "Upcoming" },
];

const subjects = [
  { name: "Mathematics", progress: 72, color: "coral" },
  { name: "English", progress: 54, color: "blue" },
  { name: "Biology", progress: 38, color: "gold" },
];

const StudentDashboard = () => (
  <main className="student-dashboard">
    <section className="student-welcome">
      <div><p className="eyebrow">Student dashboard</p><h1>Welcome back, Alex.</h1><p>Here is a quick look at your learning journey.</p></div>
      <Link className="dashboard-cta" to="/match">Find a tutor <span>+</span></Link>
    </section>
    <section className="stat-grid" aria-label="Learning overview">
      <article><span className="stat-icon coral">&#10003;</span><strong>12</strong><p>Sessions completed</p></article>
      <article><span className="stat-icon blue">&#9733;</span><strong>3</strong><p>Active tutors</p></article>
      <article><span className="stat-icon gold">&#9201;</span><strong>18h 40m</strong><p>Total learning time</p></article>
    </section>
    <div className="dashboard-columns">
      <div className="dashboard-main">
        <section className="dashboard-section"><div className="section-heading"><div><p className="eyebrow">Keep going</p><h2>My progress by subject</h2></div><Link to="/tutors">View tutors</Link></div>{subjects.map((subject) => <div className="progress-row" key={subject.name}><div><strong>{subject.name}</strong><span>{subject.progress}% complete</span></div><div className="progress-track"><span className={subject.color} style={{ width: `${subject.progress}%` }} /></div></div>)}</section>
        <section className="dashboard-section"><div className="section-heading"><div><p className="eyebrow">Your activity</p><h2>Recent sessions</h2></div><Link to="/sessions">See all</Link></div><div className="activity-list"><div><span className="activity-dot coral" /><p><strong>Algebra foundations</strong><small>With Oscar Simmons · Yesterday</small></p><b>Completed</b></div><div><span className="activity-dot blue" /><p><strong>Reading comprehension</strong><small>With Carla Wilson · 12 Apr</small></p><b>Completed</b></div></div></section>
      </div>
      <aside className="upcoming-panel"><p className="eyebrow">On your calendar</p><h2>Upcoming sessions</h2>{sessions.map((session) => <div className="upcoming-session" key={session.time}><div className="date-block"><strong>{session.day}</strong><span>{session.time}</span></div><p><strong>{session.subject}</strong><span>{session.tutor}</span></p></div>)}<Link className="outline-cta" to="/tutors">Book another session</Link></aside>
    </div>
  </main>
);

export default StudentDashboard;
