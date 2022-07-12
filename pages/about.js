import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import OurExpertise from '../components/HomeTwo/OurExpertise';
import Services from '../components/HomeOne/Services';
import TestimonialSlider from '../components/Common/TestimonialSlider';
import LatestBlogPost from '../components/Common/LatestBlogPost';

const About = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="about-left">
                                    <img src="/images/about1.jpg" alt="About" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-item about-right">
                                <img src="/images/about-shape1.png" alt="About" />
                                <h2>About Our Hospital</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <ul>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Browse Our Website
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Choose Service
                                    </li>
                                    <li>
                                        <i className="icofont-check-circled"></i>
                                        Send Messege
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-area counter-bg counter-area-four">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-patient-bed"></i>
                                <h3 className="counter">850</h3>
                                <p>Patients Beds</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-people"></i>
                                <h3><span className="counter">25000</span>+</h3>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-doctor-alt"></i>
                                <h3 className="counter">750</h3>
                                <p>Doctors  & Nurse</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-badge"></i>
                                <h3 className="counter">18</h3>
                                <p>Year Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OurExpertise /> 

            <Services /> 

            <TestimonialSlider /> 

            <LatestBlogPost />
  
            <Footer />
        </>
    )
}

export default About;