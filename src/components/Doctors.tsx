import React from 'react'

const DoctorsComp:React.FC = () => {
    return (
        <section id="doctors" className="doctors section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="doctors-inner text-center">
                        <div className="heading">
                            <h2>Our Doctors</h2>
                        </div>

                    </div>

                </div>
            </div>

            <div className="row doctor-slick">
                <div className="col-md-4">
                    <div className="doctors-inner">
                        <div className="doc-img text-center">
                            <img src="images/doctor-1.png" className="img-fluid" alt="Symptom"/>
                        </div>
                        <div className="doc-txt text-center">
                            <h4>Dr. Tranquilli</h4>
                            <p className="doc-border">Corona Researcher</p>
                            <p>Phone: +880 1234 567 890</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="doctors-inner">
                        <div className="doc-img text-center">
                            <img src="images/doctor-2.png" className="img-fluid" alt="Symptom"/>
                        </div>
                        <div className="doc-txt text-center">
                            <h4>Dr. Truluck</h4>
                            <p className="doc-border">Vaccine Inventor</p>
                            <p>Phone: +880 1234 567 890</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="doctors-inner">
                        <div className="doc-img text-center">
                            <img src="images/doctor-3.png" className="img-fluid" alt="Symptom"/>
                        </div>
                        <div className="doc-txt text-center">
                            <h4>Dr. Popwell</h4>
                            <p className="doc-border">Corona Researcher</p>
                            <p>Phone: +880 1234 567 890</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default DoctorsComp
