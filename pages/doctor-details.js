import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AppointmentFormTwo from '../components/Common/AppointmentFormTwo';
import Footer from '../components/_App/Footer';

const DoctorDetails = () => {
    return (
        <>
            <TopHeader />
            
            <Navbar />

            <PageBanner 
                pageTitle="Dr. Sarah Taylor (Neurosurgeon)" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Doctor Details" 
                bgImage="page-title-five" 
            /> 
 
            <div className="doctor-details-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="doctor-details-item doctor-details-left">
                                <img src="/images/doctors/doctor3.jpg" alt="Doctor" />

                                <div className="doctor-details-contact">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-ui-call"></i>
                                            Call: +1 234 567 8901
                                        </li>
                                        <li>
                                            <i className="icofont-ui-message"></i>
                                            ben@bkginvestments
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i>
                                            4th Floor, 408 No Chamber
                                        </li>
                                    </ul>
                                </div>

                                <div className="doctor-details-work">
                                    <h3>Working hours</h3>
                                    <div className="appointment-item-two-right">
                                        <div className="appointment-item-content">
                                            <ul>
                                                <li>Monday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Tuesday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Wednesday <span>9:00 AM - 8:00 PM</span></li>
                                                <li>Sunday <span>9:00 AM - 8:00 PM</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="doctor-details-item">
                                <div className="doctor-details-right">
                                    <div className="doctor-details-biography">
                                        <h3>Dr. Sarah Taylor (Neurosurgeon)</h3>
                                        <p>MBBS in Neurology, PHD in Neurosurgeon</p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Biography</h3>

                                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – To help physician practices provide convenient health care access to their patients through secure video visits</p>
                                        
                                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – To help physician practices provide convenient health care access to their patients through secure video visits</p>
                                        
                                        <p>To help physician practices provide convenient health care access to their patients through secure video visits – To help physician practices provide convenient health care access to their patients through secure video visits</p>
                                        
                                        <p></p>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Education</h3>
                                        <ul>
                                            <li>PHD Degree in Neurology at University of UCLan School of Medicine Preston (2006)</li>
                                            <li>Master of Neurosurgery at University of University of Exeter Medical School Exeter (2002)</li>
                                        </ul>
                                    </div>

                                    <div className="doctor-details-biography">
                                        <h3>Experience</h3>
                                        <p>In practice, what this means is that we will schedule a video visit. You’ll open an application that has been designed specifically for this purpose, on your smartphone, tablet or computer that has high-speed internet access and a camera. I’ll open the application on my end.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <AppointmentFormTwo />
            </div>
    
            <Footer />
        </>
    )
}

export default DoctorDetails;