import React from 'react'
import "./HomeComp13.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const HomeComp13 = () => {
    return (
        <>
            <div className='Home13_Container'>
                <div className='Home13_Holder'>
                    <h2 className='HeadComp6' data-aos="fade-up">Real Water Warriors, <span className='highlightSpan'>Real Results</span></h2>
                    <div className='SliderCont'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            centeredSlides={false}
                            effect={'none'}
                            autoplay={{
                                delay: 3500,
                            }}
                            loop={true}
                            breakpoints={{
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1326: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                2056: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay]}
                            className='HomeSlider'
                        >
                            <SwiperSlide>
                                <a href='https://youtu.be/3ZZCIbj00-M' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider neha'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://youtu.be/ELzd_7eqmTA' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider pat'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://youtu.be/fX7dynlyeJ0' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider kiren'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://youtu.be/sWdJ21_NhPw' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider suba'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://youtu.be/3wmhx64w18o' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider nane'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a href='https://youtu.be/_0IChm2oBao' target='_blank' rel="noopener noreferrer">
                                    <div className='bgImageSlider relja'>
                                        <div className='PlayIconDiv'><FontAwesomeIcon className='PlayIcon' icon={faCirclePlay} /></div>
                                    </div>
                                </a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp13