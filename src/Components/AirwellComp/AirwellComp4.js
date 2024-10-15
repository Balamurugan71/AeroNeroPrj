import React from 'react'
import AirwellProduct from "../../assets/Airwell-Product-Image.png"
import tank from "../../assets/tank.png"
import HelmetGear from "../../assets/maintenanceHelmet.png"
import adFilter from "../../assets/advancedFilteration.png"
import pipe from "../../assets/pipe.png"
import strength from "../../assets/strength.png"
import cube from "../../assets/cube.png"

const AirwellComp4 = () => {
    return (
        <>
            <div className='Nero4Container'>
                <div className='Nero4Holder'>
                    <h2 className='Nero2Head'>Key Features <span className='highlightSpan'>for a Better You</span></h2>
                    <div className='Nero4Section1'>
                        <div className='Nero4Sect1 gap-sm-2'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={tank} alt='tank' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Extensive Storage</h4>
                                    <p className='Nero4cardPara'>Boasts a 200-litre tank capacity to handle peak water demands.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={HelmetGear} alt='HelmetGear' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Industrial Powerhouse</h4>
                                    <p className='Nero4cardPara'>Designed to meet the rigorous demands of industrial settings.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={adFilter} alt='adFilter' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Advanced Filtration</h4>
                                    <p className='Nero4cardPara'>Employs a four-stage filtration process to guarantee pure and safe water.</p>
                                </div>
                            </div>
                        </div>
                        <div className='About1_Section11'>
                            <div className='AboutImage1'>
                                <div className='AboutImageSect1'>
                                    <img className='centerNeroImg' src={AirwellProduct} alt='AirwellProduct' />
                                </div>
                            </div>
                        </div>
                        <div className='Nero4Sect1'>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={pipe} alt='pipe' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Massive Capacity</h4>
                                    <p className='Nero4cardPara'>Produces a substantial 5000 litres of clean water per day, ensuring a consistent supply for large-scale operations.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={strength} alt='strength' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Robust Construction</h4>
                                    <p className='Nero4cardPara'>Built with durable stainless steel and food-grade plastic for longevity.</p>
                                </div>
                            </div>
                            <div className='Nero4Card'>
                                <div className='Nero4Cardimg'>
                                    <img src={cube} alt='cube' />
                                </div>
                                <div className='Nero4CardCont'>
                                    <h4 className='Nero4cardHead'>Modular Design</h4>
                                    <p className='Nero4cardPara'>A scalable system allows for customization to meet specific water requirements.</p>
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

export default AirwellComp4