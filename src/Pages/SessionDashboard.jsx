import React, { useEffect, useState } from "react";
import './CSS/SessionDashboard.css';
import { api } from "../Services/Api";
import { Link } from "react-router-dom";

const SessionDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSessions = async () => {
      try {
        const response = await api.get("/sessions");
        setSessions(response);
      } catch (err) {
        setError(err.message || "Unable to load sessions.");
      } finally {
        setLoading(false);
      }
    };

    loadSessions();
  }, []);

  const getStatusBadge = (status) => {
    const statusMap = {
      scheduled: { class: "badge-scheduled", label: "Scheduled" },
      completed: { class: "badge-completed", label: "Completed" },
      cancelled: { class: "badge-cancelled", label: "Cancelled" },
      in_progress: { class: "badge-in-progress", label: "In Progress" },
    };
    return statusMap[status] || { class: "badge-default", label: status };
  };

  return (
    <main className="session-dashboard">
      <section className="page-header">
        <p className="eyebrow">Session tracking</p>
        <h1>Volunteer Progress Dashboard</h1>
        <p className="header-description">Manage and track all tutoring sessions in one place</p>
      </section>

      {error && <div className="status-card error">{error}</div>}

      <div className="session-actions">
        <Link to="/video-call" className="action-btn primary">
          <span>+</span> Start Video Call
        </Link>
      </div>

      {loading ? (
        <div className="status-card loading">Loading sessions...</div>
      ) : sessions.length === 0 ? (
        <div className="status-card empty">
          <p>No sessions scheduled yet.</p>
          <p className="empty-hint">Sessions will appear here once they are created.</p>
        </div>
      ) : (
        <section className="sessions-grid">
          {sessions.map((session) => (
            <article key={session.id} className="session-card">
              <div className="session-card-header">
                <h2>{session.topic}</h2>
                <span className={`badge ${getStatusBadge(session.status).class}`}>
                  {getStatusBadge(session.status).label}
                </span>
              </div>
              
              <div className="session-info">
                <div className="info-item">
                  <span className="info-label">Scheduled</span>
                  <p className="info-value">{new Date(session.scheduledFor).toLocaleString()}</p>
                </div>
                <div className="info-item">
                  <span className="info-label">Student</span>
                  <p className="info-value">{session.studentId}</p>
                </div>
                <div className="info-item">
                  <span className="info-label">Tutor</span>
                  <p className="info-value">{session.tutorId}</p>
                </div>
              </div>

              {session.notes && (
                <div className="session-notes">
                  <p className="notes-label">Notes</p>
                  <p className="notes-text">{session.notes}</p>
                </div>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default SessionDashboard;
