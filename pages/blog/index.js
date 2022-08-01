import React, { useEffect, useState } from 'react';
import TopHeader from '../../components/_App/TopHeader';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import parseISOString from '../../utils/parseISOString';
import { useRouter } from 'next/router';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/blogs`).then((res) => {
            setBlogs(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

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
                        {
                            blogs.map((blog, idx) => {
                                return(
                                    <div className="col-md-6 col-lg-4" key={idx}>
                                        <div className="blog-item">
                                            <div className="blog-top">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src={blog.imagePath ? `${baseUrl}/${blog.imagePath}` : '/images/default-image.png'} alt="Blog" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="blog-bottom">
                                                <h3>
                                                    <Link href={`/blog/details/${blog._id}`}>
                                                        <a>{blog.title}</a>
                                                    </Link>
                                                </h3>
                                                <p style={{textAlign: 'justify'}}>{ blog.content.length > 500 ? blog.content.slice(0, 130) + '...' : blog.content }</p>
                                                <ul>
                                                    <li>
                                                        <Link href={`/blog/details/${blog._id}`}>
                                                            <a>
                                                                Read More <i className="icofont-long-arrow-right"></i>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="icofont-calendar"></i>
                                                        {parseISOString(blog.date)}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Blog;