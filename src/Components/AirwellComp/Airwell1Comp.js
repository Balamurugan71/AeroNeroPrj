import React from 'react'
import "./Airwell1Comp.css"
import Rating from "../../assets/4.9-star.png"
import AirwellProduct from "../../assets/Airwell-Product-Image.png"

const Airwell1Comp = () => {
    return (
        <>
            <div className='airwellComp'>
                <div className='Nero1Holder'>
                    <div className='Nero1Section1'>
                        <div className='Nero1HeadSect'>
                            <h2 className='Nero1Head'>Airwell</h2>
                            <img className='Nero1Rate' src={Rating} alt='Rating' />
                        </div>
                        <p className='Nero1Para1'>Scalable Water Solutions for Every Need</p>
                        <p className='Nero1Para2'>Modular, reliable, and sustainable, Airwell delivers 500-5000 litres of water daily, perfect for offices, NGOs, industries, and hospitality.</p>
                        <a href="#Footer-Enquiry"><button className='Nero1Button'>Contact Sales</button></a>
                    </div>
                    <div className='Nero1Section2'>
                        <div>
                            <img className='Nero1Product' src={AirwellProduct} alt='AirwellProduct' />
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

export default Airwell1Comp