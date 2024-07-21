import React from "react";
import Card14 from "../../../assets/Home/card-14.png";
import Card15 from "../../../assets/Home/card-15.png";
import Card16 from "../../../assets/Home/card-16.png";

const SAASDetail = () => {
  const rowStyle = { marginBottom: "20px" };
  const cardStyle = { position: "relative" };
  const headingStyle = {
    position: "absolute",
    left: "20px",
    top: "65%",
    color: "#fff",
    fontSize: "15px",
    textAlign: "start",
  };
  const subheadingStyle = {
    position: "absolute",
    left: "20px",
    top: "80%",
    color: "#fff",
    fontSize: "13px",
    opacity: 0.7,
  };
  return (
    <div id="section-1">
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card14} alt="card1" />
            <h2 style={headingStyle}>
              INVENTORY CONTROL & MANAGEMENT SOLUTIONS
            </h2>
            <h3 style={subheadingStyle}>SAAS</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card15} alt="card2" />
            <a
              href="https://raptoreye.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 style={headingStyle}>RAPTOR EYE SOLUTION</h2>
            </a>
            <h3 style={subheadingStyle}>SAAS</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card16} alt="card3" />
            <a
              href="https://absol-dms.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 style={headingStyle}>DOCUMENT MANAGEMENT SOLUTION</h2>
            </a>
            <h3 style={subheadingStyle}>SAAS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAASDetail;
