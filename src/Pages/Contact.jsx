import React from "react";
import "./CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-title">
        <h1> Get in Touch: Let's Connect! </h1>
      </div>
      <div className="contact-content">
        <p>
          Whether you're eager to register as a tutor, seeking more information
          about our mission, or simply want to say hello, we're here to connect
          and support you.
        </p>
        <p>
          📧 Email us at <strong>hello@enlightnet.com</strong> to get in touch
          with our team. We're always ready to answer your questions, provide
          information, and guide you through the process of becoming a
          Changemaker.
        </p>
        <p>
          Stay updated and engaged with our community by following us on social
          media:
          <p>📷 Instagram: @enlightnet</p>
          <p> 🐦 X-Twitter: @enlightnet</p>
        </p>
        <p>
          Join us on this inspiring journey, and let's create a brighter future
          together. We look forward to hearing from you!"
        </p>
      </div>
      <div className="contact-buttons">
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Contact;
