import React from 'react'
import Marquee from 'react-fast-marquee';

const AboutSlider1 = () => {
    return (
        <>
            <div className='MarqueeSlider mb-4'>
                <div>
                    <Marquee
                        speed={45}
                        direction="right"
                        pauseOnHover={false}
                        gradient={false}
                    >
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                        <span className='MarqueeText'>Aeronero</span>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default AboutSlider1