import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeFive/HeroSlider';
import AboutUs from '../components/HomeFive/AboutUs';
import OurExpertise from '../components/HomeFive/OurExpertise';
import Services from '../components/HomeFive/Services';
import HowCovid19Spreads from '../components/HomeFive/HowCovid19Spreads';
import SymptomsCovid19 from '../components/HomeFive/SymptomsCovid19';
import FaqSection from '../components/Common/FaqSection';
import VideoIntro from '../components/Common/VideoIntro';
import OurDoctors from '../components/Common/OurDoctors';
import Stats from '../components/HomeFive/Stats';
import FeedbackSlider from '../components/HomeFive/FeedbackSlider';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import NewsletterForm from '../components/Common/NewsletterForm';
import Footer from '../components/_App/Footer';

const Index5 = () => {
    return (
        <>
            <TopHeader />

            <Navbar />

            <HeroSlider />

            <AboutUs />

            <OurExpertise />

            <Services />

            <HowCovid19Spreads />

            <SymptomsCovid19 />

            <FaqSection />

            <VideoIntro />

            <OurDoctors />

            <div className="pb-100">
                <Stats />
            </div>

            <FeedbackSlider />

            <LatestBlogPost />

            <NewsletterForm />
            
            <Footer />
        </>
    )
}

export default Index5;