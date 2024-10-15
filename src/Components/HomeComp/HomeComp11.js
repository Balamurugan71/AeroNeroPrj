import React, { useState } from 'react'
import "./HomeComp11.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons'
import Aeronero from "../../assets/Aeronero.png"
import RO from "../../assets/RO.png"
import Bottle from "../../assets/Bottle.png"

const HomeComp11 = () => {

    const [isStatShow, setIsStatShow] = useState(false)

    return (
        <>
            <div className='Home11_Container'>
                <div className='Home11_Holder'>
                    <div className='HomeComp5_Section1'>
                        <h2 data-aos="fade-up">Comparison with <span className='highlightSpan'>Traditional Water Solutions</span></h2>
                    </div>
                    <div className='Home11_Section'>
                        <div>
                            <ul className='TabButton'>
                                <li onClick={() => setIsStatShow(!isStatShow)} className={`TabListButton ${!isStatShow ? 'selected' : ''}`}>Rupees <FontAwesomeIcon icon={faIndianRupeeSign} /></li>
                                <li onClick={() => setIsStatShow(!isStatShow)} className={`TabListButton ${isStatShow ? 'selected' : ''}`}>Dollar <FontAwesomeIcon icon={faDollarSign} /></li>
                            </ul>
                        </div>
                        <div>
                            <div className='TableCont'>
                                <table className='Table11'>
                                    <thead>
                                        <tr>
                                            <th className='TableH1'><h3>Parameter</h3></th>
                                            <th className='TableH2'>
                                                <div className='Table11Head'>
                                                    <img src={Aeronero} alt='Aeronero' />
                                                    <h3>Aeronero Water</h3>
                                                </div>
                                            </th>
                                            <th className='TableH3'>
                                                <div className='Table11Head'>
                                                    <img src={RO} alt='RO' />
                                                    <h3>RO Water</h3>
                                                </div>
                                            </th>
                                            <th className='TableH4'>
                                                <div className='Table11Head'>
                                                    <img src={Bottle} alt='Bottle' />
                                                    <h3>Bottled Water</h3>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='Row1 pt-3'><span>Ground Water</span></td>
                                            <td className='Row2 pt-3'><span>Saves Ground Water</span></td>
                                            <td className='Row3 pt-3'><span>Polluting & Exhausting Ground Water</span></td>
                                            <td className='Row4 pt-3'><span>Depleting Ground Water</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Air Purification</span></td>
                                            <td className='Row2'><span>Cleans the Air</span></td>
                                            <td className='Row3'><span>NA</span></td>
                                            <td className='Row4'><span>NA</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Carbon Footprint</span></td>
                                            <td className='Row2'><span>Low</span></td>
                                            <td className='Row3'><span>High</span></td>
                                            <td className='Row4'><span>High (Transportation also required)</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Plastic Pollution</span></td>
                                            <td className='Row2'><span>Nil</span></td>
                                            <td className='Row3'><span>High</span></td>
                                            <td className='Row4'><span>High</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Water Wastage</span></td>
                                            <td className='Row2'><span>Nil</span></td>
                                            <td className='Row3'><span>More than 50%</span></td>
                                            <td className='Row4'><span>More than 50%</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Plants</span></td>
                                            <td className='Row2'><span>Better Growth by Saving Ground Water</span></td>
                                            <td className='Row3'><span>Reduced</span></td>
                                            <td className='Row4'><span>Reduced</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1'><span>Spreading of Microbes</span></td>
                                            <td className='Row2'><span>Minimised by Reducing the Medium</span></td>
                                            <td className='Row3'><span>No Change</span></td>
                                            <td className='Row4'><span>High due to Handling by Humans</span></td>
                                        </tr>
                                        <tr>
                                            <td className='Row1 leftRadius'><span>Cost per Litre Rs</span></td>
                                            <td className='Row2 bottomRadius'><span>{!isStatShow ? "Rs. 3.5" : "$ 0.042"}</span></td>
                                            <td className='Row3 bottomRadius'><span>{!isStatShow ? "Rs. 4" : "$ 0.048"}</span></td>
                                            <td className='Row4 rightRadius'><span>{!isStatShow ? "Rs. 4" : "$ 0.048"}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp11