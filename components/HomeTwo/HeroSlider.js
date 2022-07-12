import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items:1,
    loop:true,
    margin:0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay:false,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>"
    ],
};

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            {display ? <OwlCarousel 
                className="home-slider home-slider-two owl-carousel owl-theme"
                {...options}
            >
                <div className="slider-item slider-item-img-two">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img src="/images/about-shape1.png" alt="Shape" />
                                    </div>
                                    <h1>We have Fantastic Doctors and Dentist</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <div className="common-btn">
                                        <Link href="/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img-three">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img src="/images/about-shape1.png" alt="Shape" />
                                    </div>
                                    <h1>We Always Provide Best Services</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    
                                    <div className="common-btn">
                                        <Link href="/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item slider-item-img-four">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="slider-text">
                                    <div className="slider-shape">
                                        <img src="/images/about-shape1.png" alt="Shape" />
                                    </div>
                                    <h1>Hign Quality Medicines at Lowest Rates</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    
                                    <div className="common-btn">
                                        <Link href="/appointment">
                                            <a>Get Appointment</a>
                                        </Link>
                                        <Link href="/about">
                                            <a className="cmn-btn-right">Learn More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default HeroSlider;