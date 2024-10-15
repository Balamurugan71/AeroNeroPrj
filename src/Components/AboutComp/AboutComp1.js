import React from 'react'
import "./AboutComp1.css"
import ProductNero from "../../assets/Product-Nero.png"

const AboutComp1 = () => {
    return (
        <>
            <div className='About1_Container'>
                <div className='About1_Holder'>
                    <div className='About1_Section0 smButton'>
                        <a className='linkComp3' href='#Footer-Enquiry'><button className='HomeComp3_button'>
                            <span>Contact Sales</span>
                        </button></a>
                    </div>
                    <div className='About1_Section1'>
                        <div className='AboutImage'>
                            <div className='AboutImageSect'>
                                <img src={ProductNero} alt='ProductNero' />
                            </div>
                        </div>
                        <div className='SonarCont'>
                            <div className='SonarSect'>
                                <div className='SonarWave Sonar1'></div>
                                <div className='SonarWave Sonar2'></div>
                                <div className='SonarWave Sonar3'></div>
                            </div>
                        </div>
                    </div>
                    <div className='About1_Section2'>
                        <h2 className='About1_Head1'>Water from Air:</h2>
                        <h2 className='About1_Head2'>A Sustainable Solution</h2>
                        <p className='About1_Para1'>At Aeronero, we believe that everyone deserves access to clean drinking water. Our mission is to make this a reality by providing innovative solutions that extract water from the atmosphere, ensuring a sustainable future for generations to come.</p>
                        <p className='About1_Para2'>Experience the future of water, now!</p>
                        <a className='linkComp3 lgButton' href='#Footer-Enquiry'><button className='HomeComp3_button'>
                            <span>Contact Sales</span>
                        </button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp1