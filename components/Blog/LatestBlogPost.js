import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <div className="blog-area-two pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Blogs</h2>
                </div>

                <div className="row">
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
                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost;