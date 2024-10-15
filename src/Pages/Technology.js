import React from 'react'
import Header from '../Components/HeaderSect/Header'
import Footer from "../Components/Footer/Footer"
import TechComp1 from '../Components/TechnologyComp/TechComp1'
import TechComp2 from '../Components/TechnologyComp/TechComp2'
import HomeSlider2 from '../Components/HomeComp/HomeSlider2'
import HomeComp11 from '../Components/HomeComp/HomeComp11'
import TechComp3 from '../Components/TechnologyComp/TechComp3'

const Technology = () => {
    return (
        <>
            <Header />
            <TechComp1 />
            <TechComp2 />
            <TechComp3 />
            <HomeComp11 />
            <HomeSlider2 />
            <Footer />
        </>
    )
}

export default Technology