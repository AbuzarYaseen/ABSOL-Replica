import React from "react";
import SAASDetail from "./SAASDetail";

const SAAS = () => {
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
    borderTop: "6px solid #840505",
    borderRadius: "5px",
    color: "#840505",
    width: "15%",
  };
  const pStyle = { textAlign: "left" };
  return (
    <>
      <div className="row" style={rowStyle}>
        <div className="col-lg-4">
          <p style={paragraphStyle}>SOFTWARE AS A SERVICE</p>
        </div>

        <div className="col-lg-8">
          <h2 style={headingStyle}>
            INDUSTRIAL & OTHER <span style={spanStyle}>VERTICAL SOLUTIONS</span>
          </h2>
          <hr className="rounded" style={hrStyle} />
          <p style={pStyle}>
            You don’t always have to rely on commercial software that will push
            you to face costs upfront for installation and maintenance. On the
            other hand, SaaS is increasing Monthly Recurring Revenue (MRR) and
            Customer Lifetime Value (CLV), which lowers the Customer Acquisition
            Cost (CAC).
          </p>
        </div>
      </div>
      <SAASDetail />
    </>
  );
};

export default SAAS;
