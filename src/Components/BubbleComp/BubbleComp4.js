import React from 'react'
import BubbleProduct from "../../assets/Product-Bubble.png"
import versatile from "../../assets/versatile.png"
import fourArrow from "../../assets/fourArrows.png"
import portable from "../../assets/portable.png"
import efficient from "../../assets/efficient.png"
import mutePic from "../../assets/mutePic.png"
import outerArrow from "../../assets/outerFourArrows.png"

const BubbleComp4 = () => {
    return (
        <>
            <div className='Nero4Container'>
                <div className='Nero4Holder'>
                    <h2 className='Nero2Head'>Key Features <span className='highlightSpan'>for a Better You</span></h2>
                    <div className='Nero4Section'>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={versatile} alt='versatile' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Versatility</h4>
                                    <p className='Nero4cardPara'>Suitable for both domestic and industrial use.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={fourArrow} alt='fourArrow' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Compact Design</h4>
                                    <p className='Nero4cardPara'>Fits easily in most spaces.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={portable} alt='portable' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Portable</h4>
                                    <p className='Nero4cardPara'>Lightweight and portable at just 30 kg (66 lb).</p>
                                </div>
                            </div>
                        </div>
                        <div className='About1_Section11'>
                            <div className='AboutImage1'>
                                <div className='AboutImageSect1'>
                                    <img className='centerNeroImg' src={BubbleProduct} alt='BubbleProduct' />
                                </div>
                            </div>
                        </div>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={efficient} alt='efficient' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Efficient</h4>
                                    <p className='Nero4cardPara'>Energy-efficient with a power consumption of only 450W.</p>
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
                                    <p className='Nero4cardPara'>Produces up to 20 litres of clean water per day, even in high humidity conditions (80% RH) and temperatures up to 30°C.</p>
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

export default BubbleComp4