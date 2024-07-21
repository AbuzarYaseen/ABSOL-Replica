import React from "react";
import ProductsDetails from "./ProductsDetails";

const Products = () => {
  const containerStyle = { paddingTop: "50px" };
  const headingStyle = {
    textAlign: "left",
    color: "#911616",
    fontSize: "50px",
    lineHeight: "60px",
  };
  const headingSpanStyle = { color: "black" };
  const hrStyle = {
    borderTop: "6px solid #911616",
    borderRadius: "5px",
    width: "15%",
  };
  const paragraphStyle = {
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "700",
    color: "black",
  };
  const descriptionStyle = { textAlign: "left" };

  return (
    <>
      <div className="row" style={containerStyle}>
        <div className="col-lg-4">
          <p style={paragraphStyle}>PRODUCTS</p>
        </div>

        <div className="col-lg-8">
          <h2 style={headingStyle}>
            <span style={headingSpanStyle}>HARDWARE PRODUCTS</span> SUITE
          </h2>
          <hr className="rounded" style={hrStyle} />
          <p style={descriptionStyle}>
            Bringing up the right talent for your business can be the ultimate
            need of any successful business. If you are looking to outsource
            your staffing requirements, via Absolute Solutions, you can access
            the talent pool you wouldn’t otherwise access. So, by saving your
            time and money, reach the right people who help your business to
            touch new success heights.
          </p>
        </div>
      </div>
      <ProductsDetails />
    </>
  );
};

export default Products;
