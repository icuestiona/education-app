import React from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("class");
  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/home">
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
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Find Tutors
            </a>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={() => {
                  setMenu("tutors");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/tutors">
                  Tutors
                </Link>{" "}
                {menu === "tutors" ? <hr /> : <></>}
              </a>
              <a
                href="#"
                onClick={() => {
                  setMenu("subjects");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/subjects">
                  Subjects
                </Link>{" "}
                {menu === "subjects" ? <hr /> : <></>}
              </a>
              <a
                href="#"
                onClick={() => {
                  setMenu("languages");
                }}
              >
                <Link style={{ textDecoration: "none" }} to="/languages">
                  Languages
                </Link>{" "}
                {menu === "languages" ? <hr /> : <></>}
              </a>
            </div>
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
        <Link to="/login">
          <button>Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
