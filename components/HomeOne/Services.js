import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Telemedicine Services</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>Doctors are full of timely insights and information on telemedicine, American health care</p>
                            </div>
                            
                            <div className="service-end">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctor</h3>
                                <p>Doctors are full of timely insights and information on telemedicine, American health care</p>

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
                                <p>Video visits may offer important information about a patient’s living environment.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-prescription"></i>
                                <h3>Diagnosis</h3>
                                <p>Video visits may offer important information about a patient’s living environment.</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-dna-alt-2"></i>
                                <h3>Pathology</h3>
                                <p>Current technologies can enable real time access to expert pathology specialists for expert.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-dna-alt-2"></i>
                                <h3>Pathology</h3>
                                <p>Current technologies can enable real time access to expert pathology specialists for expert.</p>

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
                                <h3>Anxiety & Depression</h3>
                                <p>A anxiety & depression care has a wealth of information on a variety of oral-health-related topics.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-patient-file"></i>
                                <h3>Anxiety & Depression</h3>
                                <p>A anxiety & depression care has a wealth of information on a variety of oral-health-related topics.</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-stethoscope-alt"></i>
                                <h3>Hypertension</h3>
                                <p>Hypertension management utilizing a telemedicin is a crucial piece in creating a comprehensive care.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-stethoscope-alt"></i>
                                <h3>Hypertension</h3>
                                <p>Hypertension management utilizing a telehealth is a crucial piece in creating a comprehensive care.</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-autism"></i>
                                <h3>Insomnia</h3>
                                <p>We provide answers to all questions about the diagnosis and treatment of sleep disorders.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-autism"></i>
                                <h3>Insomnia</h3>
                                <p>We provide answers to all questions about the diagnosis and treatment of sleep disorders.</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-disabled"></i>
                                <h3>Diabetes</h3>
                                <p>By managing diabetes with telehealth, improve quality of care and access to healthcare services.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-disabled"></i>
                                <h3>Diabetes</h3>
                                <p>By managing diabetes with telehealth, improve quality of care and access to healthcare services.</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-3">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-pills"></i>
                                <h3>Allergy pills</h3>
                                <p>Choose Virtual Care for Real Allergy Relief. Telemedicine treatment for allergies.</p>
                            </div>

                            <div className="service-end">
                                <i className="icofont-pills"></i>
                                <h3>Allergy pills</h3>
                                <p>Choose Virtual Care for Real Allergy Relief. Telemedicine treatment for allergies.</p>

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