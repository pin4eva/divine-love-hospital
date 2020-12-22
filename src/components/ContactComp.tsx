import React from 'react'

const ContactComp:React.FC = () => {
    return (
        <section id="contact" className="contact">
        <div className="container">
            <div className="content-text">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="cont-logo">
                            <a href="#"><img src="images/footer-logo.png" alt="footer logo"/></a>
                        </div>
                        <div className="cont-txt">
                            <p className="cont-gap">Lorem ipsum dolor sit amet, consectetur adipisng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod .</p>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2  col-md-6 col-sm-12">
                        <div className="cont-center">
                            <h3>Important Links</h3>
                        </div>

                        <div className="c-text-menu1">
                            <ul>
                                <li><a href="#">WHO Information </a></li>
                                <li><a href="#">Covid-19 Wikipedia</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">CNN News</a></li>
                                <li><a href="#">Worldometer Info</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-2  col-md-6 col-sm-12">
                        <div className="cont-center">
                            <h3>Privacy & TOS</h3>
                        </div>

                        <div className="c-text-menu1">
                            <ul>
                                <li><a href="#">Advertiser Agreement</a></li>
                                <li><a href="#">Acceptable Use Policy</a></li>
                                <li><a href="blog_details.html">Privacy Policy</a></li>
                                <li><a href="blog_details.html">Technology Privacy</a></li>
                                <li><a href="#">Developer Agreement</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="cont-center">
                            <h3>Contact us</h3>
                        </div>
                        <div className="c-text-location">
                            <div className="row">
                                <div className="col-lg-3  col-md-3">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-map-marker-alt"></i></a></li>
                                        <li><a href="#"><i className="fas fa-phone"></i></a></li>
                                        <li><a href="#"><i className="fas fa-globe-americas"></i></a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-9  col-md-9">
                                    <div className="address">

                                        <p>1234, Park Street Avenue, NY, America - 6658</p>

                                        <p>+880 1234 567 890<br/>
                                            +880 0987 654 321</p>

                                        <p>www.quarantine.com<br/>
                                            www.coronavirus.com</p>
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
                            <p>Copyright © 2020. All rights reserved by <a href="#">Designer</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    )
}

export default ContactComp
