import React from 'react'

const BannerComp:React.FC = () => {
    return (
        <section className="banner-area" id="banner">
        <div className="slider">
            <div className=" slide animated" data-animation-in="zoomInImage">
                <div className="container">
                    <div className="row full-screen">
                        <div className="col-md-6 col-lg-5 banner-l">
                            <div className="slide__content cont-1">
                                <div className="banner_text">
                                    <h2>Prevent</h2>
                                    <h1 className="title">nCovid - 19<span>CoronaVirus</span>
                                    </h1>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    </p>
                                    <div className="btn-bar">
                                        <a href="#" className="">How to Prevent?</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 d-md-block d-none">
                            <div className="slide__img">
                                <img src="images/banner-1.png" alt="" className="img-fluid img-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" slide animated" data-animation-in="zoomInImage">

                <div className="container">
                    <div className="row full-screen">
                        <div className="col-md-6 col-lg-6 banner-l">
                            <div className="slide__content cont-2">
                                <div className="banner_text">
                                    <h2>Quarantine</h2>
                                    <h1 className="title">Stay Home,<span>Stay Safe & Happy</span>
                                    </h1>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    </p>
                                    <div className="btn-bar">
                                        <a href="#" className="">How to Prevent?</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 d-md-block d-none">
                            <div className="slide__img">
                                <img src="images/banner-2.png" alt="" className="img-fluid cont-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BannerComp
