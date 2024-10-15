import React from 'react'
import "./HomeComp12.css"
import Map from "../../assets/Map.png"

const HomeComp12 = () => {
    return (
        <>
            <div className='Home12_Container'>
                <div className='Home12_Holder'>
                    <h2 className='HeadComp6' data-aos="fade-up">World on Verge <span className='highlightSpan'>of Water Scarcity</span></h2>
                    <p className='ParaComp6' data-aos="fade-up">Only 1,036 m³ of water is available per person, which is barely above the scarcity level of 1,000 m³</p>
                    <div className='MapSect'>
                        <img src={Map} alt='Map' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp12