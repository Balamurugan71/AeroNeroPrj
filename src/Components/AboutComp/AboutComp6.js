import React from 'react'
import "./AboutComp6.css"
import Pipe from "../../assets/Frame-171.svg"
import saveHeart from "../../assets/Frame-170.svg"
import Bulb from "../../assets/Frame-168.svg"
import River from "../../assets/Frame-169.svg"

const AboutComp6 = () => {
    return (
        <>
            <div className='Home10_Container'>
                <div className='Home10_Holder'>
                    <div className='HomeComp5_Section1'>
                        <h2 data-aos="fade-up">Our <span className='highlightSpan'>Impact Story</span></h2>
                    </div>
                    <div className='About6_Section'>
                        <div className='StatsContSect statsHover'>
                            <img className='StatsImage' src={Pipe} alt='Pipe' />
                            <div className='StatsCont'>
                                <h3>200+</h3>
                                <p>Solutions Delivered</p>
                            </div>
                        </div>
                        <div className='StatsContSect statsHover'>
                            <img className='StatsImage' src={saveHeart} alt='saveHeart' />
                            <div className='StatsCont'>
                                <h3>4 Million</h3>
                                <p>Lives Benefited Till Date</p>
                            </div>
                        </div>
                        <div className='StatsContSect statsHover'>
                            <img className='StatsImage' src={Bulb} alt='Bulb' />
                            <div className='StatsCont'>
                                <h3>12 million</h3>
                                <p>Litres of Water Generated Till Date</p>
                            </div>
                        </div>
                        <div className='StatsContSect statsHover'>
                            <img className='StatsImage' src={River} alt='River' />
                            <div className='StatsCont'>
                                <h3>50 million</h3>
                                <p>Litres of Water Saved Till Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp6