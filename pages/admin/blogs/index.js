import React from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import BlogContents from '../../../components/Admin/Blogs';

const BlogList = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Blogs" 
                homePageUrl="/" 
                homePageText="Admin" 
                activePageText="Blogs" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <BlogContents />
                </div>
            </div>  
            <Footer />
        </>
    )
}

export default BlogList;