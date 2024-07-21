import React from "react";
import "./career.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    status: "Web Designer",
    experience: "",
    details: "",
    fileToUpload: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />
      <section id="home" className="home">
        <h2 style={{ lineHeight: "60px" }}>
          <span style={{ color: "#911616" }}>"</span>
          Dream big, Work hard, Achieve more
          <span style={{ color: "#911616" }}>." </span>
        </h2>
      </section>

      <section id="career-heading" className="career-heading">
        <h1 className="heading" style={{ color: "#911616" }}>
          Career
        </h1>
        <p>Job Opening in IT Company. Apply Now!</p>
      </section>

      <div className="career">
        <div className="career-form">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="career-form-txt"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="Contact number"
              maxLength="10"
              className="career-form-phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="career-form-email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="radio-class">
              <h2 className="name">Apply For Which Post?</h2>
              <label className="radio">
                <input
                  className="radio-one"
                  type="radio"
                  name="status"
                  value="Web Designer"
                  checked={formData.status === "Web Designer"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Web Designer
              </label>
              <label className="radio">
                <input
                  className="radio-two"
                  type="radio"
                  name="status"
                  value="Web Developer"
                  checked={formData.status === "Web Developer"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Web Developer
              </label>
              <label className="radio">
                <input
                  className="radio-three"
                  type="radio"
                  name="status"
                  value="Mobile App Designer"
                  checked={formData.status === "Mobile App Designer"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Mobile App Designer
              </label>
              <label className="radio">
                <input
                  className="radio-four"
                  type="radio"
                  name="status"
                  value="Mobile App Developer"
                  checked={formData.status === "Mobile App Developer"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Mobile App Developer
              </label>
              <label className="radio">
                <input
                  className="radio-five"
                  type="radio"
                  name="status"
                  value="Digital Marketer"
                  checked={formData.status === "Digital Marketer"}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Digital Marketer
              </label>
            </div>

            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              className="career-form-experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <textarea
              name="details"
              placeholder="Other Details"
              className="career-form-txtarea"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>

            <div className="file">
              <h2 className="name">Upload Your Resume</h2>
              <input
                className="upload"
                type="file"
                name="fileToUpload"
                accept=".doc,.docx,.pdf"
                onChange={handleChange}
              />
            </div>

            <input type="submit" value="Submit" className="career-form-btn" />
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Career;
