import React, { useState } from 'react'
import "./HeaderBlue.css"
import LogoWhite from "../../assets/Logo-White.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faBars, faClose, faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const HeaderBlue = () => {

    const [showSubNav, setShowSubNav] = useState(false)

    return (
        <>
            <header className='aeHeaderBlue sticky-top'>
                <div className='navBarCont'>
                    <div className='navBarHolder'>
                        <nav className="navbar">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <FontAwesomeIcon className='menuBarsBlue' icon={faBars} />
                                </button>
                                <div className="offcanvas offcanvas-start" data-bs-scroll="false" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <button type="button" className='CloseNavBlue' data-bs-dismiss="offcanvas" aria-label="Close">
                                            <FontAwesomeIcon className='menuClose' icon={faClose} />
                                        </button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navBarUl">
                                            <li className="nav-item">
                                                <NavLink exact='true' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/about">About Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <span className='d-flex flex-row align-items-center gap-3'>
                                                    <a onClick={() => setShowSubNav(!showSubNav)} className="nav-link" href='##'>Product</a>{!showSubNav && <FontAwesomeIcon className='arrowIcon' onClick={() => setShowSubNav(!showSubNav)} icon={faAngleDown} />}{showSubNav && <FontAwesomeIcon onClick={() => setShowSubNav(!showSubNav)} className='arrowIcon' icon={faAngleUp} />}
                                                </span>
                                                {showSubNav && <ul class="subNav">
                                                    <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link1 active' : 'nav-link1')} to="/nero">Nero</NavLink></li>
                                                    <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link1 active' : 'nav-link1')} to="/bubble">Bubble</NavLink></li>
                                                    <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link1 active' : 'nav-link1')} to="/drizzle">Drizzle</NavLink></li>
                                                    <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link1 active' : 'nav-link1')} to="/thunder">Thunder</NavLink></li>
                                                    <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link1 active' : 'nav-link1')} to="/airwell">Airwell</NavLink></li>
                                                </ul>}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/technology">Technology</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/contact">Contact Us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <NavLink to="/"><img src={LogoWhite} className='NavLogo' alt='Logo' /></NavLink>
                                </div>
                                <div>
                                    <a href="#Footer-Enquiry"><FontAwesomeIcon className='EnquireIconBlue' icon={faPhone} /></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderBlue