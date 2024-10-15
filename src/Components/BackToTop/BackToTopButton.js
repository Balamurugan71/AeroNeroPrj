import React, { useState, useEffect } from 'react'
import "./BackToTopButton.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const BackToTopButton = () => {
    const [isShow, setIsShow] = useState(false);

    const toggleVisibility = () => {
        const ScrollY = window.scrollY
        if (ScrollY > 300) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isShow && <div className='ToTopButton'>
                <span className='backButton' onClick={backToTop}>
                    <FontAwesomeIcon className='backIcon' icon={faAngleUp} />
                </span>
            </div>}
        </>
    )
}

export default BackToTopButton