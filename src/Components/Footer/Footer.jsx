import React from "react";
import "./Footer.css";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>Helping Hands, Brighter Minds</p>
      </div>
      <ul className="footer-links">
        <li>Program</li>
        <li>About</li>
        <li>Services</li>
        <li>Tutors</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/sorayacarvajal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soraya Carvajal
          </a>{" "}
          and open-sourced on {""}
          <a
            href="https://github.com/icuestiona/education-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          - Copyright @2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
