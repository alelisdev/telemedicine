import React from 'react';
import TopHeader from '../../../components/_App/TopHeader';
import Navbar from '../../../components/_App/Navbar';
import PageBanner from '../../../components/Common/PageBanner';
import Footer from '../../../components/_App/Footer';

export default function Users() {
    return(
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
            <Footer />
        </>
    )
}