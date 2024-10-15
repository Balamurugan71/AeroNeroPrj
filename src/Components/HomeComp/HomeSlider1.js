import React from 'react'
import "./HomeSlider1.css"
import Marquee from 'react-fast-marquee';

const HomeSlider1 = () => {
    return (
        <>
            <div className='MarqueeSlider'>
                <div>
                    <Marquee
                        speed={45}
                        direction="left"
                        pauseOnHover={false}
                        gradient={false}
                    >
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                        <span className='MarqueeText'>water for all, always</span>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default HomeSlider1