import React from "react";
import Card17 from "../../../assets/Home/card-17.png";
import Card18 from "../../../assets/Home/card-18.png";
import Card19 from "../../../assets/Home/card-19.png";

const SoftwareSolutionDetail = () => {
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
    top: "75%",
    color: "#fff",
    fontSize: "13px",
    opacity: 0.7,
  };
  return (
    <div id="section-1">
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card17} alt="card1" />
            <h2 style={headingStyle}>SMARTONCO.</h2>
            <h3 style={{ ...subheadingStyle, top: "75%" }}>HEALTH</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card18} alt="card2" />
            <h2 style={headingStyle}>MEDICAL CARE REGISTRIES</h2>
            <h3 style={subheadingStyle}>HEALTH</h3>
          </div>
        </div>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card19} alt="card3" />
            <h2 style={{ ...headingStyle, left: "15px" }}>
              MEDICAL & HEALTH CARE INDUSTRIES SOLUTIONS
            </h2>
            <h3 style={{ ...subheadingStyle, left: "15px" }}>HEALTH</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionDetail;
