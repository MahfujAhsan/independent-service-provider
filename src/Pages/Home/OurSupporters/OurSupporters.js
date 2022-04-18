import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import supporterA from "../../../media/images/supporters/1.png";
import supporterB from "../../../media/images/supporters/2.png";
import supporterC from "../../../media/images/supporters/3.png";
import supporterD from "../../../media/images/supporters/4.png";
import supporterE from "../../../media/images/supporters/5.png";
import supporterF from "../../../media/images/supporters/6.png";
import supporterG from "../../../media/images/supporters/7.png";
import "./OurSupporters.css";


const OurSupporters = () => {
    const responsive = {
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 464 },items: 2},
        mobile: {breakpoint: { max: 464, min: 0 },items: 1}};
    return (
        <div>
            <div className='carousel-container'>
                <h2 className='carousel-title'>Our Supporters</h2>
                <Carousel infinite={true} customTransition={'transform 1000ms ease-in-out'} autoPlay={true} autoPlaySpeed={1500} centerMode={true} responsive={responsive}>
                    <div>
                        <img src={supporterA} alt="" />
                    </div>
                    <div>
                        <img src={supporterB} alt="" />
                    </div>
                    <div>
                        <img src={supporterC} alt="" />
                    </div>
                    <div>
                        <img src={supporterD} alt="" />
                    </div>
                    <div>
                        <img src={supporterE} alt="" />
                    </div>
                    <div>
                        <img src={supporterF} alt="" />
                    </div>
                    <div>
                        <img src={supporterG} alt="" />
                    </div>
                </Carousel>
            </div>
        </div >
    );
};

export default OurSupporters;