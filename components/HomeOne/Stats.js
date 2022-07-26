import React from 'react';

const Stats = () => {
    return (
        <div className="counter-area">
            <div className="container">
                <div className="row counter-bg">
                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-doctor-alt"></i>
                            <h3 className="counter">750</h3>
                            <p>Doctors & Specialists</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-thumbs-up"></i>
                            <h3 className="counter">95%</h3>
                            <p>Patient Satisfaction</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-dollar-true"></i>
                            <h3 className="counter">$9,900,000+</h3>
                            <p>Saved By Patients</p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3">
                        <div className="counter-item">
                            <i className="icofont-star"></i>
                            <h3><span className="counter">4.8</span></h3>
                            <p>On Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;