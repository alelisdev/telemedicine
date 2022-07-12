import React from 'react';
import Link from 'next/link';

const OurExpertise = () => {
    return (
        <div className="expertise-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Expertise</h2>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-doctor-alt"></i>
                                        <h3>
                                            <Link href="/doctor-details">
                                                <a>Certified Doctors</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-stretcher"></i>
                                        <h3>
                                            <Link href="/doctor-details">
                                                <a>Emergency</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-network"></i>
                                        <h3>
                                            <Link href="/doctor-details">
                                                <a>Teachnology</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-6">
                                    <div className="expertise-inner">
                                        <i className="icofont-ambulance-cross"></i>
                                        <h3>
                                            <Link href="/doctor-details">
                                                <a>Ambulance</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="expertise-item">
                            <div className="expertise-right">
                                <img src="/images/about4.jpg" alt="Expertise" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertise;