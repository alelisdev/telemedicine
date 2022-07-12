import React from 'react';

const Stats = () => {
    return (
        <div className="counter-area counter-area-two">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-patient-bed"></i>
                            <h3 className="counter">850</h3>
                            <p>Patients Beds</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-people"></i>
                            <h3><span className="counter">25000</span>+</h3>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-doctor-alt"></i>
                            <h3 className="counter">750</h3>
                            <p>Doctors  & Nurse</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-badge"></i>
                            <h3 className="counter">18</h3>
                            <p>Year Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;