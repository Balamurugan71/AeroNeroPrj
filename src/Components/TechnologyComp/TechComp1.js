import React from 'react'
import "./TechComp1.css"
import HeroVid1 from "../../assets/TechHero1.mp4"
import HeroVid2 from "../../assets/TechHero2.mp4"

const TechComp1 = () => {
    return (
        <>
            <div className='TechComp1_Container'>
                <video className='Tech_Video' autoPlay loop muted playsInline>
                    <source src={HeroVid1} type='video/mp4' />
                </video>
                <video className='Tech_Video1' autoPlay loop muted playsInline>
                    <source src={HeroVid2} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default TechComp1