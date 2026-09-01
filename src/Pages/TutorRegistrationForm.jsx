import React, { useState } from "react";
import "./CSS/TutorRegistrationForm.css";
import { api } from "../Services/Api";

const subjects = [
  "Math",
  "Science",
  "English",
  "History",
  "Computer Science",
  "Languages",
  "Art",
  "Other",
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ageRanges = [
  "1-2 grades",
  "3-4 grades",
  "5-6 grades",
  "7-8 grades",
  "9-10 grades",
  "11-12 grades",
];

const TutorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subjects: [],
    availability: {}, // e.g., { Monday: ["morning", "afternoon"], ... }
    preferredAgeRanges: [],
    additionalNotes: "",
  });

  // Handle input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle multi-select for subjects and age ranges
  const handleMultiSelectChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedArray = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updatedArray };
    });
  };

  // Handle availability checkboxes
  const handleAvailabilityChange = (day, time) => {
    setFormData((prev) => {
      const dayAvailability = prev.availability[day] || [];
      const hasTime = dayAvailability.includes(time);
      const updatedTimes = hasTime
        ? dayAvailability.filter((t) => t !== time)
        : [...dayAvailability, time];
      return {
        ...prev,
        availability: { ...prev.availability, [day]: updatedTimes },
      };
    });
  };

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setStatus({ type: "error", message: "Please fill in your name and email." });
      return;
    }
    if (formData.subjects.length === 0) {
      setStatus({ type: "error", message: "Please select at least one subject." });
      return;
    }
    if (Object.keys(formData.availability).length === 0) {
      setStatus({ type: "error", message: "Please select your availability." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Submitting your registration..." });
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subjects: formData.subjects,
        availability: formData.availability,
        preferredAgeRanges: formData.preferredAgeRanges,
        additionalNotes: formData.additionalNotes,
      };

      const response = await api.post("/tutors/register", payload);
      setStatus({ type: "success", message: response.message || "Volunteer registration submitted successfully." });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subjects: [],
        availability: {},
        preferredAgeRanges: [],
        additionalNotes: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to submit registration." });
    }
  };

  return (
    <form className="tutor-form" onSubmit={handleSubmit} noValidate>
      <h2>Volunteer Tutor Registration</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Your first name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Your last name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />
      </div>

      <fieldset className="form-group">
        <legend>Subjects you can teach *</legend>
        {subjects.map((subject) => (
          <label key={subject} className="checkbox-label">
            <input
              type="checkbox"
              name="subjects"
              value={subject}
              checked={formData.subjects.includes(subject)}
              onChange={(e) => handleMultiSelectChange(e, "subjects")}
            />
            {subject}
          </label>
        ))}
      </fieldset>

      <fieldset className="form-group">
        <legend>Availability (select days and times) *</legend>
        {daysOfWeek.map((day) => (
          <div key={day} className="availability-row">
            <strong>{day}:</strong>
            <label>
              <input
                type="checkbox"
                checked={
                  formData.availability[day]?.includes("morning") || false
                }
                onChange={() => handleAvailabilityChange(day, "morning")}
              />
              Morning
            </label>
            <label>
              <input
                type="checkbox"
                checked={
                  formData.availability[day]?.includes("afternoon") || false
                }
                onChange={() => handleAvailabilityChange(day, "afternoon")}
              />
              Afternoon
            </label>
          </div>
        ))}
      </fieldset>

      <fieldset className="form-group">
        <legend>Preferred grade level of students</legend>
        {ageRanges.map((range) => (
          <label key={range} className="checkbox-label">
            <input
              type="checkbox"
              name="preferredAgeRanges"
              value={range}
              checked={formData.preferredAgeRanges.includes(range)}
              onChange={(e) => handleMultiSelectChange(e, "preferredAgeRanges")}
            />
            {range}
          </label>
        ))}
      </fieldset>

      <div className="form-group">
        <label htmlFor="additionalNotes">Additional Notes / Experience</label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows="4"
          value={formData.additionalNotes}
          onChange={handleChange}
          placeholder="Tell us about your tutoring experience or anything else you'd like to share"
        />
      </div>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      )}

      <button type="submit" className="btn-submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default TutorRegistrationForm;
