import React from 'react'
import "./HomeComp8.css"
import MobileImage from "../../assets/Aeronero-Mobile.png"
import RealTime from "../../assets/real-time.png"
import AlertImage from "../../assets/alert.png"
import ServiceImage from "../../assets/service.png"
import Usage from "../../assets/usage.png"

const HomeComp8 = () => {
    return (
        <>
            <div className='HomeComp8_Container'>
                <div className='HomeComp8_Holder'>
                    <div className='ImageCont8'>
                        <img src={MobileImage} alt='MobileImage' data-aos="fade-right" />
                    </div>
                    <div className='CardCont8'>
                        <div className='CardSect'>
                            <div className='Card8'>
                                <div className='CardImageSect'>
                                    <img src={RealTime} alt='RealTime' />
                                </div>
                                <div className='CardContentSect'>
                                    <h2>Real time</h2>
                                    <p>Get live updates and monitor the water levels and humidity</p>
                                </div>
                            </div>
                            <div className='Card8'>
                                <div className='CardImageSect'>
                                    <img src={AlertImage} alt='AlertImage' />
                                </div>
                                <div className='CardContentSect'>
                                    <h2>Alerts</h2>
                                    <p>Receive instant notifications for important updates</p>
                                </div>
                            </div>
                        </div>
                        <div className='CardSect'>
                            <div className='Card8'>
                                <div className='CardImageSect'>
                                    <img src={ServiceImage} alt='ServiceImage' />
                                </div>
                                <div className='CardContentSect'>
                                    <h2>Service</h2>
                                    <p>Stay on top of your service schedules to avoid downtime</p>
                                </div>
                            </div>
                            <div className='Card8'>
                                <div className='CardImageSect'>
                                    <img src={Usage} alt='Usage' />
                                </div>
                                <div className='CardContentSect'>
                                    <h2>Usage</h2>
                                    <p>Track machine performance and metrics directly from your app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp8