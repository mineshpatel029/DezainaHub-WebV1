import React, { useState } from 'react'
import "./HeaderSec.css"
import LogoImg from "./Image/Dezaina.hub.png"
import { NavLink } from "react-router-dom";


export const HeaderSec = () => {
    const [activeTab, setActiveTab] = useState('home');

  return (
    <div className='NavMainContainer'>
        <nav className='NavBarStyle container'>
            <div className='Nav-Logo'>
                <img src={LogoImg}></img>
            </div>
            <div className='NavBarList'>
                <div className='NavBarList-Items'>
                <NavLink to="/">
                    <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? "activeButton" : 'NavBarListItem-Button'}>Home</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/AboutUs">
                    <button onClick={() => setActiveTab('about')} className={activeTab === 'about' ? "activeButton" : 'NavBarListItem-Button'}>About Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Gallery">
                    <button onClick={() => setActiveTab('gallery')} className={activeTab === 'gallery' ? "activeButton" : 'NavBarListItem-Button'}>Gallery</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Service">
                    <button onClick={() => setActiveTab('service')} className={activeTab === 'service' ? "activeButton" : 'NavBarListItem-Button'}>Services</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/ContactUs">
                    <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? "activeButton" : 'NavBarListItem-Button'}>Contact Us</button>
                </NavLink>
                </div>
                <div className='NavBarList-Items'>
                <NavLink to="/Cart">
                    <button onClick={() => setActiveTab('cart')} className={activeTab === 'cart' ? "activeButton" : 'NavBarListItem-Button'}>Cart</button>
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