import React from 'react'
import "./HomeComp3.css"
import Droplet from "../../assets/Droplet1.png"
import saveMoney from "../../assets/save_money1.png"
import saveWater from "../../assets/save_water1.png"
import womenEmp from "../../assets/women_Empower.png"

const HomeComp3 = () => {
    return (
        <>
            <div className='HomeComp3_Container'>
                <div className='HomeComp3_Holder'>
                    <div className='HomeComp3_Section1'>
                        <h2 className='goalTextHead' data-aos="fade-right">Our vision</h2>
                        <h2 className='HomeComp3_Head' data-aos="fade-right">Water for all, always</h2>
                        <p className='HomeComp3_Para' data-aos="fade-right">Empowering sustainable living through innovative air water generation technology, providing clean and accessible water to communities while combating climate change.</p>
                        <a className='linkComp3' href='#model-form' data-aos="fade-right"><button className='HomeComp3_button'>
                            <span>chat with our expert</span>
                        </button></a>
                    </div>
                    <div className='HomeComp3_Section2'>
                        <div>
                            <h2 className='goalTextHead sml_TextComp3'>Our Mission</h2>
                        </div>
                        <div className='Grid_CardComp3'>
                            <div className='CardCont'>
                                <div className='ImageCont'>
                                    <img className='imageSect' src={Droplet} alt='Droplet' />
                                </div>
                                <div className='ContentCont'>
                                    <h2 className='HeadSect'>Clean, accessible water for all leading to water equality</h2>
                                </div>
                            </div>
                            <div className='CardCont'>
                                <div className='ImageCont'>
                                    <img className='imageSect' src={saveMoney} alt='saveMoney' />
                                </div>
                                <div className='ContentCont'>
                                    <h2 className='HeadSect'>Water Independence with affordability</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='goalTextHead lrg_TextComp3'>Our Mission</h2>
                        </div>
                        <div className='Grid_CardComp3'>
                            <div className='CardCont'>
                                <div className='ImageCont'>
                                    <img className='imageSect' src={saveWater} alt='saveWater' />
                                </div>
                                <div className='ContentCont'>
                                    <h2 className='HeadSect'>Sustainable water solutions for the world</h2>
                                </div>
                            </div>
                            <div className='CardCont'>
                                <div className='ImageCont'>
                                    <img className='imageSect' src={womenEmp} alt='womenEmp' />
                                </div>
                                <div className='ContentCont'>
                                    <h2 className='HeadSect'>Empowering women through Aeronero's Windependence program</h2>
                                </div>
                            </div>
                        </div>
                        <div className='BorderBoxComp3'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp3