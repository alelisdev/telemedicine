import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeOne/HeroSlider';
import Stats from '../components/HomeOne/Stats';
import AboutSection from '../components/HomeOne/AboutSection';
import Services from '../components/HomeOne/Services';
import OurExpertise from '../components/HomeOne/OurExpertise';
import VideoIntro from '../components/Common/VideoIntro';
import OurDoctors from '../components/Common/OurDoctors';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <HeroSlider />

            <Stats />

            <AboutSection />

            <Services />

            <OurExpertise />

            <VideoIntro />

            <OurDoctors />

            <LatestBlogPost />

            <NewsletterForm />
            
            <Footer />
        </>
    )
}

export default Index;