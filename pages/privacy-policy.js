import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="Privacy Policy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Privacy Policy" 
                bgImage="page-title-one" 
            /> 

            <div className="privacy-area ptb-100">
                <div className="container">
                    <h4>Telecarelife is a safe and secure way of connecting with your health care provider online. Just like in-person care, your telehealth appointments, messages, and information are protected by privacy rules.</h4>
                    <br />   
                    <h2>1. Connecting securely online</h2>
                    <p>Telecarelife connects patients with health care online, using a computer, tablet, or smartphone.</p>
                    <p>Although your appointment will use your regular internet service or data plan, health care providers typically use secure patient portals to message, call, and video chat with patients. During the COVID-19 public health emergency, federal policy changes have also allowed health care providers to sometimes use popular video chat programs for telehealth care.</p>
                    
                    <h2>2. Privacy during your appointment</h2>
                    <p>Your health care provider will call you from a private setting such as their office or an appointment room. You should also be in a private, safe location where you feel safe to openly discuss your health.</p>
                    <h5>Private locations for your appointment include:</h5>
                    <ul>
                        <li>A private room of your home</li>
                        <li>Your car</li>
                        <li>A private room in a friend’s home</li>
                        <li>Outdoors, away from other people</li>
                     </ul>
                     <p>If you cannot find a private place for a video telehealth appointment, let your provider know. You may be able to email, chat, or text through your provider’s patient portal instead. They can also help you to reschedule or suggest a better location for the visit.</p>
                     
                     <h2>3. Tips for safely sharing information online</h2>
                     <p>Telehealth makes it possible to get some health care services, wherever you are. Keeping telehealth private and secure is the responsibility of patients and providers. Take steps to protect yourself when you begin connecting with your provider online.</p>
                     <ul>
                        <li>Keep your devices protected with updated antivirus software.</li>
                        <li>Protect your wireless connection with a password.</li>
                        <li>Avoid using public Wi-Fi to access telehealth services.</li>
                        <li>Avoid accessing telehealth on devices shared with people outside of your home or family.</li>
                        <li>Don’t set up a telehealth appointment or share your information with a provider you don’t know or with information you don’t recognize. Call your regular provider’s main phone number to confirm their identity first.</li>
                     </ul>
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default PrivacyPolicy;