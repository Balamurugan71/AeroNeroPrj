import React from 'react'
import "./NeroComp2.css"
import HDrop from "../../assets/humidityDrop.png"
import HDropB from "../../assets/HumidityDropB.png"
import Minerals1B from "../../assets/Minerals1.png"
import Minerals1 from "../../assets/Minerals2.png"
import FAir from "../../assets/FilterAir.png"
import FAirB from "../../assets/FilterAirB.png"
import DSlash from "../../assets/DropSlash.png"
import DSlashB from "../../assets/DropSlashB.png"


const NeroComp2 = () => {
    return (
        <>
            <div className='Nero2Container'>
                <div className='Nero2Holder'>
                    <h2 className='Nero2Head'>Experience the future <span className='highlightSpan'>of water with Aeronero.</span></h2>
                    <p className='Nero2Para'>Our innovative AWG technology delivers clean, safe, and sustainable drinking water without compromising convenience. Aeronero is more than just a water purifier; it’s a commitment to your health and the planet.</p>
                    <div className='Nero2CardCont'>
                        <div className='Nero2Card'>
                            <div className="Nero2CardImagSect">
                                <img className='Nero2Image' src={HDrop} alt='HumidityDrop' />
                                <img className='Nero2ImageB' src={HDropB} alt='HumidityDrop' />
                            </div>
                            <p className='Nero2CardPara'>Converts humidity in the air into portable drinking water</p>
                        </div>
                        <div className='Nero2Card'>
                            <div className="Nero2CardImagSect">
                                <img className='Nero2Image' src={Minerals1} alt='Minerals' />
                                <img className='Nero2ImageB' src={Minerals1B} alt='Minerals' />
                            </div>
                            <p className='Nero2CardPara'>Augmented with minerals that gives you high alkaline water with 6.5 to 8.5 PH</p>
                        </div>
                        <div className='Nero2Card'>
                            <div className="Nero2CardImagSect">
                                <img className='Nero2Image' src={FAir} alt='Air Filter' />
                                <img className='Nero2ImageB' src={FAirB} alt='Air Filter' />
                            </div>
                            <p className='Nero2CardPara'>Four layers of filtration and purification</p>
                        </div>
                        <div className='Nero2Card'>
                            <div className="Nero2CardImagSect">
                                <img className='Nero2Image' src={DSlash} alt='Drop' />
                                <img className='Nero2ImageB' src={DSlashB} alt='Drop' />
                            </div>
                            <p className='Nero2CardPara'>Purifies the air and acts as a dehumidifier</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NeroComp2