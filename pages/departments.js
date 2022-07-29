import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
 
import Footer from '../components/_App/Footer';

const Departments = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Departments" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Departments" 
                bgImage="page-title-one" 
            /> 

            <div className="departments-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-man-in-glasses"></i>
                                <h3>Primary Care, Adults</h3>
                                <h5>(18 years old and up)</h5>
                                <p>Primary care and specialist referral services may involve a primary care or allied health professional providing a consultation with a patient or a specialist assisting the primary care physician in rendering a diagnosis. </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-group-students"></i>
                                <h3>Primary Care, Adolescents</h3>
                                <h5>(11-17 years old)</h5>
                                <p>Primary care and specialist referral services may involve a primary care or allied health professional providing a consultation with a patient or a specialist assisting the primary care physician in rendering a diagnosis.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-baby"></i>
                                <h3>Pediatrics</h3>
                                <p>Pediatric telehealth can be a very beneficial tool for children, one that helps connect the child and their family with different types of healthcare services. Telehealth technologies help pediatric patients manage their condition and avoid poor outcomes by providing tools for virtual visits.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-ambulance-crescent"></i>
                                <h3>Urgent Care</h3>
                                <p>Our urgent care clinic is well equipped to treat patients for minor, common ailments, with virtually no wait times and on-the-spot diagnosis and treatment.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-blind"></i>
                                <h3>Geriatrics</h3>
                                <p>The global population of elderly people is increasing, may be expected to continue for some time. Older patients require more care, the costs may be expected to rise, although higher cost is unsustainable. Telemedicine will be presented as a highly effective and necessary tool in geriatrics.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-thumbs-up"></i>
                                <h3>Specialist Referral Service</h3>
                                <p>After you get an appointment with an online doctor, you will be investigated for your medical condition. You will be provided with referrals if special attention is needed. Prescriptions for medication may be provided by specialists. These can be directly forwarded to pharmacy.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="department-item">
                                <i className="icofont-brain-alt"></i>
                                <h3>Mental Health</h3>
                                <p>When the nearest psychiatrist’s office is dozens or even hundreds of miles away, a virtual connection may be enough to help people living with serious mental health conditions get effective care through their local primary care clinic, a new study shows.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="department-item">
                                <i className="icofont-patient-file"></i>
                                <h3>Medical Forms Services</h3>
                                <p>Within the Telehealth Consent Form, medical professionals can clearly state what patients should expect from your practice’s telehealth procedures, including risks involved and beneficial features</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default Departments;