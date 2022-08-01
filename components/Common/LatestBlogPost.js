import React, { useEffect, useState } from 'react';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import Link from 'next/link';
import parseISOString from '../../utils/parseISOString';

const LatestBlogPost = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/blogs/latest`).then((res) => {
            console.log(res.data);
            setBlogs(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Blogs</h2>
                </div>

                <div className="row justify-content-center">
                    {
                        blogs.map((blog, idx) => {
                            return (
                                    <div className="col-md-6 col-lg-4" key={idx}>
                                        <div className="blog-item">
                                            <div className="blog-top">
                                                <Link href={`/blog/details/${blog._id}`}>
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
    )
}

export default LatestBlogPost;