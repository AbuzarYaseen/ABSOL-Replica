import React from "react";
import footerLogo from "../../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youtube from "../../assets/youtube.svg";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import linkedIn from "../../assets/linkedIn.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">About Us</h3>

              <img
                loading="lazy"
                width="200px"
                className="footer-logo"
                src={footerLogo}
                alt="footer-logo"
              />
              <p style={{ fontSize: "16px", color: "#fff" }}>
                We add value to our customers by developing complex, customized
                solutions for complete process mapping and digital
                transformation.
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/ABSOLGlobal"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <img src={fb} style={{ width: "15px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCfBVlcZpC0ytNFFcB8r6WUQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <img src={youtube} style={{ width: "30px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/absolutesolutions.official/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <img src={insta} style={{ width: "25px" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/absolue-solutions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <img src={linkedIn} style={{ width: "25px" }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Offices</h3>
              <div className="working-hours">
                <h2 style={{ color: "white", fontSize: "20px" }}>
                  SAUDI ARABIA
                </h2>
                <p style={{ color: "white", fontSize: "14px" }}>
                  Riyadh, Headquarters King Abdullah Road-
                  <br />
                  Exit 10 P.O.Box 7021 Code 12482, Saudi Arabia.
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Email: salesksa@ab-sol.net
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Contact: +966 508250090
                </p>
              </div>
              <div className="working-hours">
                <h2 style={{ color: "white", fontSize: "20px" }}>AUSTRALIA</h2>
                <p style={{ color: "white", fontSize: "14px" }}>
                  6 Jindalee Street Gledswood Hills NSW 2557 Sydney, Australia
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Email: salesaus@ab-sol.net
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Contact: +61 448610906
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <div className="working-hours">
                <h2 style={{ color: "white", fontSize: "20px" }}>USA</h2>
                <p style={{ color: "white", fontSize: "14px" }}>
                  4850 TAMIAMI TRAIL NORTH SUITE 301, NAPLES FL 34103
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Email: salesusa@ab-sol.net
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Contact: +1(470) 233-5507
                </p>
              </div>
              <div className="working-hours">
                <h2 style={{ color: "white", fontSize: "20px" }}>PAKISTAN</h2>
                <p style={{ color: "white", fontSize: "14px" }}>
                  Absolute Solutions (Offshore Development Center) 902 B, Haly
                  Tower, Block R, DHA, Lahore, Pakistan
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Email: salespk@ab-sol.net
                </p>
                <p style={{ color: "white", fontSize: "18px" }}>
                  Contact: +92 3228844013
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
