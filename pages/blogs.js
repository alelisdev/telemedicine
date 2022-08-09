import React, { useEffect, useState, useCallback } from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { useRouter } from 'next/router';
import parseISOString from '../utils/parseISOString';
import categories from '../utils/categories';

export default function Blog () {
    const [blogs, setBlogs] = useState([]);
    const [visible, setVisible] = useState(6);
    const [keyword, setKeyword] = useState('');
    const router = useRouter();
    const [category, setCategory] = useState('all');
    // const { did } = router.query;

    const handleSearch = async (e) => {
        setKeyword(e.target.value);
    }

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const fetchData = useCallback( async () => {
        const url = `${baseUrl}/api/blogs/search`;
        const payload = { keyword, category };
        const res = await axios.post(url, payload);
        setBlogs(res.data);
        setVisible(6);
    }, [keyword, category])

    useEffect( () => {
        fetchData();
    }, [keyword, category])

    const loadMore = () => {
        setVisible(visible + 3);
    }

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

            <div className="doctor-search-area">
                <div className="container">
                    <div className="row doctor-search-wrap">
                        <div className="col-sm-6 col-lg-6">
                            <div className="doctor-search-item">
                                <div className="form-group">
                                    <i className="icofont-newspaper"></i>
                                    <label>Search</label>
                                    <input type="text" name="search" value={keyword} onChange={handleSearch} className="form-control" placeholder="Blog title, content" />
                                </div>
                                <button className="btn doctor-search-btn">
                                    <i className="icofont-search-1"></i>
                                </button>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-6">
                            <div className="doctor-search-item">
                                <div className="form-group">
                                    <i className="icofont-hospital"></i>
                                    <label>Category</label>
                                    <select className="form-control" onChange={handleChange}>
                                        <option value='all'>-- All --</option>
                                        {
                                            categories.map((category, idx) => {
                                                return (
                                                    <option value={category.name} key={idx}>{category.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        {
                            blogs.slice(0, visible).map((blog, idx) => {
                                return(
                                    <div className="col-md-6 col-lg-4" key={idx}>
                                        <div className="blog-item">
                                            <div className="blog-top">
                                                <Link href={`/blog-details/${blog._id}`}>
                                                    <a>
                                                        <picture>
                                                            <img src={blog.imagePath ? `${baseUrl}/${blog.imagePath}` : '/images/default-image.png'} alt="Blog" />
                                                        </picture>
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="blog-bottom">
                                                <h3>
                                                    <Link href={`/blog-details/${blog._id}`}>
                                                        <a>{blog.title}</a>
                                                    </Link>
                                                </h3>
                                                <p style={{textAlign: 'justify'}}>{ blog.content.length > 500 ? blog.content.slice(0, 130) + '...' : blog.content }</p>
                                                <ul>
                                                    <li>
                                                        <Link href={`/blog-details/${blog._id}`}>
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
                        { visible < blogs.length &&
                                <div className='text-center'>
                                    <button onClick={loadMore} type="button" className="btn m-auto btn-primary load-more">Load more</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}