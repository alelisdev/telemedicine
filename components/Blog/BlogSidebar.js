import React from 'react';

const BlogSidebar = () => {
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
                    <li>
                        <img src="/images/blog/blog1.jpg" alt="Recent" />
                        <a href="/blog-details">World AIDS Day, designated on 1 December.</a>
                        <ul>
                            <li>
                                <a href="/blog">
                                    <i className="icofont-businessman"></i> Admin
                                </a>
                            </li>
                            <li>
                                <i className="icofont-calendar"></i> Jan 03, 2020
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img src="/images/blog/blog2.jpg" alt="Recent" />
                        <a href="/blog-details">World AIDS Day, designated on 1 December.</a>
                        <ul>
                            <li>
                                <a href="/blog">
                                    <i className="icofont-businessman"></i> Admin
                                </a>
                            </li>
                            <li>
                                <i className="icofont-calendar"></i> Jan 03, 2020
                            </li>
                        </ul>
                    </li>
                    <li>
                        <img src="/images/blog/blog3.jpg" alt="Recent" />
                        <a href="/blog-details">World AIDS Day, designated on 1 December.</a>
                        <ul>
                            <li>
                                <a href="/blog">
                                    <i className="icofont-businessman"></i> Admin
                                </a>
                            </li>
                            <li>
                                <i className="icofont-calendar"></i> Jan 03, 2020
                            </li>
                        </ul>
                    </li>
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
                    <li>
                        <a href="/blog">Dental</a>
                    </li>
                    <li>
                        <a href="/blog">Health</a>
                    </li>
                    <li>
                        <a href="/blog">Child</a>
                    </li>
                    <li>
                        <a href="/blog">Medicine</a>
                    </li>
                    <li>
                        <a href="/blog">Caveti</a>
                    </li>
                    <li>
                        <a href="/blog">AIDS</a>
                    </li>
                    <li>
                        <a href="/blog">Dental</a>
                    </li>
                    <li>
                        <a href="/blog">Health</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogSidebar;