import React from 'react'
import "./NeroComp6.css"

const NeroComp6 = () => {
    return (
        <>
            <div className='Nero6Container'>
                <div className='Nero6Holder'>
                    <h2 className='Nero2Head'>Your Nero machine has <span className='highlightSpan'>3 steps to install and use</span></h2>
                    <div className='Nero6Section'>
                        <div className='Nero6Info package'>
                            <div className='Nero6Content'>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head1'>Step:1</h2>
                                </div>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head2'>Unbox the machine and place it on the counter</h2>
                                </div>
                            </div>
                        </div>
                        <div className='Nero6Info charge'>
                            <div className='Nero6Content'>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head1'>Step:2</h2>
                                </div>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head2'>Plug the machine into an electrical socket</h2>
                                </div>
                            </div>
                        </div>
                        <div className='Nero6Info wait'>
                            <div className='Nero6Content'>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head1'>Step:3</h2>
                                </div>
                                <div className='Nero6HeadCont'>
                                    <h2 className='Nero6Head2'>Wait for 24hrs for the machine to generate a full tank of water</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NeroComp6