import React from 'react'
import "./HomeComp6.css"
import { WATERDATA } from '../../utils/HomeCardData'

const HomeComp6 = () => {
    return (
        <>
            <div className='HomeComp6_Container'>
                <div className='HomeComp6_Holder'>
                    <h2 className='HeadComp6' data-aos="fade-up"><span className='highlightSpan'>Just how water</span> is supposed to be.</h2>
                    <p className='ParaComp6' data-aos="fade-up">Aeronero’s proprietary 5-Step advanced filtration system cleans your water in a<br />
                        way where other existing technologies fail.</p>
                    <div className='HomeComp6Card'>
                        {
                            WATERDATA.map((data, index) => (
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

export default HomeComp6