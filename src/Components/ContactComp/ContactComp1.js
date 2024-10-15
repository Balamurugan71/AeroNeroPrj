import React from 'react'
import "./ContactComp1.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const ContactComp1 = () => {
    return (
        <>
            <div className='ContactComp1_Container'>
                <div className='ContactComp1_Holder'>
                    <h2 className='Contact1Head'>Contact Us</h2>
                    <p className='Contact1Para'>Are you a water warrior? We’d love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>
                    <a className='Contact1Link' href='mailto:hello@aeronero.com'>
                        <FontAwesomeIcon className='Contact1LinkIcon' icon={faEnvelope} />
                        <span className='Contact1LinkText'>hello@aeronero.com</span>
                    </a>
                    <a className='Contact1Link' href='tel:+1800 419 4190'>
                        <FontAwesomeIcon className='Contact1LinkIcon' icon={faPhone} />
                        <span className='Contact1LinkText'>+1800 419 4190</span>
                    </a>
                    <div className='Contact1Social'>
                        <a href='https://www.instagram.com/aeronero.life/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='Contact1SocialIcon' icon={faInstagram} /></a>
                        <a href='https://www.youtube.com/@aeronero6604' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='Contact1SocialIcon' icon={faYoutube} /></a>
                        <a href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className='Contact1SocialIcon' icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp1