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
                we are healthcare professionals interested in the provision of
                quality medical services to our patients.our services includes;
                General practice clinic,paediatrics, laboratory,General surgery
                clinic, pharmacy,Anaesthetists.
              </p>
              <p>
                our esteem values are to provide quick medical interventions,
                maintain high professional intergrity, consider safety
                precautions in task execution and maintain team healthcare
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2Comp;
