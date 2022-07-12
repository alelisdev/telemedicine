import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <div className="services-area service-area-two pb-70">
            <div className="container">
                <div className="section-title-two">
                    <span>Services</span>
                    <h2>Get Special Services For Covid-19</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctors</h3>
                                <p>Our Doctors are full of timely insights and information on internal medicine, American health care, and medical education.</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-doctor"></i>
                                <h3>Expert Doctors</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>

                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-helicopter"></i>
                                <h3>Emergency Helicopter</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-helicopter"></i>
                                <h3>Emergency Helicopter</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-architecture"></i>
                                <h3>Leading Technology</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-architecture"></i>
                                <h3>Leading Technology</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-user-male"></i>
                                <h3>24 Hours Open</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-user-male"></i>
                                <h3>24/7 Open</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Free Ambulance</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-ambulance-cross"></i>
                                <h3>Free Ambulance</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                                
                                <Link href="/service-details">
                                    <a>Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="service-item">
                            <div className="service-front">
                                <i className="icofont-home"></i>
                                <h3>Home Advise</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                            </div>
                            <div className="service-end">
                                <i className="icofont-home"></i>
                                <h3>Home Advise</h3>
                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement</p>
                                
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