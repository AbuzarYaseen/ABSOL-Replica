import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderPic2 from "../../assets/slider-pic-2.jpg";
import sliderPic3 from "../../assets/slider-pic-3.jpg";
import Raptoreye from "../../assets/Raptoreye.png";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import BankingServices from "./details/BankingServices";
import ContactUs from "./details/ContactUs";
import SAAS from "./details/SAAS";
import SoftwareSolution from "./details/SoftwareSolution";
import OutsourcingServices from "./details/OutsourcingServices";
import Products from "./details/Products";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const styles = {
    headingOne: {
      fontSize: "30px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "26px",
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`,
      color: "#840505",
      marginTop: "20px",
    },
    headingTwo: {
      fontSize: "30px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "26px",
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`,
      color: "#840505",
      marginTop: "40px",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: "20px",
    },
  };

  return (
    <>
      <Header />
      <Slider {...settings} className="banner-carousel banner-carousel-1 mb-0">
        <img src={sliderPic2} style={{ height: "500px" }} alt="Slide 1" />
        <img src={sliderPic3} alt="Slide 2" />
      </Slider>

      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                <h3 className="into-sub-title" style={styles.headingOne}>
                  <span style={{ color: "black" }}>Our</span> Business Ethics &
                  Values
                </h3>
                <p>
                  An ethical business is a successful business, so we make sure
                  to place people before our profit. To balance the perfect
                  ratio of ethics with proper business practices, we serve our
                  valuable clients with fairness, integrity, accountability,
                  loyalty, promise-keeping, and trustworthiness. Last but not
                  least, we are known for being law-abiding.
                </p>
              </div>
              <div className="gap-10"></div>
              <div className="ts-intro mt-2">
                <h3 className="into-sub-title" style={styles.headingTwo}>
                  Vision Integrating IT & Minds
                </h3>
                <p>
                  We strive to add value to our customers by taking on the
                  challenge of developing complex, customized solutions to
                  ensure complete process mapping and digital transformation.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div>
                <img src={Raptoreye} alt="E-Invoicing" style={styles.image} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      <section id="facts">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#F9F9F9",
            width: "auto",
            border: "2px solid whitesmoke",
          }}
        >
          <section class="container">
            <div class="facts-wrapper">
              <div className="row">
                <div className="col-lg-4">
                  <p
                    style={{
                      textAlign: "justify",
                      color: "black",
                      fontSize: "20px",
                      fontWeight: 700,
                    }}
                  >
                    Banking Services
                  </p>
                </div>

                <div className="col-lg-8">
                  <h2
                    style={{
                      textAlign: "left",
                      color: "#911616",
                      fontSize: "50px",
                      lineHeight: "60px",
                    }}
                  >
                    BANKING PRODUCTS SUITE
                  </h2>
                  <hr
                    style={{
                      borderTop: "6px solid #840505",
                      borderRadius: "5px",
                      color: "#840505",
                      width: "15%",
                    }}
                  />
                  <p style={{ textAlign: "left" }}>
                    Prospering in banking and finance requires insight into what
                    makes companies successful and what makes them fail.
                    <strong>Absolute Solutions</strong> offers thoughtful
                    solutions for your business to thrive, recognizing that a
                    well-functional system is fundamental to the modern economy.
                  </p>
                </div>
              </div>
              {/* Facts end */}

              <BankingServices />
              <ContactUs
                SectionBackgroundColor="black"
                buttonBackgroundColor="black"
              />
              <SAAS />
              <SoftwareSolution />
              <OutsourcingServices />
              <ContactUs
                SectionBackgroundColor="#911616"
                buttonBackgroundColor="#911616"
              />
              <Products />
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
