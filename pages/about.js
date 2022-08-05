import React from 'react';
import Image from 'next/image';
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
                                <picture>
                                    <img src="/images/about1.jpg" alt="About" />
                                </picture>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-item about-right">
                                <picture>
                                    <img src="/images/about-shape1.png" alt="About" />
                                </picture>
                                <h2>About Our Telemedicine</h2>
                                <p>In practice, what this means is that we will schedule a video visit. You’ll open an application that has been designed specifically for this purpose, on your smartphone, tablet or computer that has high-speed internet access and a camera. It’s basically a ‘remote’ medical consultation, one that takes place via email, telephone, Whatsapp, Skype or Zoom – whatever technology works in the place you are. I’ll open the application on my end, and we’ll be able to talk to and see each other. You can be anywhere with a good internet connection and enough privacy.</p>
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
                                <i className="icofont-doctor-alt"></i>
                                <h3 className="counter">750</h3>
                                <p>Doctors & Specialists</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-thumbs-up"></i>
                                <h3 className="counter">95%</h3>
                                <p>Patient Satisfaction</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-dollar-true"></i>
                                <h3 className="counter">$9,900,000+</h3>
                                <p>Saved By Patients</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="counter-item">
                                <i className="icofont-star"></i>
                                <h3><span className="counter">4.8</span></h3>
                                <p>On Reviews</p>
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