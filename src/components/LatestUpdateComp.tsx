import React from 'react'

const LatestUpdateComp:React.FC = () => {
    return (
        <section id="news" className="news section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="news-inner text-center">
                        <div className="heading">
                            <h2>Latest Updates</h2>
                        </div>

                    </div>

                </div>
                <div className="col-lg-5">
                    <div className="news-txt">
                        <div className="news-img">
                            <img src="images/latest-update-1.png" className="img-fluid" alt="Latest Updates"/>
                        </div>
                        <div className="news-inner">
                            <h3>Posted by:Admin <span>Posted on: 26 April 2020</span></h3>
                            <h4>What Can I do to protect my self & Prevent</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <a href="#">
                                Read More <i className="fas fa-long-arrow-alt-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 news-right">
                    <div className="row news-txt">
                        <div className="col-md-5">
                            <div className="news-img">
                                <img src="images/latest-update-2.png" className="img-fluid" alt="Latest Updates"/>
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="news-inner">
                                <h3>Posted by:Admin <span>Posted on: 16 May 2020</span></h3>
                                <h4>This factsheet provides an corona virus situation </h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <a href="#">
                                    Read More <i className="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-row news-txt">
                        <div className="col-md-5">
                            <div className="news-txt">
                                <div className="news-img">
                                    <img src="images/latest-update-3.png" className="img-fluid" alt="Latest Updates" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="news-inner">
                                <h3>Posted by:Admin <span>Posted on: 22 May 2020</span></h3>
                                <h4>What Can I do to protect myself & Prevent the spread</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                                <a href="#">
                                    Read More <i className="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="btn-bar">
                        <a href="#" className="">Browse All Updates</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default LatestUpdateComp
