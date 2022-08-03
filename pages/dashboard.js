import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import DashboardTable from '../components/Common/DashboardTable';

const Dashboard = () => {

    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Dashboard" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Dashboard" 
                bgImage="page-title-one" 
            /> 

            <div className="about-area pt-100 pb-70">
                <div className="container">
                    <DashboardTable />
                </div>
            </div>
  
            <Footer />
        </>
    )
}

export default Dashboard;