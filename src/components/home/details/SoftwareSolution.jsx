import React from "react";
import SoftwareSolutionDetail from "./SoftwareSolutionDetail";

const SoftwareSolution = () => {
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
          <p style={paragraphStyle}>SOFTWARE</p>
        </div>
        <div className="col-lg-8">
          <h2 style={headingStyle}>
            <span style={spanStyle}>SOFTWARE SOLUTION</span> FOR HEALTH INDUSTRY
          </h2>
          <hr className="rounded" style={hrStyle} />
          <p style={pStyle}>
            An excellent national growth always requires a robust healthcare
            system because electronic health records provide safer and more
            reliable prescriptions. They also help in legible and complete
            documentation of patient’s medical history, so wouldn’t you like to
            check what <strong>Absolute Solutions</strong> offers you in the
            healthcare industry?
          </p>
        </div>
      </div>
      <SoftwareSolutionDetail />
    </>
  );
};

export default SoftwareSolution;
