import React from 'react';
import Link from 'next/link';

const AboutCovid19 = () => {
    return (
        <div className="about-area about-area-two pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-item">
                            <div className="about-left">
                                <img src="/images/about2.jpg" alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-item about-right">
                            <img src="/images/about-shape1.png" alt="About" />

                            <h2>Know More Info About Covid-19</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here, making it look like readable English.</p>

                            <Link href="/about">
                                <a>Know More</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCovid19;