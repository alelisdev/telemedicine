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
                                                <h3>Hospital Introduction</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
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
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</p>
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
                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia.</p>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabList>
                        <Tab>Hospital Introduction</Tab>
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