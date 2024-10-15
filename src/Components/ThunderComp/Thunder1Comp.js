import React from 'react'
import "./Thunder1Comp.css"
import Rating from "../../assets/4.9-star.png"
import ThunderProduct from "../../assets/Product-Thunder.png"

const Thunder1Comp = () => {
    return (
        <>
            <div className='thunderComp'>
                <div className='Nero1Holder'>
                    <div className='Nero1Section1'>
                        <div className='Nero1HeadSect'>
                            <h2 className='Nero1Head'>Thunder</h2>
                            <img className='Nero1Rate' src={Rating} alt='Rating' />
                        </div>
                        <p className='Nero1Para1'>Powering Communities with Pure Water</p>
                        <p className='Nero1Para2'>Delivering up to 150 litres of clean water daily, Thunder is the ideal solution for communities, NGOs, offices, factories, and institutions seeking water independence.</p>
                        <a href="#Footer-Enquiry"><button className='Nero1Button'>Contact Sales</button></a>
                    </div>
                    <div className='Nero1Section2'>
                        <div>
                            <img className='Nero1Product' src={ThunderProduct} alt='ThunderProduct' />
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

export default Thunder1Comp