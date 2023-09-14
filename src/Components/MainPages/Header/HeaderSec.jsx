import React, { useState } from 'react'
import "./HeaderSec.css"
import LogoImg from "./Image/Dezaina.hub.png"
import { NavLink, useLocation } from "react-router-dom";


export const HeaderSec = () => {
    const [activeTab, setActiveTab] = useState("home");
    const url = window.location.href;
    const { pathname ='' } = useLocation();

    return (
    <div className='NavMainContainer'>
        <nav className='NavBarStyle container'>
            <div className='Nav-Logo'>
                <img src={LogoImg}></img>
            </div>
            <div className='NavBarList'>
                <div className='NavBarList-Items'>
                <NavLink to="/">
                    <button onClick={() => setActiveTab('home')} className={pathname === '/' ? "activeButton" : 'NavBarListItem-Button'}>Home</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/AboutUs">
                    <button onClick={() => setActiveTab('about')} className={url.includes("AboutUs") ? "activeButton" : 'NavBarListItem-Button'}>About Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Gallery">
                    <button onClick={() => setActiveTab('gallery')} className={url.includes("Gallery") ? "activeButton" : 'NavBarListItem-Button'}>Gallery</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Service">
                    <button onClick={() => setActiveTab('service')} className={url.includes("Service") ? "activeButton" : 'NavBarListItem-Button'}>Services</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/ContactUs">
                    <button onClick={() => setActiveTab('contact')} className={url.includes("ContactUs") ? "activeButton" : 'NavBarListItem-Button'}>Contact Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Cart">
                    <button onClick={() => setActiveTab('cart')} className={url.includes("Cart") ? "activeButton" : 'NavBarListItem-Button'}>Cart</button>
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