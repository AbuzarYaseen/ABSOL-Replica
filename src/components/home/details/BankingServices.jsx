import React from "react";
import mainCard from "../../../assets/Home/main-card.png";
import Card2 from "../../../assets/Home/card-2.png";
import Card3 from "../../../assets/Home/card-3.png";
import Card4 from "../../../assets/Home/card-4.png";
import Card5 from "../../../assets/Home/card-5.png";
import Card6 from "../../../assets/Home/card-6.png";
import Card7 from "../../../assets/Home/card-7.png";
const BankingServices = () => {
  const rowStyle = { marginBottom: "20px" };
  const cardStyle = { position: "relative" };
  const headingStyle = {
    position: "absolute",
    left: "50px",
    top: "80%",
    color: "#fff",
    fontSize: "18px",
    opacity: 0.7,
  };
  return (
    <div id="section-1">
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={mainCard} alt="" />
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <a href="billing.html" target="_blank" rel="noopener noreferrer">
              <img src={Card2} alt="card2" />
            </a>
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card3} alt="card3" />
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card4} alt="card4" />
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <a href="mci-link.html" target="_blank" rel="noopener noreferrer">
              <img src={Card5} alt="card5" />
            </a>
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <a href="IPO.html" target="_blank" rel="noopener noreferrer">
              <img src={Card6} alt="card6" />
            </a>
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card7} alt="card7" />
            <h3 style={headingStyle}>Banking</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingServices;
