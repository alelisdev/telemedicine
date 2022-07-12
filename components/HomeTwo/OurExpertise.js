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
                                            <h3>Child Care</h3>
                                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>More Stuff</h3>
                                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>Enough Lab</h3>
                                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div className="speciality-inner">
                                            <i className="icofont-check-circled"></i>
                                            <h3>24 Hour Doctor</h3>
                                            <p>Lorem ipsum dolor sit amet, is consectetur adipiscing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 pr-0">
                        <div className="speciality-item speciality-right">
                            <img src="/images/about4.jpg" alt="Speciality" />

                            <div className="speciality-emergency">
                                <div className="speciality-icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <h3>Emergency Call</h3>
                                <p>+07 554 332 322</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertise;