import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { TutorContext } from "../Context/TutorContext";
import "./CSS/MatchMe.css";

const MatchMePage = () => {
  const { all_tutors } = useContext(TutorContext);
  const [answers, setAnswers] = useState({ subject: "", age: "", availability: "" });
  const [submitted, setSubmitted] = useState(false);
  const subjects = [...new Set(all_tutors.map((tutor) => tutor.subject.trim()))];
  const recommendations = useMemo(() => all_tutors.filter((tutor) => !answers.subject || tutor.subject.trim() === answers.subject).slice(0, 3), [all_tutors, answers.subject]);
  const choose = (key, value) => { setAnswers((current) => ({ ...current, [key]: value })); setSubmitted(false); };

  return <main className="match-page"><section className="match-hero"><p className="eyebrow">A little help goes a long way</p><h1>Find the perfect tutor for your child in 60 seconds</h1><p>Answer three quick questions and we will point you toward a great place to start.</p></section><section className="match-form"><div className="match-progress"><span className="active">1</span><i /><span className={answers.age ? "active" : ""}>2</span><i /><span className={answers.availability ? "active" : ""}>3</span></div><fieldset><legend>What subject does your child need help with?</legend><div className="choice-grid">{subjects.map((subject) => <button className={answers.subject === subject ? "choice selected" : "choice"} type="button" key={subject} onClick={() => choose("subject", subject)}>{subject}</button>)}</div></fieldset><fieldset><legend>How old is your child?</legend><div className="choice-grid compact">{["6-8 years", "9-11 years", "12-14 years", "15-18 years"].map((age) => <button className={answers.age === age ? "choice selected" : "choice"} type="button" key={age} onClick={() => choose("age", age)}>{age}</button>)}</div></fieldset><fieldset><legend>When is your child available?</legend><div className="choice-grid compact">{["Weekday mornings", "Weekday afternoons", "Weekday evenings", "Weekends"].map((time) => <button className={answers.availability === time ? "choice selected" : "choice"} type="button" key={time} onClick={() => choose("availability", time)}>{time}</button>)}</div></fieldset><button className="match-submit" type="button" onClick={() => setSubmitted(true)}>Show my matches <span>→</span></button>{submitted && <section className="match-results" aria-live="polite"><p className="eyebrow">Your starting points</p><h2>Here are tutors to explore</h2><div>{recommendations.map((tutor) => <Link to={`/tutor/${tutor.id}`} key={tutor.id}><img src={tutor.image} alt="" /><strong>{tutor.name}</strong><span>{tutor.subject.trim()}</span></Link>)}</div></section>}</section><section className="match-options"><div><p className="eyebrow">Prefer to browse?</p><h2>Other options</h2><Link to="/subjects">Browse by subject →</Link></div><div><p className="eyebrow">Need help now?</p><h2>Tutors available right now</h2><Link to="/availability?availability=Weekday">See available tutors →</Link></div></section></main>;
};

export default MatchMePage;
