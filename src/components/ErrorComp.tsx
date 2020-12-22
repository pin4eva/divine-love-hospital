import React, { Fragment } from "react";
import ApointmentModalComp from "./ApointmentModalComp";
import HeaderComp from "./HeaderComp";

const ErrorComp = () => {
  return (
    <Fragment>
      <div data-spy="scroll" data-target="#nav-part" data-offset="90">
        <a href="#" id="back-top-btn">
          <i className="fas fa-angle-double-up"></i>
        </a>
      </div>
      <ApointmentModalComp />
      <HeaderComp />

      {/* <section id="breadcrun" className="breadcrun-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="bread-inner">
                <h1 className="heading-font">Error page</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">
                      <p>Home</p>
                    </a>
                  </li>
                  <li>
                    <i className="fas fa-angle-right"></i>
                  </li>
                  <li>
                    <p>Error page</p>
                  </li>
                </ul>
                <div className="clr"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="error" className="error section">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 offset-lg-3 col-md-4 col-4 padding-zero">
              <div className="error-txt">
                <h3>4</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4 ">
              <div className="heart">
                <img
                  src="images/heart-beat.png"
                  alt="heart beat"
                  className="heart-beat"
                />
              </div>
            </div>
            <div className="col-lg-1 col-md-4 col-4 padding-zero">
              <div className="error-txt">
                <h3>4</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="error-btm">
                <h5>oho!</h5>
                <p>
                  We are currently undergoing maintainance, we will be back soon
                </p>
                {/* <div className="btn-bar text-center">
                  <a href="index-medical.html" className="">
                    Go Back to Home
                  </a>
                </div> */}
                <div className="btn-bar text-center">
                  <a
                    href="#"
                    className=""
                    data-toggle="modal"
                    data-target="#exampleModal0"
                  >
                    Get Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ErrorComp;
