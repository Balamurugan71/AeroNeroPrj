import React from 'react'
import "./NeroComp4.css"
import ProductNero from "../../assets/Product-Nero.png"
import fourArrow from "../../assets/fourArrows.png"
import mobilePic from "../../assets/mobilePic.png"
import gearPic from "../../assets/gearPic.png"
import mutePic from "../../assets/mutePic.png"

const NeroComp4 = () => {
    return (
        <>
            <div className='Nero4Container'>
                <div className='Nero4Holder'>
                    <h2 className='Nero2Head'>Key Features <span className='highlightSpan'>for a Better You</span></h2>
                    <div className='Nero4Section'>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={mobilePic} alt='mobilePic' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Smart Technology</h4>
                                    <p className='Nero4cardPara'>Monitor water production and quality through our app.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={gearPic} alt='gearPic' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Easy Maintenance</h4>
                                    <p className='Nero4cardPara'>Minimal upkeep for hassle-free use</p>
                                </div>
                            </div>
                        </div>
                        <div className='About1_Section11'>
                            <div className='AboutImage1'>
                                <div className='AboutImageSect1'>
                                    <img className='centerNeroImg' src={ProductNero} alt='ProductNero' />
                                </div>
                            </div>
                        </div>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={fourArrow} alt='fourArrow' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Compact Design</h4>
                                    <p className='Nero4cardPara'>Fits seamlessly into your living space.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={mutePic} alt='mutePic' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Quiet Operation</h4>
                                    <p className='Nero4cardPara'>Doesn't disrupt your daily routine</p>
                                </div>
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
                </div>
            </div>
        </>
    )
}

export default NeroComp4