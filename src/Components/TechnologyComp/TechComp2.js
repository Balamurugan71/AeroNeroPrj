import React from 'react'
import { WATERDATA1 } from '../../utils/HomeCardData'

const TechComp2 = () => {
    return (
        <>
            <div className='HomeComp6_Container'>
                <div className='HomeComp6_Holder'>
                    <h2 className='HeadComp6' data-aos="fade-up">The Science <span className='highlightSpan'>Behind Pure Water</span></h2>
                    <p className='ParaComp6' data-aos="fade-up">Aeronero’s patented AWG technology transforms ambient air into pure, refreshing water, by replicating the natural water cycle, through a multi-stage process:</p>
                    <div className='HomeComp6Card'>
                        {
                            WATERDATA1.map((data, index) => (
                                <div key={index} className='CardCont6'>
                                    <div className='ImageCont6'>
                                        <img className='ImageCard6' src={data.image} alt={data.title} />
                                    </div>
                                    <div className='ContentCont6'>
                                        <h2>{data.title}</h2>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechComp2