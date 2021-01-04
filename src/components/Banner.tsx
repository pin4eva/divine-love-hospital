import React from "react";

const BannerComp: React.FC = () => {
  return (
    <section
      className="banner-area slide carousel"
      data-ride="carousel"
      id="banner"
    >
      <div className=" carousel-inner">
        <div
          className="  carousel-item active"
          data-animation-in="zoomInImage"
          data-bs-interval="10000"
        >
          <div className="container">
            <div className="row full-screen">
              <div className="col-md-6 col-lg-5 banner-l">
                <div className="slide__content cont-1">
                  <div className="banner_text">
                    <h2>Prevent</h2>
                    <h1 className="title">
                      nCovid - 19<span>CoronaVirus</span>
                    </h1>

                    <p>
                      Coronavirus disease (COVID-19) is an infectious disease
                      caused by a newly discovered coronavirus. Most people
                      infected with the COVID-19 virus will experience mild to
                      moderate respiratory illness and recover without requiring
                      special treatment.
                    </p>
                    <div className="btn-bar">
                      <a href="#prevention" className="">
                        How to Prevent?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 d-md-block d-none">
                <div className="slide__img">
                  <img
                    src="images/banner-1.png"
                    alt=""
                    className="img-fluid img-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="  carousel-item"
          data-animation-in="zoomInImage"
          data-bs-interval="10000"
        >
          <div className="container">
            <div className="row full-screen">
              <div className="col-md-6 col-lg-6 banner-l">
                <div className="slide__content cont-2">
                  <div className="banner_text">
                    <h2>Quarantine</h2>
                    <h1 className="title">
                      Stay Home,<span>Stay Safe & Happy</span>
                    </h1>

                    <p>
                      Your safty is our piority. Stay safe, stay at home, wash
                      your hands.
                    </p>
                    <div className="btn-bar">
                      <a href="#" className="">
                        How to Prevent?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-md-block d-none">
                <div className="slide__img">
                  <img
                    src="images/banner-2.png"
                    alt=""
                    className="img-fluid cont-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
