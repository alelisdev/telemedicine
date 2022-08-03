import React from 'react';
import baseUrl from '../../utils/baseUrl';
import { parseISOString } from '../../utils/funcUtils';
import Link from 'next/link';

const BlogSidebar = (props) => {
    
    const { blog, recent } = props;

    return (
        <div className="blog-details-item">
            <div className="blog-details-search">
                <form>
                    <input type="text" className="form-control" placeholder="Search" />
                    <button type="submit" className="btn blog-details-btn">
                        <i className="icofont-search-1"></i>
                    </button>
                </form>
            </div>

            <div className="blog-details-recent">
                <h3>Recent Blogs</h3>
                <ul>
                    {
                        recent?.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <img src={item.imagePath ? `${baseUrl}/${item.imagePath}` : '/images/default-image.png'} alt="Recent" />
                                    <Link href={`/blog/details/${item._id}`}>
                                        <a>{item.title}</a>
                                    </Link>
                                    <ul>
                                        <li>
                                            <i className="icofont-businessman"></i> {item.name}
                                        </li>
                                        <li>
                                            <i className="icofont-calendar"></i> {parseISOString(item.date)}
                                        </li>
                                    </ul>
                                </li>
                            )
                        })
                    }                    
                </ul>
            </div>

            <div className="blog-details-category">
                <h3>Category</h3>
                <ul>
                    <li>
                        <Link href="/blog">
                            <a>Health Care</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Medical science</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                        <a>Daily lifestyle</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                        <a>Medicine</a>
                        </Link>
                    </li>
                    <li><Link href="/blog">
                        <a>Modern Technology</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Cancer Research</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>BioInformatics</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Hospital Events</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Student Succses</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="blog-details-tags">
                <h3>Tags</h3>
                <ul>
                    {
                        blog.tags?.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <p>{ item.name }</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;