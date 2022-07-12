import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqSection = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="faq-area-two ptb-100">
                <div className="faq-shape">
                    <img src="/images/faq-shape1.png" alt="Faq" />
                    <img src="/images/faq-shape2.png" alt="Faq" />
                </div>

                <div className="container">
                    <div className="section-title">
                        <h2>Frequently Asked & Queastions</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-img">
                                <img src="/images/faq-main.jpg" alt="Faq" />

                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className="popup-youtube"
                                > 
                                    <i className="icofont-ui-play"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                What is the source of the virus?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                How does the virus spread?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Who has had COVID-19 spread the illness to others?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Will warm weather stop the outbreak of COVID-19?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                What is community spread?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default FaqSection;