import React from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("class");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setMenu("find-tutors");
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>{" "}
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("about");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/about">
              About Us
            </Link>{" "}
            {menu === "about" ? <hr /> : <></>}
          </li>
          <li className="dropdown" onClick={toggleDropdown}>
            <span className="dropbtn">Find Tutors</span>
            {menu === "find-tutors" && <hr />}
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/tutors">Tutors</Link>
                <Link to="/subjects">Subjects</Link>
                <Link to="/availability">Availability</Link>
              </div>
            )}
          </li>
          <li
            onClick={() => {
              setMenu("match");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/match">
              Match me with Tutors
            </Link>{" "}
            {menu === "match" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("join");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/join">
              Join Us
            </Link>{" "}
            {menu === "join" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("donate");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/donate">
              Donate
            </Link>{" "}
            {menu === "donate" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("contact");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/contact">
              Contact
            </Link>{" "}
            {menu === "contact" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-login">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
