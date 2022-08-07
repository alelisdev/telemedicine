import React from 'react';
import baseUrl from '../../utils/baseUrl';
import parseISOString from '../../utils/parseISOString';
import Link from 'next/link';
import categories from '../../utils/categories';

export default function BlogSidebar (props) {
    
    const { blog, recent } = props;
    
    return (
        <div className="blog-details-item">
            <div className="blog-details-recent">
                <h3>Recent Blogs</h3>
                <ul>
                    {
                        recent?.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <picture><img src={item.imagePath ? `${baseUrl}/${item.imagePath}` : '/images/default-image.png'} alt="Recent" /></picture>
                                    <Link href={`/blog-details/${item._id}`}>
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
                    {
                        categories.map((category, idx) => {
                            return (
                                <li className={blog.category == category.name ? 'active' : ''} key={idx}>
                                    { category.name }
                                    {/* <Link href={`/blog/${category.value}`}>
                                        <a>{ category.name }</a>
                                    </Link> */}
                                </li>
                            )
                        })
                    }
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