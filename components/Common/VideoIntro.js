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
                                                <h3>Telemedicine Introduction</h3>
                                                <p>Our products are designed to be simple and intuitive. Leveraging a single meeting place for virtual care, providers and patients easily connect and clients can quickly design and scale their telehealth programs.</p>
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
                                                <h3>About Our Pharmacy</h3>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
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
                                                <h3>Our reasearch center and lab</h3>
                                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master</p>
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
                                                <h3>CCU & ICU</h3>
                                                <p>In practice, what this means is that we will schedule a video visit. You’ll open an application that has been designed specifically for this purpose, on your smartphone, tablet or computer that has high-speed internet access.</p>
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
                                                <h3>Our Doctors</h3>
                                                <p>To help physician practices provide convenient health care access to their patients through secure video visits – and receive full reimbursement tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabList>
                        <Tab>Telemedicine Introduction</Tab>
                        <Tab>Pharmacy</Tab>
                        <Tab>Reasearch & Lab</Tab>
                        <Tab>CCU & ICU</Tab>
                        <Tab>Doctors</Tab>
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