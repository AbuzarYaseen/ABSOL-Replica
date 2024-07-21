import React from "react";
import Logo from "../../assets/header-logo.png";
import "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header" className="header-one">
        <div className="bg-white">
          <div className="container">
            <div className="logo-area">
              <div className="row align-items-center">
                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                  <a className="d-block" href="index.html">
                    <img
                      src={Logo}
                      alt="Constra"
                      style={{ height: "auto", maxWidth: "300px" }}
                    />
                  </a>
                </div>

                <div className="col-lg-9 header-right d-flex justify-content-end">
                  <div className="top-info-box d-flex" style={{ gap: "50px" }}>
                    <div className="info-box">
                      <div className="info-box-content">
                        <p className="info-box-title">Call Us</p>
                        <p className="info-box-subtitle">
                          <a
                            href="tel:+966508250090"
                            style={{ color: "black" }}
                          >
                            +966 508250090
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-box-content">
                        <p className="info-box-title">Email Us</p>
                        <p className="info-box-subtitle">
                          <a
                            href="mailto:salesksa@ab-sol.net"
                            style={{ color: "black" }}
                          >
                            salesksa@ab-sol.net
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="header-get-a-quote">
                      <a
                        className="btn btn-primary"
                        id="getQuote"
                        href="get-quote.html"
                        target="_blank"
                        style={{
                          backgroundColor: "#911616",
                          color: "#fff",
                          border: "2px solid black",
                        }}
                      >
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                  <div
                    id="navbar-collapse"
                    className="collapse navbar-collapse"
                  >
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          to="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          About Us <i className="fa fa-angle-down"></i>
                        </Link>
                        <ul className="dropdown-menu" role="menu">
                          <h5>
                            <a href="#" target="_blank">
                              Our Story
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Our Partners
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Our Core Values
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Community Impact
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Awards Recognition
                            </a>
                          </h5>
                        </ul>
                      </li>
                      <li className="nav-item dropdown" id="drop-1">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Products <i className="fa fa-angle-down"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          id="dropmenu-1"
                          role="menu"
                        >
                          <h5>
                            <a href="#" target="_blank">
                              Business Management Platform
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Banking and Finance
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Health Care
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Network and Infrastructure
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Product Building
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Platform Engineering
                            </a>
                          </h5>
                          <h5>
                            <a href="https://absol-dms.com/" target="_blank">
                              DMS
                              <br />
                              <span style={{ fontSize: "10px" }}>
                                www.absol-dms.com/
                              </span>
                            </a>
                          </h5>
                          <h5>
                            <a href="https://absol-cms.com/" target="_blank">
                              CMS
                              <br />
                              <span style={{ fontSize: "10px" }}>
                                www.absol-cms.com/
                              </span>
                            </a>
                          </h5>
                          <h5>
                            <a href="https://raptoreye.net/" target="_blank">
                              Raptor Eye
                              <br />
                              <span style={{ fontSize: "10px" }}>
                                www.raptoreye.net/
                              </span>
                            </a>
                          </h5>
                          <h5>
                            <a href="http://visage-erp.com/" target="_blank">
                              Visage
                              <br />
                              <span style={{ fontSize: "10px" }}>
                                www.visage-erp.com/
                              </span>
                            </a>
                          </h5>
                        </ul>
                      </li>
                      <li className="nav-item dropdown" id="drop-2">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Services <i className="fa fa-angle-down"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          id="dropmenu-2"
                          role="menu"
                        >
                          <h5>
                            <a href="#" target="_blank">
                              Cyber Security Platform
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              CCC compliance
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Android and iOS Mobile Application Development
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Digital Transformation
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Web Development
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Software Development
                            </a>
                          </h5>
                          <h5>
                            <a href="#" target="_blank">
                              Quality Assurance and Testing Service
                            </a>
                          </h5>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/who-we-are" className="nav-link">
                          Who We Are
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/careers" className="nav-link">
                          Career
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
