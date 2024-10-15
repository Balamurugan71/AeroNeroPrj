import React from 'react'
import "./Bubble1Comp.css"
import Rating from "../../assets/4.9-star.png"
import BubbleProduct from "../../assets/Product-Bubble.png"

const Bubble1Comp = () => {
    return (
        <>
            <div className='bubbleComp'>
                <div className='Nero1Holder'>
                    <div className='Nero1Section1'>
                        <div className='Nero1HeadSect'>
                            <h2 className='Nero1Head'>Bubble</h2>
                            <img className='Nero1Rate' src={Rating} alt='Rating' />
                        </div>
                        <p className='Nero1Para1'>Pure Water for Every Home</p>
                        <p className='Nero1Para2'>Affordable, efficient, and reliable, the Bubble Series delivers 15-20 liters of clean drinking water daily, perfect for households and small offices.</p>
                        <a href="#Footer-Enquiry"><button className='Nero1Button'>Contact Sales</button></a>
                    </div>
                    <div className='Nero1Section2'>
                        <div>
                            <img className='Nero1Product' src={BubbleProduct} alt='BubbleProduct' />
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

export default Bubble1Comp