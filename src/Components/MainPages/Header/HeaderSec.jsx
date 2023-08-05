import React, { useState } from 'react'
import "./HeaderSec.css"
import LogoImg from "./Image/Dezaina.hub.png"
import { NavLink } from "react-router-dom";


export const HeaderSec = () => {
    const [active, setActive] = useState(false);
  return (
    <div className='NavMainContainer'>
        <nav className='NavBarStyle container'>
            <div className='Nav-Logo'>
                <img src={LogoImg}></img>
            </div>
            <div className='NavBarList'>
                <div className='NavBarList-Items'>
                <NavLink to="/">
                    <button onClick={() => setActive(!active)} className={!active ? 'NavBarListItem-Button' : "activeButton"}>Home</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/AboutUs">
                    <button className='NavBarListItem-Button'>About Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Gallery">
                    <button className='NavBarListItem-Button'>Gallery</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Service">
                    <button className='NavBarListItem-Button'>Services</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/ContactUs">
                    <button className='NavBarListItem-Button'>Contact Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Cart">
                    <button className='NavBarListItem-Button'>Cart</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/">
                    <button className='NavBarListItem-Button'>LogOut</button>
                </NavLink>
                </div>
                {/* <div className='NavBarList-Items'>
                    <NavLink to="/Article">
                    <button>Article</button>
                </NavLink>
                </div> */}

            </div>
        </nav>
    </div>
  )
}

export default HeaderSec;