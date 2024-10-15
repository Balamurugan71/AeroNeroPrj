import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {
    return (
        <>
            <div className='Footer1' id="Footer-Enquiry">
                <div className='Footer1_Container'>
                    <div className='Footer1_Section1'>
                        <div className='Footer1_Cont1'>
                            <h2>Are you a water warrior?</h2>
                            <p>We would love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>
                        </div>
                        <div className='Footer1_Cont2'>
                            <div className='Footer1_Cont2Sect1'>
                                <div className='Contact1'>
                                    <h3>Call Us at:</h3>
                                    <a className='ContactLink' href='tel:+1800 419 4190'>
                                        <FontAwesomeIcon className='contactIcon' icon={faPhone} />
                                        <span className='ContactText'>+1800 419 4190</span>
                                    </a>
                                </div>
                                <div className='Contact1'>
                                    <h3>Write us at:</h3>
                                    <a className='ContactLink' href='mailto:hello@aeronero.com'>
                                        <FontAwesomeIcon className='contactIcon' icon={faEnvelope} />
                                        <span className='ContactText'>hello@aeronero.com</span>
                                    </a>
                                </div>
                            </div>
                            <div className='Footer1_Cont2Sect2'>
                                <h3>Social:</h3>
                                <div className='Social'>
                                    <a href='https://www.instagram.com/aeronero.life/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='socialIcon' icon={faInstagram} /></a>
                                    <a href='https://www.youtube.com/@aeronero6604' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='socialIcon' icon={faYoutube} /></a>
                                    <a href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='socialIcon' icon={faLinkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Footer1_Section2'>
                        <form className='FooterForm'>
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
            </div>
            <div className='CopyRights'>
                <div className='CopyRightsCont'>
                    <p className='text-start pt-3'>Aeronero Solution Pvt. Ltd.</p>
                    <p className='text-end pt-3'>All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer