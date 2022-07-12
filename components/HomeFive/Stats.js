import React from 'react';

const Stats = () => {
    return (
        <div className="counter-area counter-area-three">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-patient-bed"></i>
                            <h3 className="counter">850</h3>
                            <p>Patients Beds</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-people"></i>
                            <h3><span className="counter">2300</span>+</h3>
                            <p>Total Affected</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-doctor-alt"></i>
                            <h3 className="counter">750</h3>
                            <p>Doctors  & Nurse</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-simple-smile"></i>
                            <h3 className="counter">153</h3>
                            <p>Total Recovered</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;