import React from 'react'
import "./HomeComp2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const HomeComp2 = () => {
    return (
        <>
            <div className='HomeComp2_Container'>
                <div className='HomeComp2_Holder'>
                    <h2 data-aos="fade-up" className='HomeComp2_Content'><span className='highlightSpan'>‘Aeronero’</span> is a global company that leverages state-of-the-art technology to provide reliable, sustainable, and eco-friendly water solutions. Our <span className='highlightSpan'>air water generators (AWG)</span> extract moisture from the air and converts it into pure drinking water, ensuring a constant and safe water supply.</h2>
                    <a href='https://youtu.be/QQlNDvyHZYM' target='_blank' rel="noopener noreferrer"><button className='pulseButton'>How Awgs works <FontAwesomeIcon icon={faCirclePlay} />
                        <div className='pulseEffect'></div>
                    </button></a>
                </div>
            </div>
        </>
    )
}

export default HomeComp2