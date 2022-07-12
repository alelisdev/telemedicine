import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Hospital Services</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>
                            
                            <div className="service-end">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-prescription"></i>
                                <h3>Diagnosis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-prescription"></i>
                                <h3>Diagnosis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-patient-file"></i>
                                <h3>Pathology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-patient-file"></i>
                                <h3>Pathology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-tooth"></i>
                                <h3>Dental Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-tooth"></i>
                                <h3>Dental Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-heart-beat-alt"></i>
                                <h3>Cardiology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-heart-beat-alt"></i>
                                <h3>Cardiology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-drug"></i>
                                <h3>Medicine</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-drug"></i>
                                <h3>Medicine</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-dna-alt-1"></i>
                                <h3>Neurology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-dna-alt-1"></i>
                                <h3>Neurology</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Ambulance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Ambulance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;