import React from 'react';
import "./Banner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerOne from "../../../media/images/banner.png"
import bannerTwo from "../../../media/images/banner2.png"
import bannerThree from "../../../media/images/banner3.png"

const Banner = () => {
    return (
        <div className='banner-container'>
            <Carousel className='carousel-items' infiniteLoop={true} showThumbs={false} dynamicHeight={true} autoPlay interval="10000" transitionTime="2000">
                <div>
                    <div className='banner-content'>
                    <p>"Welcome To"</p>
                        <h2>Jade Mills</h2>
                        
                    </div>
                    <img src={bannerOne} alt='' />
                    <p className="legend">NUMBER #1 BRAVELY HILLS REALTOR</p>
                </div>
                <div>
                    <div className='banner-content'>
                        <p>"Member Of"</p>
                        <h2>Luxury Presence</h2>
                    </div>
                    <img src={bannerTwo} alt='' />
                    <p className="legend">EXTRA ORDINARY LUXURY HOMES</p>
                </div>
                <div>
                    <div className='banner-content'>
                        <p>"Unparalleled Global"</p>
                        <h2>Marketing</h2>
                    </div>
                    <img src={bannerThree} alt='' />
                    <p className="legend">WORLD CLASS SERVICE</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;