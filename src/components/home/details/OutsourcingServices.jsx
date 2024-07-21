import React from "react";
import OutsourcingServicesDetail from "./OutsourcingServicesDetail";

const OutsourcingServices = () => {
  const rowStyle = { paddingTop: "50px" };
  const paragraphStyle = {
    textAlign: "justify",
    color: "black",
    fontSize: "20px",
    fontWeight: 700,
  };
  const headingStyle = {
    textAlign: "left",
    color: "#911616",
    fontSize: "50px",
    lineHeight: "60px",
  };
  const spanStyle = { color: "black" };
  const hrStyle = {
    borderTop: "6px solid #911616",
    borderRadius: "5px",
    width: "15%",
  };
  const pStyle = { textAlign: "left" };
  return (
    <>
      <div className="row" style={rowStyle}>
        <div className="col-lg-4">
          <p style={paragraphStyle}>OUTSOURCING SERVICES</p>
        </div>

        <div className="col-lg-8">
          <h2 style={headingStyle}>
            ABSOL STAFFING <span style={spanStyle}>AND OUTSOURCING</span>
          </h2>
          <hr className="rounded" style={hrStyle} />
          <p style={pStyle}>
            Bringing up the right talent for your business can be the ultimate
            need of any successful business. If you are looking to outsource
            your staffing requirements, via Absolute Solutions, you can access
            the talent pool you wouldn’t otherwise access. So, by saving your
            time and money, reach the right people who help your business to
            touch new success heights.
          </p>
        </div>
      </div>
      <OutsourcingServicesDetail />
    </>
  );
};

export default OutsourcingServices;
