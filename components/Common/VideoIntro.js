import React from 'react';
import { resetIdCounter, Tab, Tabs, TabList, TabPanel } from 'react-tabs';
resetIdCounter();
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const VideoIntro = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="video-wrap">
                <Tabs>
                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                          
                                            <div className="video-content">
                                                <h3>Who’s it for?</h3>
                                                <p>If you have a medical issue or query and you’re in a place where it’s difficult or impossible to reach good medical support, then it’s for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i>
                                            </div>

                                            <div className="video-content">
                                                <h3>Is it similar to a GP consultation?</h3>
                                                <p>Similar, yes. You can book either a 15 or 30 minute consultation with us, and we can make sure it’s with the right professional: most of the time this will be a doctor, but it could be a travel health nurse, an occupational health specialist or psychosocial specialist.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>Is telemedicine for any kind of medical problem?</h3>
                                                <p> It’s not for emergency treatment, but we’re on hand to discuss any other kind of issue. It might be a medical problem, general advice, education or a second opinion.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>Limitation</h3>
                                                <p>It’s obviously not as good as an in-person consultation, but as medical professionals we can make a really good effort for people who are isolated with no option for good medical support. We can often make a diagnosis, suggest treatment, prescribe medication, give an opinion or make a referral.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="video-area">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="video-item">
                                            <div
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="popup-youtube"
                                            > 
                                                <i className="icofont-ui-play"></i>
                                            </div>
                                            <div className="video-content">
                                                <h3>How do I book an appointment?</h3>
                                                <p>Most people will first go to the organisation they work for, who will contact us to make an appointment. We can normally get you an appointment within 24-48 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabList>
                        <Tab>Who's it for?</Tab>
                        <Tab>Consultation</Tab>
                        <Tab>Medical problem</Tab>
                        <Tab>Limitation</Tab>
                        <Tab>Appointment</Tab>
                    </TabList>
                </Tabs>
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

export default VideoIntro;