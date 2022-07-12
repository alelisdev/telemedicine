import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import CommentForm from '../components/Blog/CommentForm';
import BlogSidebar from '../components/Blog/BlogSidebar';
import LatestBlogPost from '../components/Blog/LatestBlogPost';

const BlogDetails = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                bgImage="page-title-four" 
            /> 

            <div className="blog-details-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-item">
                                <div className="blog-details-img">
                                    <img src="/images/blog/blog-details.jpg" alt="Blog" />
                                    <h2>More Than 80 Clinical Trials Launch to Test  of The Coronavirus</h2>

                                    <ul>
                                        <li>
                                            <a href="/blog">
                                                <i className="icofont-businessman"></i> Admin
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jan 03, 2020
                                        </li>
                                    </ul>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <p>Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                                </div>

                                <div className="blog-details-previous">
                                    <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                                    <ul>
                                        <li>1. Donec a purus at tellus rhoncus semper non sed tortor.</li>
                                        <li>2. Etiam ut est laoreet, accumsan erat sed, ullamcorper magna.</li>
                                        <li>3. Nullam sit amet magna cursus, consectetur magna in, faucibus erat.</li>
                                        <li>4. Aenean vitae tortor pretium, sollicitudin urna at, sollicitudin dui.</li>
                                        <li>5. Phasellus tempor velit sed leo viverra lacinia.</li>
                                        <li>6. Suspendisse quis sapien dapibus, sagittis ligula a, rhoncus justo.</li>
                                    </ul>

                                    <div className="prev-next">
                                        <ul>
                                            <li>
                                                <a href="#">Previous</a>
                                            </li>
                                            <li>
                                                <a href="#">Next</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <CommentForm />
                        </div>

                        <div className="col-lg-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <LatestBlogPost />
        
            <Footer />
        </>
    )
}

export default BlogDetails;