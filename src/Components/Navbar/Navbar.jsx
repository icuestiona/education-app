import React from "react";
import logo from "../Assets/logo.png"; // Adjust the path to match your folder structure
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="sticky">
      <div className="left-section">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Find Tutors
            </a>
            <div className="dropdown-content">
              <a href="#">All Tutors</a>
              <a href="#">Subjects</a>
              <a href="#">Languages</a>
            </div>
          </li>
          <li>
            <a href="#">Match me with Tutors</a>
          </li>
          <li>
            <a href="#">Join Us</a>
          </li>
          <li>
            <a href="#">Donate</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <button className="login-section">
        <a href="#">Sign In</a>
      </button>
    </nav>
  );
};

export default Navbar;
