import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TutorContext } from "../Context/TutorContext";
import "./CSS/TutorProfile.css";

const TutorProfile = () => {
  const { tutorId } = useParams();
  const { all_tutors } = useContext(TutorContext);
  const tutor = all_tutors.find((item) => String(item.id) === tutorId) || all_tutors[0];
  const [bookedSlot, setBookedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState(17);
  const slots = ["Today, 4:00 PM", "Tomorrow, 5:30 PM", "Saturday, 10:00 AM"];
  const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);

  return <main className="profile-page"><Link className="back-link" to="/tutors">&#8592; Back to tutors</Link><div className="profile-layout"><section className="profile-main"><div className="profile-intro"><img src={tutor.image} alt={tutor.name} /><div><p className="eyebrow">Volunteer tutor</p><h1>{tutor.name}</h1><p className="profile-subject">{tutor.subject.trim()} specialist · {tutor.availability} mornings</p><p className="profile-about">I love helping students turn tricky ideas into small, clear steps. Our sessions are relaxed, practical, and shaped around the way you learn.</p></div></div><div className="profile-section"><h2>Subjects & levels</h2><div className="tag-list"><span>{tutor.subject.trim()}</span><span>Primary school</span><span>Middle school</span></div></div><div className="profile-section"><h2>What students and families say</h2><blockquote>“Patient, encouraging, and incredibly clear. My daughter finished every session feeling proud of herself.”<cite>Maria R. · parent</cite></blockquote></div></section><aside className="booking-panel"><div className="calendar"><div className="calendar-header"><button type="button" aria-label="Previous month">&#8249;</button><strong>April 2024</strong><button type="button" aria-label="Next month">&#8250;</button></div><div className="calendar-weekdays">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div><div className="calendar-days">{calendarDays.map((day) => <button className={selectedDate === day ? "selected" : ""} type="button" key={day} onClick={() => { setSelectedDate(day); setBookedSlot(""); }}>{day}</button>)}</div><p className="calendar-note">Showing availability for April {selectedDate}, 2024</p></div><p className="eyebrow">Book your first session</p><h2>Meet {tutor.name.split(" ")[0]} for free</h2><p>Choose a time that works for you. No payment details needed.</p><div className="slot-list">{slots.map((slot) => <button className={bookedSlot === slot ? "selected" : ""} key={slot} onClick={() => setBookedSlot(slot)} type="button"><span>{slot}</span><b>{bookedSlot === slot ? "Selected" : "Available"}</b></button>)}</div>{bookedSlot && <p className="booking-confirmation" role="status">Your free session is reserved for April {selectedDate}, 2024 at {bookedSlot}.</p>}<button className="book-button" type="button" onClick={() => setBookedSlot(bookedSlot || slots[0])}>Book a free session</button></aside></div></main>;
};

export default TutorProfile;
