import React from "react";
import "./Styles/Contact.css";
import Footer from "../assets/Footer";
export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">Contact Me!</div>
      <div className="contact-content">
        <p className="contact-text">I am available for work.</p>
        <p className="contact-text">Drop me a line if you fancy a chat.</p>
      </div>
      <br />
      <br />
      <div className="email">
        <a
          className="contact-email"
          href={`mailto:ankitdhoot.70@gmail.com?Subject=Hello`}
        >
          ankitdhoot.70@gmail.com
        </a>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};
