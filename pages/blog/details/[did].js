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
import { parseISOString } from '../../../utils/funcUtils';
import CommentItem from '../../../components/Blog/Comment';
import CommentConfirmModal from '../../../components/Blog/CommentConfirmModal';

const BlogDetails = () => {
    const router = useRouter();
    const { did } = router.query;

    const [blog, setBlog] = useState({});
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');
    const [comments, setComments] = useState([]);
    const [active, setActive] = useState('');
    const [isUp, setIsUp] = useState(true);
    const [visible, setVisible] = useState(5);
    const [open, setOpen] = useState(false);
    const [recent, setRecent] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loadMore = () => {
        setVisible(visible + 4);
    }

    useEffect(() => {
        if(did) {
            const url = `${baseUrl}/api/blogs/show/${did}`;
            axios.get(url)
            .then( (res) => {
                setBlog(res.data.data);
                setPrev(res.data.prev);
                setNext(res.data.next);
            })
            .catch ( (err) => {
                NotificationManager.error('Error message', 'Something went wrong');
            });
        }
        
    }, [did])

    useEffect(() => {
        if(did) {
            const url = `${baseUrl}/api/comments/${did}`;
            axios.get(url)
            .then( (res) => {
                setComments(res.data);
            })
            .catch ( (err) => {
                NotificationManager.error('Error message', 'Something went wrong');
            });
        }
    }, [did])

    useEffect(() => {
        axios.get(`${baseUrl}/api/blogs/latest`).then((res) => {
            setRecent(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/blog" 
                homePageText="Blog" 
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
                            <div className='comments'>
                                {comments.slice(0, visible).map((comment, idx) => {
                                    return(
                                        <CommentItem key={idx} comment={comment} handleOpen={handleOpen} setIsUp={setIsUp} setActive={setActive} />
                                    )
                                })}
                                {visible < comments.length &&
                                <div className='text-center'>
                                    <button onClick={loadMore} type="button" className="btn btn-primary load-more">Load more</button>
                                </div>
                                }
                            </div>
                            <CommentForm blog_id={did} />
                        </div>
                        <div className="col-lg-4">
                            <BlogSidebar blog={blog} recent={recent} />
                        </div>
                    </div>
                </div>
            )}
            </div>

            <LatestBlogPost recent={recent} />
        
            <Footer />
            <CommentConfirmModal open={open} handleClose={handleClose} active={active}  isUp={isUp} />
        </>
    )
}

export default BlogDetails;