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
                                <li>
                                    <img src={item.imagePath ? `${baseUrl}/${item.imagePath}` : '/images/default-image.png'} alt="Recent" />
                                    <Link href={`/blog/details/${item._id}`}>
                                        <a>{item.title}</a>
                                    </Link>
                                    <ul>
                                        <li>
                                            <a href="/blog">
                                                <i className="icofont-businessman"></i> {item.name}
                                            </a>
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
                        <a href="/blog">Health Care</a>
                    </li>
                    <li>
                        <a href="/blog">Medical science</a>
                    </li>
                    <li>
                        <a href="/blog">Daily lifestyle</a>
                    </li>
                    <li>
                        <a href="/blog">Medicine</a>
                    </li>
                    <li>
                        <a href="/blog">Mordern Technology</a>
                    </li>
                    <li>
                        <a href="/blog">Cancer Research</a>
                    </li>
                    <li>
                        <a href="/blog">BioInformatics</a>
                    </li>
                    <li>
                        <a href="/blog">Hospital Events</a>
                    </li>
                    <li>
                        <a href="/blog">Student Succses</a>
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