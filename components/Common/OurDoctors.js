import React from 'react';
import Link from 'next/link';

const OurDoctors = () => {
    return (
        <div className="doctors-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Doctors</h2>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/doctor1.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Babatunde</a>
                                    </Link>
                                </h3>
                                <span>Neurosurgeon</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Addision Smith</a>
                                    </Link>
                                </h3>
                                <span>Neurosurgeon</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4">
                        <div className="doctor-item">
                            <div className="doctor-top">
                                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                                <Link href="/appointment">
                                    <a>Get Appointment</a>
                                </Link>
                            </div>
                            <div className="doctor-bottom">
                                <h3>
                                    <Link href="/doctor-details">
                                        <a>Dr. Sarah Tylor</a>
                                    </Link>
                                </h3>
                                <span>Dental Surgeon</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="doctor-btn">
                    <Link href="/doctor-details">
                        <a>See All</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OurDoctors;