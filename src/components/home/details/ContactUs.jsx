import React from "react";
import { Link } from "react-router-dom";

const ContactUs = ({
  SectionBackgroundColor = "black",
  buttonBackgroundColor = "black",
}) => {
  const sectionStyle = { backgroundColor: SectionBackgroundColor };
  const containerStyle = { padding: "50px" };
  const headingStyle = { color: "white" };
  const buttonStyle = {
    backgroundColor: buttonBackgroundColor,
    border: "2px solid white",
  };

  return (
    <section className="container-xxl" id="hidden-1">
      <div style={sectionStyle}>
        <div
          className="d-flex justify-content-between align-items-center"
          style={containerStyle}
        >
          <h2 style={headingStyle}>WANT TO GET A FREE ASSESSMENT?</h2>
          <div>
            <Link
              to="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="contact-with-us"
              style={buttonStyle}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
