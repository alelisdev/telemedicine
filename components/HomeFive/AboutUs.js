import React from 'react';

const AboutUs = () => {
    return (
        <div className="welcome-area ptb-100">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-6 p-0">
                        <div className="welcome-item welcome-left">
                            <img src="/images/about3.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 p-0">
                        <div className="welcome-item welcome-right">
                            <div className="section-title-two">
                                <span>About Us</span>
                                <h2>How We Care</h2>
                            </div>

                            <ul>
                                <li>
                                    <i className="icofont-doctor-alt"></i>
                                    <div className="welcome-inner">
                                        <h3>Certified Doctors</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-stretcher"></i>
                                    <div className="welcome-inner">
                                        <h3>Emergency 24 hours</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-network"></i>
                                    <div className="welcome-inner">
                                        <h3>Modern Technologey</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default AboutUs;