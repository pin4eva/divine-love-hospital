import React from "react";
import LogoComp from "./LogoComp";

const FooterComp: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="content-text">
          <div className="row">
            <div className="col-md-6">
              <div className="cont-logo">
                <a href="#" className="d-flex">
                  <LogoComp />
                  <div className="heading ml-2">
                    <h2 className="text-light">
                      Divine Love Medical <br /> Clinic & Maternity{" "}
                    </h2>
                  </div>
                </a>
              </div>
              <div className="cont-txt">
                <div className="cont-gap text-light">
                  We are healthcare professionals interested in the provision of
                  quality medical services to our patients.
                </div>

                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="cont-center">
                <h3>Contact us</h3>
              </div>
              <div className="c-text-location">
                <div className="row">
                  <div className="col-lg-3  col-md-3">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-map-marker-alt"></i>
                        </a>
                      </li>
                      <li className="mx-md-0 mx-2">
                        <a href="#">
                          <i className="fas fa-phone"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-globe-americas"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-9  col-md-9">
                    <div className="address">
                      <p>146 Okporo road Rumuodara Port Harcourt</p>

                      <p>
                        +234 8033137724
                        <br />
                        +234 7061201748
                      </p>

                      <p>info@divineloveclinics.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>
                  Copyright © {new Date().getFullYear()}. Divine Love Medicals
                  <a href="#">Designer</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComp;
