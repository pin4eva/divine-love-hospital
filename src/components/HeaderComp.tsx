import React from "react";

const HeaderComp: React.FC = () => {
  return (
    <header>
      <nav
        id="nav-part"
        className="navbar header-nav sticky-top navbar-expand-md"
      >
        <div className="container p-0">
          <a className="navbar-brand" href="#">
            <h2 className="text-uppercase font-weight-bolder">Divine Love</h2>
            {/* <img src="images/logo.png" className="img-fluid" alt="logo" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#banner">
                  Home<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Corona{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#symptoms">
                  Symptoms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prevention">
                  Prevention
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#doctors">
                  Doctors
                </a>
              </li>
            </ul>
            {/* <div className="btn-bar">
                        <a href="#" className="" data-toggle="modal" data-target="#exampleModal5">Check Status</a>
                    </div> */}
            <div className="btn-bar">
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
      </nav>
    </header>
  );
};

export default HeaderComp;
