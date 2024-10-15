import React from 'react'
import "./NeroComp1.css"
import Rating from "../../assets/4.9-star.png"
import NeroProductPic from "../../assets/Product-Nero.png"

const NeroComp1 = () => {
    return (
        <>
            <div className='Nero1Container'>
                <div className='Nero1Holder'>
                    <div className='Nero1Section1'>
                        <div className='Nero1HeadSect'>
                            <h2 className='Nero1Head'>Nero</h2>
                            <img className='Nero1Rate' src={Rating} alt='Rating' />
                        </div>
                        <p className='Nero1Para1'>Your pure water solution</p>
                        <p className='Nero1Para2'>Compact, energy-efficient, and affordable, Nero AWG delivers up to 10 litres of pure drinking water daily, making it perfect for individuals and young couples.</p>
                        <a href="#Footer-Enquiry"><button className='Nero1Button'>Contact Sales</button></a>
                    </div>
                    <div className='Nero1Section2'>
                        <div>
                            <img className='Nero1Product' src={NeroProductPic} alt='NeroProductPic' />
                        </div>
                    </div>
                    <div className='Nero1Section3'>
                        <a href="#Footer-Enquiry"><button className='Nero1Button1'>Contact Sales</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NeroComp1