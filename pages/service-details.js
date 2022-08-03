import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const ServiceDetails = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Service Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Service Details" 
                bgImage="page-title-one" 
            /> 

            <div className="service-details-area ptb-100">
                <div className="container">
                    <div className="services-details-img">
                        <picture><img src="/images/service-details-bg.jpg" alt="Service Details" /></picture>
                        <h2>Our Hospital Always Provide Good Services</h2>
                        <p>test</p>

                        <blockquote>
                            <i className="icofont-quote-left"></i>
                            test
                        </blockquote>
                        <p>test</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="service-details-inner-left">
                                <picture><img src="/images/signup-bg.jpg" alt="Service" /></picture>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="service-details-inner">
                                <h2>We Always Take Care Our Patient</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto blanditiis obcaecati veritatis magnam pariatur molestiae in maxime. Animi quae vitae in inventore. Totam mollitia aspernatur provident veniam aperiam placeat impedit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem natus nobis, dolorum nam excepturi iure autem nemo ducimus temporibus facere, est eum voluptatem, culpa optio fugit assumenda quod? Praesentium.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, laudantium ullam, iure distinctio officia libero voluptatem obcaecati vero deleniti minima nemo itaque alias nisi eveniet soluta architecto quae laboriosam unde.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            <Footer />
        </>
    )
}

export default ServiceDetails;