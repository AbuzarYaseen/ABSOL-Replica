import React from "react";
import Card20 from "../../../assets/Home/card-20.png";
import Card21 from "../../../assets/Home/card-21.png";
import Card22 from "../../../assets/Home/card-22.png";
import Card23 from "../../../assets/Home/card-23.png";
import Card24 from "../../../assets/Home/card-24.png";
import Card25 from "../../../assets/Home/card-25.png";

const OutsourcingServicesDetail = () => {
  const sectionStyle = { marginBottom: "20px" };
  const cardStyle = { position: "relative" };
  const imgStyle = { width: "100%" };
  const h2Style = {
    position: "absolute",
    left: "20px",
    top: "65%",
    color: "#fff",
    fontSize: "15px",
    textAlign: "start",
  };
  const h3Style = {
    position: "absolute",
    left: "20px",
    top: "80%",
    color: "#fff",
    fontSize: "13px",
    opacity: 0.7,
  };
  return (
    <div id="section-1">
      <div className="row" style={sectionStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card20} alt="card1" style={imgStyle} />
            <h2 style={h2Style}>
              ARTIFICIAL INTELLIGENCE DEVELOPMENT & OUTSOURCING SERVICES
            </h2>
            <h3 style={h3Style}>OUTSOURCING</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card21} alt="card2" style={imgStyle} />
            <h2 style={h2Style}>
              IBM SPHERE + MESSAGE BROKERS STAFFING & OUTSOURCING
            </h2>
            <h3 style={h3Style}>OUTSOURCING</h3>
          </div>
        </div>
      </div>
      <div className="row" style={sectionStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card22} alt="card3" style={imgStyle} />
            <h2 style={h2Style}>BUSINESS APPLICATION DEVELOPMENT</h2>
            <h3 style={h3Style}>OUTSOURCING</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card23} alt="card4" style={imgStyle} />
            <h2 style={h2Style}>HEALTH CARE SERVICES & OUTSOURCING</h2>
            <h3 style={h3Style}>OUTSOURCING</h3>
          </div>
        </div>
      </div>
      <div className="row" style={sectionStyle}>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card24} alt="card5" style={imgStyle} />
            <h2 style={h2Style}>
              QUALITY ASSURANCE & TESTING SERVICES & OUTSOURCING
            </h2>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardStyle}>
            <img src={Card25} alt="card6" style={imgStyle} />
            <h2 style={h2Style}>MAXIMO OUTSOURCING</h2>
            <h3 style={h3Style}>OUTSOURCING</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutsourcingServicesDetail;
