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

const gradeRanges = [
  "1-2 grades",
  "3-4 grades",
  "5-6 grades",
  "7-8 grades",
  "9-10 grades",
  "11-12 grades",
];

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade: "",
    primaryNeed: "",
    subjects: [],
    availability: {},
    notes: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelectChange = (event, field) => {
    const { value, checked } = event.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updated };
    });
  };

  const handleAvailabilityChange = (day, time) => {
    setFormData((prev) => {
      const dayAvailability = prev.availability[day] || [];
      const hasTime = dayAvailability.includes(time);
      const updatedTimes = hasTime
        ? dayAvailability.filter((entry) => entry !== time)
        : [...dayAvailability, time];

      return {
        ...prev,
        availability: { ...prev.availability, [day]: updatedTimes },
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.grade) {
      setStatus({ type: "error", message: "Please fill in your name, email, and grade level." });
      return;
    }

    if (formData.subjects.length === 0) {
      setStatus({ type: "error", message: "Please select at least one subject needed." });
      return;
    }

    if (Object.keys(formData.availability).length === 0) {
      setStatus({ type: "error", message: "Please select at least one availability slot." });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Submitting student profile..." });
      const payload = {
        ...formData,
        primaryNeed: formData.primaryNeed || formData.subjects[0],
      };

      const response = await api.post("/students/register", payload);
      setStatus({ type: "success", message: response.message || "Student profile registered successfully." });
      setFormData({
        name: "",
        email: "",
        grade: "",
        primaryNeed: "",
        subjects: [],
        availability: {},
        notes: "",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to submit student profile." });
    }
  };

  return (
    <form className="tutor-form" onSubmit={handleSubmit} noValidate>
      <h2>Student Registration</h2>

      <div className="form-group">
        <label htmlFor="studentName">Full Name *</label>
        <input
          id="studentName"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentEmail">Email *</label>
        <input
          id="studentEmail"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="student@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="studentGrade">Grade level *</label>
        <select name="grade" id="studentGrade" value={formData.grade} onChange={handleChange}>
          <option value="">Select grade</option>
          {gradeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="primaryNeed">Primary learning need</label>
        <input
          id="primaryNeed"
          name="primaryNeed"
          type="text"
          value={formData.primaryNeed}
          onChange={handleChange}
          placeholder="For example: Math or Reading"
        />
      </div>

      <fieldset className="form-group">
        <legend>Subjects needed *</legend>
        {subjects.map((subject) => (
          <label key={subject} className="checkbox-label">
            <input
              type="checkbox"
              name="subjects"
              value={subject}
              checked={formData.subjects.includes(subject)}
              onChange={(event) => handleMultiSelectChange(event, "subjects")}
            />
            {subject}
          </label>
        ))}
      </fieldset>

      <fieldset className="form-group">
        <legend>Availability *</legend>
        {daysOfWeek.map((day) => (
          <div key={day} className="availability-row">
            <strong>{day}:</strong>
            <label>
              <input
                type="checkbox"
                checked={formData.availability[day]?.includes("morning") || false}
                onChange={() => handleAvailabilityChange(day, "morning")}
              />
              Morning
            </label>
            <label>
              <input
                type="checkbox"
                checked={formData.availability[day]?.includes("afternoon") || false}
                onChange={() => handleAvailabilityChange(day, "afternoon")}
              />
              Afternoon
            </label>
          </div>
        ))}
      </fieldset>

      <div className="form-group">
        <label htmlFor="studentNotes">Additional notes</label>
        <textarea
          id="studentNotes"
          name="notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tell us what support you need most."
        />
      </div>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      )}

      <button type="submit" className="btn-submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Submitting..." : "Register student"}
      </button>
    </form>
  );
};

export default StudentRegistrationForm;
