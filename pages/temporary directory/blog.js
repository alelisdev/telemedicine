import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const Blog = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
                bgImage="page-title-four" 
            /> 

            <div className="blog-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog1.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                In this hospital there are special surgeon.
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog2.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                World AIDS Day, designated on 1 December
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog3.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                More than 80 clinical trials launch to test coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog4.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                We always give the best from us
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog5.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Be aware about the coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog6.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                No one find any medicines to prevent evolovirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog7.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Thailand is trying to make vaccine of coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog8.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                Already 1932 people have died in China
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="blog-item">
                                <div className="blog-top">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog9.jpg" alt="Blog" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-bottom">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>
                                                30+ countries have affected by coronavirus
                                            </a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum is  dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                                    <ul>
                                        <li>
                                            <Link href="/blog-details">
                                                <a>
                                                    Read More <i className="icofont-long-arrow-right"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>
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

export default Blog;