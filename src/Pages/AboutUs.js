import React from 'react'
import Header from '../Components/HeaderSect/Header'
import Footer from '../Components/Footer/Footer'
// import BackToTopButton from '../Components/BackToTop/BackToTopButton'
import AboutComp1 from '../Components/AboutComp/AboutComp1'
import HomeSlider2 from '../Components/HomeComp/HomeSlider2'
import AboutComp2 from '../Components/AboutComp/AboutComp2'
import AboutComp3 from '../Components/AboutComp/AboutComp3'
import AboutComp4 from '../Components/AboutComp/AboutComp4'
import HomeSlider1 from '../Components/HomeComp/HomeSlider1'
import AboutSlider1 from '../Components/AboutComp/AboutSlider1'
import AboutComp5 from '../Components/AboutComp/AboutComp5'
import AboutComp6 from '../Components/AboutComp/AboutComp6'
import AboutComp7 from '../Components/AboutComp/AboutComp7'

const AboutUs = () => {
    return (
        <>
            <Header />
            <AboutComp1 />
            <HomeSlider2 />
            <AboutComp2 />
            <AboutComp3 />
            <AboutSlider1 />
            <HomeSlider1 />
            <AboutComp4 />
            <AboutComp5 />
            <AboutComp6 />
            <AboutComp7 />
            <Footer />
            {/* <BackToTopButton /> */}
        </>
    )
}

export default AboutUs