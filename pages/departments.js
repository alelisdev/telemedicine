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
                                <i className="icofont-tooth"></i>
                                <h3>Dental Care</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-baby"></i>
                                <h3>Baby Care</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-laboratory"></i>
                                <h3>Laboratory</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-icu"></i>
                                <h3>ICU</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-dna-alt-2"></i>
                                <h3>DNA Test</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-surgeon"></i>
                                <h3>Surgeon</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-xray"></i>
                                <h3>X-ray</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-blood-test"></i>
                                <h3>Blood Test</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-4">
                            <div className="department-item">
                                <i className="icofont-ambulance-crescent"></i>
                                <h3>Ambulance Service</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium eaque omnis corporis, animi aspernatur tempora.</p>
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