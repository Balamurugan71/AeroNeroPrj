import React from 'react'
import "./HomeSlider2.css"
import Marquee from 'react-fast-marquee';
import FSSAI from "../../assets/fssai.png"
import ISO1 from "../../assets/1ISO-27001.png"
import ISO2 from "../../assets/ISO-Certified.png"
import WaterQuality from "../../assets/Water-Quality.png"
import WHO from "../../assets/WHO.png"

const HomeSlider2 = () => {
    return (
        <>
            <div className='HomeSlider2_Container'>
                <div className='HomeSlider2_Holder'>
                    <div>
                        <h2 data-aos="fade-up" className='HomeSlider2_Head'>Certifications</h2>
                    </div>
                    <div>
                        <Marquee
                            speed={70}
                            direction="left"
                            pauseOnHover={true}
                            gradient={false}
                        >
                            <div className='CertifiedLogo'>
                                <img src={FSSAI} alt='FSSAI' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={ISO1} alt='ISO!' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={ISO2} alt='ISO2' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={WaterQuality} alt='WaterQuality' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={WHO} alt='WHO' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={FSSAI} alt='FSSAI' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={ISO1} alt='ISO!' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={ISO2} alt='ISO2' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={WaterQuality} alt='WaterQuality' />
                            </div>
                            <div className='CertifiedLogo'>
                                <img src={WHO} alt='WHO' />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSlider2