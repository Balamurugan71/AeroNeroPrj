import React from 'react'
import "./Drizzle1Comp.css"
import Rating from "../../assets/4.9-star.png"
import DrizzleProduct from "../../assets/Drizzle-product.png"

const Drizzle1Comp = () => {
    return (
        <>
            <div className='drizzleComp'>
                <div className='Nero1Holder'>
                    <div className='Nero1Section1'>
                        <div className='Nero1HeadSect'>
                            <h2 className='Nero1Head'>Drizzle</h2>
                            <img className='Nero1Rate' src={Rating} alt='Rating' />
                        </div>
                        <p className='Nero1Para1'>Revolutionizing Water Generation</p>
                        <p className='Nero1Para2'>Experience the future of water with Drizzle. Our cutting-edge technology produces 35-40 litres of clean water daily, ideal for commercial spaces like offices, restaurants, and cafes.</p>
                        <a href="#Footer-Enquiry"><button className='Nero1Button'>Contact Sales</button></a>
                    </div>
                    <div className='Nero1Section2'>
                        <div>
                            <img className='Nero1Product' src={DrizzleProduct} alt='DrizzleProduct' />
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

export default Drizzle1Comp