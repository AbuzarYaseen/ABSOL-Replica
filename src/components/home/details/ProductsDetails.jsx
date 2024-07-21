import React from "react";
import Card26 from "../../../assets/Home/card-26.png";
import Card27 from "../../../assets/Home/card-27.png";

const ProductsDetails = () => {
  const sectionStyle = { marginBottom: "20px" };
  const cardWrapperStyle = { position: "relative" };
  const imgStyle = { width: "100%" }; // Adjust width as needed
  const titleStyle = {
    position: "absolute",
    left: "20px",
    top: "65%",
    color: "#fff",
    fontSize: "15px",
  };
  const subtitleStyle = {
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
          <div style={cardWrapperStyle}>
            <img src={Card26} alt="card1" style={imgStyle} />
            <h2 style={titleStyle}>SERVERS</h2>
            <h3 style={subtitleStyle}>HARDWARE</h3>
          </div>
        </div>
        <div className="col-lg-6 card-wrapper">
          <div style={cardWrapperStyle}>
            <img src={Card27} alt="card2" style={imgStyle} />
            <h2 style={titleStyle}>STORAGES</h2>
            <h3 style={subtitleStyle}>HARDWARE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
