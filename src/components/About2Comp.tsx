import React from "react";

const About2Comp = () => {
  return (
    <section id="about" className="about-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <img
              src="images/home-two-about-image.jpg"
              alt="about"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="about-inner text-left">
              <div className="heading">
                <h2>About Us</h2>
              </div>
              <p className="cont-gap">
                We are healthcare professionals interested in the provision of
                quality medical services to our patients.
              </p>
              <p>
                our esteem values are to provide quick medical interventions,
                maintain high professional intergrity, consider safety
                precautions in task execution and maintain team healthcare
                management.
              </p>
              <p>
                Our services includes General practice clinic, Paediatrics,
                Laboratory, General surgery clinic, Pharmacy, Anaesthetists and
                periodic assesment of company staff through retainership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2Comp;
