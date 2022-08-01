import React, { useEffect, useState } from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import CommentForm from '../../../components/Blog/CommentForm';
import BlogSidebar from '../../../components/Blog/BlogSidebar';
import LatestBlogPost from '../../../components/Blog/LatestBlogPost';
import { useRouter } from 'next/router';
import baseUrl from '../../../utils/baseUrl';
import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import Link from 'next/link';
import parseISOString from '../../../utils/parseISOString';

const INITIAL_STATE = {
    title: '',
    content: '',
    imagePath: ''
}

const BlogDetails = () => {
    const router = useRouter();
    const { did } = router.query;

    const [blog, setBlog] = useState({});
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');

    useEffect(() => {
        if(did) {
            const url = `${baseUrl}/api/blogs/show/${did}`;
            axios.get(url)
            .then( (res) => {
                setBlog(res.data.data);
                setPrev(res.data.prev[0]);
                setNext(res.data.next[0]);
            })
            .catch ( (err) => {
                NotificationManager.error('Error message', 'Something went wrong');
            });
        }
        
    }, [did])

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
            {blog && (<div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-item">
                                <div className="blog-details-img">
                                    <img src={blog.imagePath ? `${baseUrl}/${blog.imagePath}` : '/images/default-image.png'} alt="Blog" />
                                    <h2>{blog.title}</h2>

                                    <ul>
                                        <li>
                                            <a href="/blog">
                                                <i className="icofont-businessman"></i> Admin
                                            </a>
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i>
                                            { blog.date ? parseISOString(blog.date) : blog.date }
                                        </li>
                                    </ul>

                                    <p>{blog.content}</p>
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
                                                { prev &&  
                                                <Link href={`/blog/details/${prev._id}`}>
                                                    <a>Previous</a>
                                                </Link>
                                                }   
                                            </li>
                                            <li>
                                            { next &&  
                                                <Link href={`/blog/details/${next._id}`}>
                                                    <a>Next</a>
                                                </Link>
                                            }
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
            )}
            </div>

            <LatestBlogPost />
        
            <Footer />
        </>
    )
}

export default BlogDetails;