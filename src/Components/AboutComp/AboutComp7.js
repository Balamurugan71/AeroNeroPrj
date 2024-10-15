import React, { useRef } from 'react'
import "./AboutComp7.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';

const AboutComp7 = () => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='About7_Container'>
                <div className='About7_Holder'>
                    <h2 className='About7Head' data-aos="fade-up">Awards</h2>
                    <div className='SliderCont'>
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}
                        >
                            <div key={1}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_wha77-waterforall-healthinnovationexchange-activity-7203274223039991808-zPVT/?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img1'>
                                    </div>
                                </a>
                            </div>
                            <div key={2}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_secondact-durgadas-aeronerosolutions-activity-7227012481016020993-oij3/?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img2'>
                                    </div>
                                </a>
                            </div>
                            <div key={3}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_aeronero-awg-purewaterfromair-activity-7204837257827000320--hGU?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img3'>
                                    </div>
                                </a>
                            </div>
                            <div key={4}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_wha77-waterforall-healthinnovationexchange-activity-7203274223039991808-zPVT/?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img1'>
                                    </div>
                                </a>
                            </div>
                            <div key={5}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_secondact-durgadas-aeronerosolutions-activity-7227012481016020993-oij3/?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img2'>
                                    </div>
                                </a>
                            </div>
                            <div key={6}>
                                <a href='https://www.linkedin.com/posts/aeronerolife_aeronero-awg-purewaterfromair-activity-7204837257827000320--hGU?utm_source=share&utm_medium=member_android' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider img3'>
                                    </div>
                                </a>
                            </div>
                        </Slider>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button className="buttonLeft" onClick={previous}>
                            <FontAwesomeIcon icon={faLeftLong} />
                        </button>
                        <button className="buttonRight" onClick={next}>
                            <FontAwesomeIcon icon={faRightLong} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp7