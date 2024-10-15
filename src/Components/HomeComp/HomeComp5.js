import React from 'react'
import "./HomeComp5.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import NeroImage from "../../assets/Nero-Main.png"
import Bubble from "../../assets/Bubble.png"
import Drizzle from "../../assets/Drizzle.png"
import Thunder from "../../assets/Thunder.png"
import Airwell from "../../assets/Airwell.png"
import { NavLink } from 'react-router-dom';

const HomeComp5 = () => {

    return (
        <>
            <div className='HomeComp5_Container'>
                <div className='HomeComp5_Holder'>
                    <div className='HomeComp5_Section1'>
                        <h2 data-aos="fade-up">Explore <span className='highlightSpan'>Our Products</span></h2>
                    </div>
                    <div className='HomeComp5_Section2'>
                        <div>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={3}
                                loop={true}
                                coverflowEffect={{
                                    rotate: 32,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                navigation={true}
                                breakpoints={{
                                    425: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                    1326: {
                                        slidesPerView: 5,
                                    },
                                    1440: {
                                        slidesPerView: 3,
                                    },
                                    2056: {
                                        slidesPerView: 5,
                                    },
                                }}
                                modules={[EffectCoverflow, Navigation]}
                            >
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={NeroImage} alt='NeroImage' />
                                        <NavLink className="ExploreLink" to="/nero"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Bubble} alt='Bubble' />
                                        <NavLink className="ExploreLink" to="/bubble"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Drizzle} alt='Drizzle' />
                                        <NavLink className="ExploreLink" to="/drizzle"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Thunder} alt='Thunder' />
                                        <NavLink className="ExploreLink" to="/thunder"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Airwell} alt='Airwell' />
                                        <NavLink className="ExploreLink" to="/airwell"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={NeroImage} alt='NeroImage' />
                                        <NavLink className="ExploreLink" to="/nero"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Bubble} alt='Bubble' />
                                        <NavLink className="ExploreLink" to="/bubble"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Drizzle} alt='Drizzle' />
                                        <NavLink className="ExploreLink" to="/drizzle"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Thunder} alt='Thunder' />
                                        <NavLink className="ExploreLink" to="/thunder"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='CarouselImageCont'>
                                        <img className='CarouselImage' src={Airwell} alt='Airwell' />
                                        <NavLink className="ExploreLink" to="/airwell"><button className='exploreButton'>Explore</button></NavLink>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp5