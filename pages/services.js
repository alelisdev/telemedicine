import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
 
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                bgImage="page-title-one" 
            /> 

            <div className="services-area pt-100 pb-70">
                <div className="container">
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
 
            <div className="expertise-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="expertise-item">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-doctor-alt"></i>
                                                <h3>Certified Doctors</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-stretcher"></i>
                                                <h3>Emergency</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-network"></i>
                                                <h3>Teachnology</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <a href="/blog-details">
                                            <div className="expertise-inner">
                                                <i className="icofont-ambulance-cross"></i>
                                                <h3>Ambulance</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </div>
                                        </a>
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
  
            <Footer />
        </>
    )
}

export default Services;