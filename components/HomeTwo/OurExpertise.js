import React from 'react';

const OurExpertise = () => {
    return (
        <div className="speciality-area pb-100">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-7">
                        <div className="speciality-left">
                            <div className="section-title-two">
                                <span>Speciality</span>
                                <h2>Our Expertise</h2>
                            </div>

                            <div className="speciality-item">
                                <div className="row m-0">
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>Available 24/7</h3>
                                            <p>Doctors can diagnose and treat an impressive number of health conditions, and that includes prescribing medication and sending it to your preferred pharmacy.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>Hybrid models</h3>
                                            <p>These models can replace traditional primary care with an option that gives you easier access to your doctor, longer visits and deeper insights about your health.</p>
                                        </div>
                                    </div>  
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>Best Price</h3>
                                            <p>Our Telecarelif also offers urgent care online. Without insurance, the baseline cost for a visit very cheap and best for all online patients. .</p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>Helplines</h3>
                                            <p> Usually, all you need to do is input your geographic location and plan type, and then you can call.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 pr-0">
                        <div className="speciality-item speciality-right">
                            <picture><img src="/images/about4.webp" alt="Speciality" /></picture>

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <h3>Emergency Call</h3>
                                <p>+1 234 567 8901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertise;