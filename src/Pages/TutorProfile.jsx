import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TutorContext } from "../Context/TutorContext";
import "./CSS/TutorProfile.css";

const TutorProfile = () => {
  const { tutorId } = useParams();
  const { all_tutors } = useContext(TutorContext);
  const tutor = all_tutors.find((item) => String(item.id) === tutorId) || all_tutors[0];
  const [bookedSlot, setBookedSlot] = useState("");
  const slots = ["Today, 4:00 PM", "Tomorrow, 5:30 PM", "Saturday, 10:00 AM"];

  return <main className="profile-page"><Link className="back-link" to="/tutors">&#8592; Back to tutors</Link><div className="profile-layout"><section className="profile-main"><div className="profile-intro"><img src={tutor.image} alt={tutor.name} /><div><p className="eyebrow">Volunteer tutor</p><h1>{tutor.name}</h1><p className="profile-subject">{tutor.subject.trim()} specialist · {tutor.availability} mornings</p><p className="profile-about">I love helping students turn tricky ideas into small, clear steps. Our sessions are relaxed, practical, and shaped around the way you learn.</p></div></div><div className="profile-section"><h2>Subjects & levels</h2><div className="tag-list"><span>{tutor.subject.trim()}</span><span>Primary school</span><span>Middle school</span></div></div><div className="profile-section"><h2>What students and families say</h2><blockquote>“Patient, encouraging, and incredibly clear. My daughter finished every session feeling proud of herself.”<cite>Maria R. · parent</cite></blockquote></div></section><aside className="booking-panel"><p className="eyebrow">Book your first session</p><h2>Meet {tutor.name.split(" ")[0]} for free</h2><p>Choose a time that works for you. No payment details needed.</p><div className="slot-list">{slots.map((slot) => <button className={bookedSlot === slot ? "selected" : ""} key={slot} onClick={() => setBookedSlot(slot)} type="button"><span>{slot}</span><b>{bookedSlot === slot ? "Selected" : "Available"}</b></button>)}</div>{bookedSlot && <p className="booking-confirmation" role="status">Your free session is reserved for {bookedSlot}.</p>}<button className="book-button" type="button" onClick={() => setBookedSlot(bookedSlot || slots[0])}>Book a free session</button></aside></div></main>;
};

export default TutorProfile;
