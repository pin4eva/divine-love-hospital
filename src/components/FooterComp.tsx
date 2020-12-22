import React from "react";

const FooterComp: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="content-text">
          <div className="row">
            <div className="col-md-6">
              <div className="cont-logo">
                <a href="#">
                  <div className="heading">
                    <h2 className="text-light">Divine Love</h2>
                  </div>
                </a>
              </div>
              <div className="cont-txt">
                <p className="cont-gap">
                  we are healthcare professionals interested in the provision of
                  quality medical services to our patients.our services
                  includes; General practice clinic,paediatrics,
                  laboratory,General surgery clinic, pharmacy,Anaesthetists.
                </p>

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

                      <p>www.divineloveclinics.com</p>
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
                  Copyright © 2020. All rights reserved by{" "}
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
