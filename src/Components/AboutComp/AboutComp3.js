import React from 'react'
import "./AboutComp3.css"
import DurgaDas from "../../assets/Durga-CEO.png"

const AboutComp3 = () => {
    return (
        <>
            <div className='About3_Container'>
                <div className='About3_Holder'>
                    <h2 className='About3_Content_Head' data-aos="fade-up">Origin of <span className='highlightSpan'>AERONERO</span></h2>
                    <p className='About3_Content_Para' data-aos="fade-up">Aeronero products come powered with the latest technology that gives you real-time data</p>
                    <div className='CEOProfile'>
                        <div className='CEOProfileContent'>
                            <p className='CEOPara'><span className='CEO'>Durga Das</span> is an accomplished entrepreneur and former professional sportswoman who has made significant strides in both the sports and business worlds. She represented India in cricket, captained the US cricket team, and later pursued a career in professional golf. Her entrepreneurial journey began at the age of 14, driven by personal circumstances, and has been marked by resilience and continuous growth.</p>
                            <p className='CEOPara'>As the founder of Aeronero, Durga is leading the charge in revolutionizing the water industry with innovative air-water generation (AWG) technology. Aeronero converts humidity into clean water, addressing global water scarcity with cutting-edge solutions. Beyond her business achievements, Durga is also deeply committed to social responsibility, founding the charity WODER to combat water scarcity in refugee camps and promote water independence for women.</p>
                            <p className='CEOPara'>Durga’s visionary leadership has earned her accolades, including the “Best Innovator” award at the HIEx platform at the World Health Assembly and a Woman Leadership award from Ms. Kiran Bedi. She also holds advisory roles on various international platforms, contributing over 30 years of experience in startups, business development, and mentoring new-age entrepreneurs.</p>
                        </div>
                        <div className='CEOProfilePic' data-aos="fade-left">
                            <img src={DurgaDas} alt='DurgaDas' />
                            <h2 className='CEOName'>Durga Das</h2>
                            <p className='CEOTitle'>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp3