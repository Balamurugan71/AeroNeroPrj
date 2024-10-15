import React from 'react'
import "./TechComp3.css"
import Tech3Image from "../../assets/techImage.png"

const TechComp3 = () => {
    return (
        <>
            <div className='TechComp3_Container'>
                <div className='TechComp3_Holder'>
                    <div className='TechComp3_Section'>
                        <h2 className='HeadComp6' data-aos="fade-up">Our commitment <span className='highlightSpan'>to purity</span></h2>
                        <div className='Tech3Cont'>
                            <div className='TechContent'>
                                <p>Aeronero’s atmospheric water generation technology ensures the highest standards of water quality. Every drop of water produced by our systems undergoes rigorous testing and filtration to eliminate impurities and contaminants.</p>
                                <a href='https://aeronero.life/wp-content/uploads/2024/09/Aeronero-Solutions-2502917-001-26.08.2024-1.pdf' target='_blank' rel="noopener noreferrer"><button className='TechPDFButton'>Read our Water Quality Report</button></a>
                            </div>
                            <img className='Tech3Image' src={Tech3Image} alt='Tech3Image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechComp3