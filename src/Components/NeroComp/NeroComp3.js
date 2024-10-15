import React from 'react'
import "./NeroComp3.css"
import FilterImg from "../../assets/filter.png"
import CarbonFilter from "../../assets/Carbon.png"
import UVFImg from "../../assets/uvf.png"
import mineralImg from "../../assets/Minerals.png"

const NeroComp3 = () => {
    return (
        <>
            <div className='Nero3Container'>
                <div className='Nero3Holder'>
                    <h2 className='Nero2Head'>The Science <span className='highlightSpan'>Behind Pure Water</span></h2>
                    <p className='Nero2Para'>Nero uses Aeronero’s patented technology to transform ambient air into pure, refreshing water, by replicating the natural water cycle, through a multi-stage process:</p>
                    <div className='Nero3AccordionSect'>
                        <div className='Nero3Accordion'>
                            <div className='AccordionImage'>
                                <img src={FilterImg} alt='FilterImg' />
                            </div>
                            <div className='AccordionContent'>
                                <h2>Air Filtration</h2>
                                <img src={FilterImg} alt='FilterImg' />
                                <p>Impurities are removed from the air.</p>
                            </div>
                            <div className='AccordionImage'>
                                <img src={FilterImg} alt='FilterImg' />
                            </div>
                        </div>
                        <div className='Nero3Accordion'>
                            <div className='AccordionImage'>
                                <img src={CarbonFilter} alt='CarbonFilter' />
                            </div>
                            <div className='AccordionContent'>
                                <h2>Carbon Filtration</h2>
                                <img src={CarbonFilter} alt='CarbonFilter' />
                                <p>Unpleasant tastes, odours, and colours are eliminated.</p>
                            </div>
                            <div className='AccordionImage'>
                                <img src={CarbonFilter} alt='CarbonFilter' />
                            </div>
                        </div>
                        <div className='Nero3Accordion'>
                            <div className='AccordionImage'>
                                <img src={UVFImg} alt='UVFImg' />
                            </div>
                            <div className='AccordionContent'>
                                <h2>UV Purification</h2>
                                <img src={UVFImg} alt='UVFImg' />
                                <p>Harmful bacteria are eradicated.</p>
                            </div>
                            <div className='AccordionImage'>
                                <img src={UVFImg} alt='UVFImg' />
                            </div>
                        </div>
                        <div className='Nero3Accordion'>
                            <div className='AccordionImage'>
                                <img src={mineralImg} alt='mineralImg' />
                            </div>
                            <div className='AccordionContent'>
                                <h2>Mineralization</h2>
                                <img src={mineralImg} alt='mineralImg' />
                                <p>Essential minerals are added to create alkaline water with a pH of 6.5-8.5.</p>
                            </div>
                            <div className='AccordionImage'>
                                <img src={mineralImg} alt='mineralImg' />
                            </div>
                        </div>
                    </div>
                    <a className='linkComp3' href='#Footer-Enquiry'><button className='HomeComp3_button'>
                        <span>Contact Sales</span>
                    </button></a>
                </div>
            </div>
        </>
    )
}

export default NeroComp3