import React from 'react'
import "./HomeComp10.css"
import Pipe from "../../assets/Frame-171.svg"
import saveHeart from "../../assets/Frame-170.svg"
import Bulb from "../../assets/Frame-168.svg"
import River from "../../assets/Frame-169.svg"
import ReCAPTCHA from "react-google-recaptcha";

const HomeComp10 = () => {
    return (
        <>
            <div className='Home10_Container' id="model-form">
                <div className='Home10_Holder'>
                    <div className='HomeComp5_Section1'>
                        <h2 data-aos="fade-up">Our <span className='highlightSpan'>Impact Story</span></h2>
                    </div>
                    <div className='Home10_Section'>
                        <div className='Home10_StatsSect'>
                            <div className='StatsContSect' data-aos="fade-right">
                                <img className='StatsImage' src={Pipe} alt='Pipe' />
                                <div className='StatsCont'>
                                    <h3>200+</h3>
                                    <p>Solutions Delivered</p>
                                </div>
                            </div>
                            <div className='StatsContSect' data-aos="fade-right">
                                <img className='StatsImage' src={saveHeart} alt='saveHeart' />
                                <div className='StatsCont'>
                                    <h3>4 Million</h3>
                                    <p>Lives Benefited Till Date</p>
                                </div>
                            </div>
                            <div className='StatsContSect' data-aos="fade-right">
                                <img className='StatsImage' src={Bulb} alt='Bulb' />
                                <div className='StatsCont'>
                                    <h3>12 million</h3>
                                    <p>Litres of Water Generated Till Date</p>
                                </div>
                            </div>
                            <div className='StatsContSect' data-aos="fade-right">
                                <img className='StatsImage' src={River} alt='River' />
                                <div className='StatsCont'>
                                    <h3>50 million</h3>
                                    <p>Litres of Water Saved Till Date</p>
                                </div>
                            </div>
                        </div>
                        <div className='Home10_FormSect' data-aos="fade-left">
                            <h2>Which AWG model will work for you?</h2>
                            <div>
                                <form className='Home10Form'>
                                    <p>
                                        <label className='Home10Label'>
                                            Name<br />
                                            <span className='Home10Span'>
                                                <input className='Home10Input' type='text' name='Name' id='name' placeholder='Enter Your Name*' />
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Phone Number<br />
                                            <span className='Home10Span'>
                                                <input className='Home10Input' type='text' name='PhoneNumber' id='phone' placeholder='Enter Your Phone Number*' />
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Email<br />
                                            <span className='Home10Span'>
                                                <input className='Home10Input' type='email' name='Email' id='email' placeholder='Enter Your E-Mail*' />
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Consumption per day<br />
                                            <span className='Home10Span'>
                                                <select className='Home10Select'>
                                                    <option value="" selected>—Please choose an option—</option>
                                                    <option value="10 - 20 L">10 - 20 L</option>
                                                    <option value="20 - 50 L">20 - 50 L</option>
                                                    <option value="50 - 100 L">50 - 100 L</option>
                                                    <option value="100 - 500 L">100 - 500 L</option>
                                                    <option value="Above 500 L">Above 500 L</option>
                                                </select>
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Total members in the household<br />
                                            <span className='Home10Span'>
                                                <select className='Home10Select'>
                                                    <option value="" selected>—Please choose an option—</option>
                                                    <option value="0-1">0-1</option>
                                                    <option value="1-5">1-5</option>
                                                    <option value="5-15">5-15</option>
                                                    <option value="15-20">15-20</option>
                                                    <option value="20-30">20-30</option>
                                                    <option value="Above 30">Above 30</option>
                                                </select>
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Location<br />
                                            <span className='Home10Span'>
                                                <input className='Home10Input' type='text' name='Location' id='location' placeholder='Enter Your Location*' />
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label className='Home10Label'>
                                            Location<br />
                                            <span className='Home10Span'>
                                                <input className='Home10Input' type='text' name='Location' id='location' placeholder='Enter Your Location*' />
                                            </span>
                                        </label>
                                    </p>
                                    <ReCAPTCHA
                                        className='recaptcha'
                                        sitekey="Your client site key"
                                    />
                                    <p>
                                        <button className='Home10Button'>Contact Sales</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComp10