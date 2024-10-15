import React from 'react'
import "./HomeComp1.css"
import HeroVideo from "../../assets/Hero-Video.mp4"

const HomeComp1 = () => {
    return (
        <>
            <div className='HomeComp1_Container'>
                <video className='BGC_Video' autoPlay loop muted playsInline>
                    <source src={HeroVideo} type='video/mp4' />
                </video>
                <div className='ContentContainerHome'>
                    <div className='ContentHolderHome'>
                        <h1 className='HomeHead'>Water <span className='HomeHeadS'>From Air</span></h1>
                        <p className='HomePara'>From sustaining the smallest households to powering the largest industries, we want to create a water-secure planet</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp1