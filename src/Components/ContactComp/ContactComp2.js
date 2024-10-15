import React from 'react'
import "./ContactComp2.css"
import ReCAPTCHA from "react-google-recaptcha";
import FooterLogo from "../../assets/Logo1.svg"

const ContactComp2 = () => {
    return (
        <>
            <div className='ContactComp2_Container'>
                <div className='ContactComp2_Holder'>
                    <form className='FooterForm1'>
                        <p>
                            <label className='FooterLabel'>
                                Name<br />
                                <span className='FooterSpan'>
                                    <input className='FooterInput' type='text' name='name' placeholder='Enter Your Name' />
                                </span>
                            </label>
                        </p>
                        <p>
                            <label className='FooterLabel'>
                                Phone<br />
                                <span className='FooterSpan'>
                                    <input className='FooterInput' type='text' name='phone' placeholder='Enter Your Phone' />
                                </span>
                            </label>
                        </p>
                        <p>
                            <label className='FooterLabel'>
                                E-Mail<br />
                                <span className='FooterSpan'>
                                    <input className='FooterInput' type='email' name='email' placeholder='Enter Your E-Mail' />
                                </span>
                            </label>
                        </p>
                        <p>
                            <label className='FooterLabel'>
                                Select Product<br />
                                <span className='FooterSpan'>
                                    <select className='FooterSelect'>
                                        <option value="">—Please choose an option—</option>
                                        <option value="Nero">Nero</option>
                                        <option value="Bubble">Bubble</option>
                                        <option value="Drizzle">Drizzle</option>
                                        <option value="Thunder">Thunder</option>
                                        <option value="Airwell">Airwell</option>
                                    </select>
                                </span>
                            </label>
                        </p>
                        <p>
                            <label className='FooterLabel'>
                                Message:<br />
                                <span className='FooterSpan'>
                                    <textarea cols="40" rows="5" maxLength="2000" className='FooterTextArea' placeholder='Message (optional)'></textarea>
                                </span>
                            </label>
                        </p>
                        <ReCAPTCHA
                            className='recaptcha'
                            sitekey="Your client site key"
                        />
                        <p className='d-flex justify-content-center mt-4'><button className='FooterButton' type='submit'>Contact Sales</button></p>
                    </form>
                </div>
            </div>
            <div className='ContactFooter'>
                <div className='ContactFooterHolder'>
                    <div className='ContactFooterSection1 d-sm-block d-flex justify-content-center'>
                        <a href='/'><img className='FooterContactImg' src={FooterLogo} alt='FooterLogo' /></a>
                    </div>
                    <div className='ContactFooterSection1'>
                        <p className='FooterContactPara'>All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp2