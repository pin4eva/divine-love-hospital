import React from 'react'

const CoronaSymptomsComp:React.FC = () => {
    return (
        <section id="symptoms" className="symptoms section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="symptoms-inner text-center">
                        <div className="heading">
                            <h2>CoronaVirus Symptoms</h2>
                        </div>

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="Symptoms">
                        <div className="symptom-txt text-center">
                            <img src="images/symptom-1.png" className="img-fluid" alt="Symptom"/>
                            <h4>Cold & Cough</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="Symptoms">
                        <div className="symptom-txt text-center">
                            <img src="images/symptom-2.png" className="img-fluid" alt="Symptom"/>
                            <h4>High Fever</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="Symptoms">
                        <div className="symptom-txt text-center">
                            <img src="images/symptom-3.png" className="img-fluid" alt="Symptom"/>
                            <h4>Vomiting</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="Symptoms">
                        <div className="symptom-txt text-center">
                            <img src="images/symptom-4.png" className="img-fluid" alt="Symptom"/>
                            <h4>Headache</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default CoronaSymptomsComp
