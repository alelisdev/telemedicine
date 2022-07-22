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
                                    <h2>About ANXIETY</h2>

                                    <ul>
                                        <li>
                                            <a href="/blog">
                                                <i className="icofont-businessman"></i> Admin
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            Jul 23, 2022
                                        </li>
                                    </ul>

                                    <p>Anxiety is the feeling of unease, worry, or impending doom, and this may be accompanied by physical symptoms such as racing heart, sweating, difficulty sleeping, among others. On the extreme end, severe anxiety can evolve into a full blown “Panic Attack.” </p>
                                    <p>Nearly all adults experience anxiety at one time or another, and this is no cause for great alarm. However if you are experiencing panic attacks, or if your anxiety is interfering with school, work, social relationships, or family life, then it may be time to seek professional advice and treatment, which may include counseling, medications, or both. </p>
                                    <p>Here is a simple Anxiety Self-screen Questionnaire, called the GAD-7, which can be completed in less than 5 minutes:</p>
                                    <a href='https://www.bruntsfieldmedicalpractice.co.uk/'>Microsoft Word - GAD-7 Word.doc (bruntsfieldmedicalpractice.co.uk) </a>
                                    <p>If your SCORE is 7 to 8 or higher, it is advisable that you speak to a physician or mental health professional for a more detailed assessment.</p>
                                    <p>The GOOD news is that there are many forms of treatment that are available to get your anxiety under better control, so that your work, school, and personal life doesn’t have to suffer. </p>
                                </div>

                                <div className="blog-details-previous">
                                    {/* <h3>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                                    <ul>
                                        <li>1. Donec a purus at tellus rhoncus semper non sed tortor.</li>
                                        <li>2. Etiam ut est laoreet, accumsan erat sed, ullamcorper magna.</li>
                                        <li>3. Nullam sit amet magna cursus, consectetur magna in, faucibus erat.</li>
                                        <li>4. Aenean vitae tortor pretium, sollicitudin urna at, sollicitudin dui.</li>
                                        <li>5. Phasellus tempor velit sed leo viverra lacinia.</li>
                                        <li>6. Suspendisse quis sapien dapibus, sagittis ligula a, rhoncus justo.</li>
                                    </ul> */}

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