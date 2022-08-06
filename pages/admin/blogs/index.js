import React from 'react';
import axios from 'axios';
import baseUrl from '../../../utils/baseUrl';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';
import BlogContents from '../../../components/Admin/Blogs';

const BlogList = (props) => {

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
                    <BlogContents data={props.data} />
                </div>
            </div>  
            <Footer />
        </>
    )
}


export async function getServerSideProps() {
    // Fetch data from external API
    const res = await axios.get(`${baseUrl}/api/blogs/all`);
    const data = res.data;
    // Pass data to the page via props
    return { props: { data } }
}


export default BlogList;