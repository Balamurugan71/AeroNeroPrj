import React from 'react'
import "./DrizzleComp4.css"
import Drizzle4Product from "../../assets/Drizzle-product.png"
import fourArrow from "../../assets/fourArrows.png"
import tank from "../../assets/tank.png"
import mutePic from "../../assets/mutePic.png"
import efficient from "../../assets/efficient.png"
import outerArrow from "../../assets/outerFourArrows.png"

const DrizzleComp4 = () => {
    return (
        <>
            <div className='Nero4Container'>
                <div className='Nero4Holder'>
                    <h2 className='Nero2Head'>Key Features <span className='highlightSpan'>for a Better You</span></h2>
                    <div className='Nero4Section1'>
                        <div className='Nero4Sect1 gap-sm-2'>
                            <div className='Nero4Card '>
                                <div className='Nero4Cardimg'>
                                    <img src={efficient} alt='efficient' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Efficient</h4>
                                    <p className='Nero4cardPara'>Energy-efficient with a power consumption of only 650W.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={mutePic} alt='mutePic' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Quiet Operation</h4>
                                    <p className='Nero4cardPara'>Operates quietly with a noise level below 45dB(A).</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={outerArrow} alt='outerArrow' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>High Capacity</h4>
                                    <p className='Nero4cardPara'>Produces up to 40 litres of clean water per day, even in high humidity conditions (80% RH) and temperatures up to 30°C.</p>
                                </div>
                            </div>
                        </div>
                        <div className='About1_Section11'>
                            <div className='AboutImage1'>
                                <div className='AboutImageSect12'>
                                    <img className='centerNeroImg' src={Drizzle4Product} alt='Drizzle4Product' />
                                </div>
                            </div>
                        </div>
                        <div className='Nero4Sect1 gap-sm-2'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={fourArrow} alt='fourArrow' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Compact Design</h4>
                                    <p className='Nero4cardPara'>Fits easily in most spaces with dimensions of 440460710 mm.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={tank} alt='tank' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Large Tank Capacity</h4>
                                    <p className='Nero4cardPara'>Stores up to 15 litres of purified water.</p>
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

export default DrizzleComp4