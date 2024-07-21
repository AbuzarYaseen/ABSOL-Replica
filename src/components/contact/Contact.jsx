import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState("zeTpx");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const generateCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substr(2, 6).toUpperCase();
    setCaptcha(newCaptcha);
  };

  const validateCaptcha = () => {
    if (captchaInput.toUpperCase() === captcha) {
      setCaptchaValid(true);

      console.log("Form data:", formData);
    } else {
      setCaptchaValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() === captcha) {
      console.log("Form data:", formData);
    } else {
      setCaptchaValid(false);
    }
  };

  return (
    <>
      <Header />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h3 className="section-sub-title">Contact Us</h3>
            </div>
          </div>

          <div className="gap-60"></div>

          <div className="row">
            <div className="col-md-12">
              <form id="contact-form" onSubmit={handleSubmit} role="form">
                <div className="error-container"></div>
                <div className="row">
                  <div className="col-md-4">
                    <div
                      className="form-group"
                      style={{ marginBottom: "1rem" }}
                    >
                      <label style={{ color: "black", fontWeight: 600 }}>
                        Name
                      </label>
                      <input
                        className="form-control form-control-name"
                        name="name"
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="form-group"
                      style={{ marginBottom: "1rem" }}
                    >
                      <label style={{ color: "black", fontWeight: 600 }}>
                        Email
                      </label>
                      <input
                        className="form-control form-control-email"
                        name="email"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="form-group"
                      style={{ marginBottom: "1rem" }}
                    >
                      <label style={{ color: "black", fontWeight: 600 }}>
                        Subject
                      </label>
                      <input
                        className="form-control form-control-subject"
                        name="subject"
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ color: "black", fontWeight: 600 }}>
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-message"
                    name="message"
                    id="message"
                    rows="10"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="captcha-container">
                  <p id="captcha" className="captcha-text">
                    {captcha}
                  </p>
                  <input
                    type="text"
                    id="captcha-input"
                    placeholder="Enter CAPTCHA"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    style={{ backgroundColor: "#911616" }}
                  >
                    Reload
                  </button>
                  <p
                    id="captcha-result"
                    style={{ color: captchaValid ? "green" : "red" }}
                  >
                    {!captchaValid && "Captcha is incorrect"}
                  </p>
                  <button
                    type="button"
                    onClick={validateCaptcha}
                    style={{ backgroundColor: "black", color: "#fff" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* map */}
      <section class="container">
        <div class="d-flex justify-content-between flex-wrap align-items-center">
          <div className="col-md-6" id="mpx">
            <div className="card">
              <div className="map">
                <div class="" id="saudi-arabia" style={{ display: "block" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3622.517516017874!2d46.7695009!3d24.7777267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f010066f3bc99%3A0x9307c2c67a1e0eb4!2z2KfZhNi02LHZg9ipINin2YTYr9mI2YTZitipINmE2YTZhdmI2KfYsdivINin2YTYqNi02LHZitipIEludGVybmF0aW9uYWwgSHVtYW4gUmVzb3VyY2Vz!5e0!3m2!1sen!2s!4v1715173225705!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%", height: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="details">
                <p style={{ fontSize: "26px" }}>Saudi Arabia</p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  +966 508250090
                </p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  salesksa@ab-sol.net
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6" id="mpx">
            <div className="card">
              <div className="map">
                <div class="" id="saudi-arabia" style={{ display: "block" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.42643148923!2d150.78194237551455!3d-34.00726347317398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12edec8826f529%3A0xf90730f7eb253a44!2s6%20Jindalee%20St%2C%20Gledswood%20Hills%20NSW%202557%2C%20Australia!5e0!3m2!1sen!2s!4v1710148636708!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%", height: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="details">
                <p style={{ fontSize: "26px" }}>Australia</p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  +61 448610906
                </p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  salesaus@ab-sol.net
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6" id="mpx">
            <div className="card">
              <div className="map">
                <div class="" id="USA" style={{ display: "block" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.733896546776!2d-81.80211978577888!3d26.20533329649294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db1e15855079d3%3A0x8cce321909795e1d!2s4850%20Tamiami%20Trail%20N%20Suite%20301%2C%20Naples%2C%20FL%2034103%2C%20USA!5e0!3m2!1sen!2s!4v1675102800936!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%", height: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="details">
                <p style={{ fontSize: "26px" }}>USA</p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  +1(470) 233-5507
                </p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  salesusa@ab-sol.net
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6" id="mpx">
            <div className="card">
              <div className="map">
                <div class="" id="Pakistan" style={{ display: "block" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.7702314364738!2d74.39891437540402!3d31.475506174234518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907e69664d737%3A0xd1ae1bb5df2faf5a!2sAbsolute%20Solutions!5e0!3m2!1sen!2s!4v1717398609121!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%", height: "300px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="details">
                <p style={{ fontSize: "26px" }}>Pakistan</p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-phone"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  +92 3228844013
                </p>
                <p>
                  <strong>
                    <i
                      className="fa-solid fa-envelope"
                      style={{ fontSize: "20px", color: "#911616" }}
                    ></i>
                  </strong>{" "}
                  salespk@ab-sol.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* map */}

      <Footer />
    </>
  );
};

export default Contact;
