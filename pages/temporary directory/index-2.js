import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeTwo/HeroSlider';
import ContactInfo from '../components/HomeTwo/ContactInfo';
import AboutUs from '../components/HomeTwo/AboutUs';
import OurExpertise from '../components/HomeTwo/OurExpertise';
import Services from '../components/HomeTwo/Services';
import VideoIntro from '../components/Common/VideoIntro';
import OurDoctors from '../components/Common/OurDoctors';
import Stats from '../components/HomeTwo/Stats';
import AppointmentForm from '../components/Common/AppointmentForm';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from '../components/_App/Footer';

const Index2 = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <HeroSlider />

            <ContactInfo />

            <AboutUs />

            <OurExpertise />

            <Services />

            <VideoIntro />

            <OurDoctors />

            <div className="pb-100">
                <Stats />
            </div>

            <AppointmentForm />

            <LatestBlogPost />

            <NewsletterForm />
            
            <Footer />
        </>
    )
}

export default Index2;