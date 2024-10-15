import React from 'react'
import ThunderProduct from "../../assets/Product-Thunder.png"
import HelmetGear from "../../assets/maintenanceHelmet.png"
import adFilter from "../../assets/advancedFilteration.png"
import shield from "../../assets/shield.png"
import tank from "../../assets/tank.png"
import outerArrow from "../../assets/outerFourArrows.png"

const ThunderComp4 = () => {
    return (
        <>
            <div className='Nero4Container'>
                <div className='Nero4Holder'>
                    <h2 className='Nero2Head'>Key Features <span className='highlightSpan'>for a Better You</span></h2>
                    <div className='Nero4Section1'>
                        <div className='Nero4Sect1 gap-sm-2'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={shield} alt='shield' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Durable Construction</h4>
                                    <p className='Nero4cardPara'>Features a durable stainless steel body and a food-grade plastic water tank.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={HelmetGear} alt='HelmetGear' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Industrial-Grade</h4>
                                    <p className='Nero4cardPara'>Designed for heavy-duty use in industrial settings.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={outerArrow} alt='outerArrow' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>High Capacity</h4>
                                    <p className='Nero4cardPara'>Produces up to 150 litres of clean water per day, even in high humidity conditions (80% RH) and temperatures up to 30°C.</p>
                                </div>
                            </div>
                        </div>
                        <div className='About1_Section11'>
                            <div className='AboutImage1'>
                                <div className='AboutImageSect1'>
                                    <img className='centerNeroImg' src={ThunderProduct} alt='ThunderProduct' />
                                </div>
                            </div>
                        </div>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={adFilter} alt='adFilter' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Advanced Filtration</h4>
                                    <p className='Nero4cardPara'>Employs a four-stage filtration system that removes sediment, impurities, and contaminants, ensuring clean and safe drinking water.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={tank} alt='tank' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Large Tank Capacity</h4>
                                    <p className='Nero4cardPara'>Stores up to 100 litres of purified water.</p>
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

export default ThunderComp4