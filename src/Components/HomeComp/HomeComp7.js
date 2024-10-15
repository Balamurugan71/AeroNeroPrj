import React from 'react'
import "./HomeComp7.css"
import PurifyIcon from "../../assets/Purity-icon.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const HomeComp7 = () => {
    return (
        <>
            <div className='HomeComp7_Container'>
                <div className='HomeComp7_Holder'>
                    <div className='HomeComp7_Section'>
                        <div className='PurifyCont'>
                            <img src={PurifyIcon} alt='PurifyIcon' />
                            <h3>Purity Levels</h3>
                        </div>
                        <div className='PurifyPara'>
                            <p>Aeronero’s products generate pure alkaline rich water, that contain no bacteria, viruses or chemicals. Read our reports to know more</p>
                        </div>
                        <div className='PurifyButtonCont'>
                            <button className='PurifyButton'><a className='PurifyLink' href="https://aeronero.life/wp-content/uploads/2024/09/Aeronero-Solutions-2502917-001-26.08.2024-1.pdf" target='_blank' rel="noopener noreferrer"><span className='PurifySpan'>quality test report {">"}</span></a></button>
                        </div>
                    </div>
                </div>
            </div >
            <div className='HomeComp7_Containera'>
                <h2 className='HeadComp6' data-aos="fade-up">Powered by <span className='highlightSpan'>advanced IOT</span></h2>
                <p className='ParaComp6' data-aos="fade-up">Aeronero products come powered with the latest technology that gives you real-time data</p>
            </div>
        </>
    )
}

export default HomeComp7