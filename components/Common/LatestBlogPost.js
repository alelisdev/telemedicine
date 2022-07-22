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
                                        <a>About ANXIETY</a>
                                    </Link>
                                </h3>
                                <p>Anxiety is the feeling of unease, worry, or impending doom, and this may be accompanied by physical symptoms such as ...</p>
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
                                        Jul 23, 2022
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
                                        <img src="/images/blog/blog1.jpg" alt="Blog" />
                                    </a>
                                </Link>
                            </div>
                            <div className="blog-bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>About ANXIETY</a>
                                    </Link>
                                </h3>
                                <p>Anxiety is the feeling of unease, worry, or impending doom, and this may be accompanied by physical symptoms such as ...</p>
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
                                        Jul 23, 2022
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
                                        <img src="/images/blog/blog1.jpg" alt="Blog" />
                                    </a>
                                </Link>
                            </div>
                            <div className="blog-bottom">
                                <h3>
                                    <Link href="/blog-details">
                                        <a>About ANXIETY</a>
                                    </Link>
                                </h3>
                                <p>Anxiety is the feeling of unease, worry, or impending doom, and this may be accompanied by physical symptoms such as ...</p>
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
                                        Jul 23, 2022
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