import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Blogs</h2>
                </div>

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
                                        <a>How can I start a telemedicine program, and what does it cost?</a>
                                    </Link>
                                </h3>
                                <p>This article was originally published in July 2015 but was updated in June 2022. I want to 'do telemedicine': What is involved ...</p>
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
                                        Jul 12, 2022
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
                                        <img src="/images/blog/blog2.webp" alt="Blog" />
                                    </a>
                                </Link>
                            </div>
                            <div className="blog-bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>How school-based telemedicine can ease healthcare’s COVID burden</a>
                                    </Link>
                                </h3>
                                <p>Telemedicine can be a significant approach to assisting those in need who can’t receive proper care in hospitals at the moment..</p>
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
                                        Jul 7, 2022
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
                                        <img src="/images/blog/blog3.webp" alt="Blog" />
                                    </a>
                                </Link>
                            </div>
                            <div className="blog-bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Telemedicine for Beginners: How to Introduce Staff to Telehealth</a>
                                    </Link>
                                </h3>
                                <p>This article was originally published in March 2019 but was updated in June 2022. While telemedicine is a relatively known technology in the medical...</p>
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
                                        Jul 5, 2022
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost;