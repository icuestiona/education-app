import React, { useState } from "react";
import "./CSS/LoginSignUp.css";
import user_icon from "../Components/Assets/person.png";
import email_icon from "../Components/Assets/email-50.png";
import password_icon from "../Components/Assets/password-50.png";
import { api } from "../Services/Api";
import { useNavigate } from "react-router-dom";

export const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setStatus({ type: "error", message: "Please fill in your email and password." });
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("enlightnet-user", JSON.stringify(response.user));
      localStorage.setItem("enlightnet-token", response.token);
      setStatus({ type: "success", message: `Welcome back, ${response.user.name}.` });
      navigate("/dashboard");
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Login failed." });
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-aside">
        <p className="eyebrow">Your learning space</p>
        <h1>Keep growing, one session at a time.</h1>
        <p>Sign in to pick up where you left off, meet your tutor, and see your progress.</p>
      </div>
      <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>{" "}
        </div>
      )}

      <div className="submit-container">
        <button
          type="button"
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </button>
        <button
          type="button"
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>

      {status.message && (
        <p className={`form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </p>
      )}

      <button type="button" className="submit" onClick={handleSubmit}>
        {action === "Login" ? "Continue" : "Create account"}
      </button>

      <div className="logingsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, I agree to the terms of use & privacy policy </p>
      </div>
      </div>
    </main>
  );
};
export default LoginSignUp;
