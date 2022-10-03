import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Faq = () => {
    return (
        <>
            <TopHeader />

            <Navbar />
            
            <PageBanner 
                pageTitle="FAQ's" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Faq" 
                bgImage="page-title-one" 
            /> 

            <div className="ptb-100">
                <div className="container">
                    <div className="faq-content">
                        <h2>Frequently Asked Questions</h2>
                    
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What is “telehealth,” “telemedicine” or a “virtual visit?”?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Telehealth is the use of digital technologies to deliver medical care, health education, and public health services by connecting multiple users in separate locations. Telehealth encompasses a broad definition of technology-enabled health care services. Telehealth includes telemedicine (diagnosis and treatment of illness or injury), and services such as assessment, monitoring, communications, prevention and education. This is best done via videochat, but it also encompasses voice phone calls and text messages.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What things can my provider do or not do via telehealth?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Using this technology your provider can hear your tone of voice and speech patterns, judge the way you carry yourself, ask questions about your health history, habits and current condition. We can’t, of course, measure your vital signs, listen to your heart and lungs or perform certain tests; like those for reflexes. If needed, medications can be prescribed in most cases.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Will my provider be able to see my medical records?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes. While the provider is looking at you on one computer screen, your entire health record will be presented on a different screen.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Why should I do this?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Primarily, safety and convenience. By staying out of the office and waiting room, you will not be exposed to other patients and those other patients (and our providers!) will not be exposed to you allowing for effective social distancing. Most people find telehealth visits far more convenient – they can avoid getting dressed to go out and driving to the doctor’s office. Your telehealth visit can be done from anywhere; your home, your workplace or even while you are on vacation.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What is required?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        You’ll need an electronic device capable of transmitting and displaying images (such as a laptop or desktop computer with webcam, an iPhone/iPad or Android phone or tablet). This should be set up in a quiet, well-lit room away from away from other people. Prior to the virtual visit, you’ll also be asked to complete and submit the same questionnaire you would as if you were in the office.
                                        Our telehealth system runs on a version of the popular Zoom remote conferencing system that is specifically configured for healthcare and can run on recent versions of the Windows, Linux, Macintosh, iOS, iPadOS and Android operating systems. Full technical details for computers can be found here; and here for mobile devices. Chances are, your device will work fine.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            I’m not very tech-savvy. Can I do this?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        The Zoom platform is very user friendly and requires no technical expertise. Once you receive the email it’s a matter of clicking a few links and allowing Zoom to run on your system. If you’ve never before participated in a Zoom meeting and would like to ensure your success, you can try it out on a test meeting.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="g">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                                Will my insurance cover it?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes. If you’re on Medicare, for services starting March 6, 2020 and for the duration of the COVID-19 Public Health Emergency, Medicare will make payment for Medicare telehealth services furnished to patients in broader circumstances. Other insurance programs may vary.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="h">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            What if I need more than can be done in a telehealth visit?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        If you and your provider, working together during the virtual session, determine that more is needed than can be done remotely, you will be scheduled for an in-office visit or referral to another facility. If a subsequent office visit IS needed (you may need an injection, for example), that visit can be done on a quick in-and-out basis.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="i">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <span>
                                            Is my health information kept private?
                                        </span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes. In many ways, telehealth is MORE private than an in-office visit. Nobody will see you in the waiting room, nobody will see your car in the parking lot and nobody will overhear any of your discussions with medical personnel. Your actual interaction with the provider will be encrypted end-to-end and a recording stored on a secure server. This is in full compliance with the Health Insurance Portability and Accounting Act (HIPAA).
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Faq;