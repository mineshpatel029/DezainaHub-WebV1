import React from 'react'
import "./ServiceProductCategory1.css"
import ProductDataC1 from './ProductDataC1'
import { NavLink } from "react-router-dom";




export const ServiceProductCategory1 = () => {
  return (
    <div className='ServicePC1-Main'>
        <div className='ServicePS-CategoryHeadStrip'>
                <h1 className='ServicePS-CategoryHead'>BRAND DESIGNING</h1>
            </div>
            <div className='ServicePS container'>
                <div className='ServicePS-ProductList'>
                    <div className='ServicePS-Products'>
                    {ProductDataC1.map((ProductData , i)=> (

                  
                        <div className='ServicePSProduct-Container'>
                            <div className='ServicePSProduct-ImgShadow'></div>
                            <div className='ServicePSProductImg-Footer'>
                                <div className='ServicePSProductImg-FooterContent'>
                                    <h4 className='ServicePSProductImg-ContentHead'>{ProductData.ProdName}</h4>
                                    <p className='ServicePSProductImg-ContentBody'>{ProductData.ProdPrice}</p>
                                </div>
                                <NavLink to="/Cart" >
                                    <button className='FeaturedService1-CartButton'>
                                        <svg className='FeaturedService1-CartIcon' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.2092 0H8.89634C3.54801 0 0.359589 3.255 0.359589 8.715V21.27C0.359589 26.745 3.54801 30 8.89634 30H21.1946C26.5429 30 29.7313 26.745 29.7313 21.285V8.715C29.746 3.255 26.5576 0 21.2092 0ZM20.9301 16.125H16.1548V21C16.1548 21.615 15.6552 22.125 15.0528 22.125C14.4504 22.125 13.9508 21.615 13.9508 21V16.125H9.17551C8.57309 16.125 8.07352 15.615 8.07352 15C8.07352 14.385 8.57309 13.875 9.17551 13.875H13.9508V9C13.9508 8.385 14.4504 7.875 15.0528 7.875C15.6552 7.875 16.1548 8.385 16.1548 9V13.875H20.9301C21.5325 13.875 22.0321 14.385 22.0321 15C22.0321 15.615 21.5325 16.125 20.9301 16.125Z" fill="white"/>
                                        </svg>
                                    </button>
                                </NavLink>

                            </div>
                            <img className='ServicePSProduct-Img' src={ProductData.ProdImg} />
                            
                        </div>
                        ))}
                        
                    </div>
                    <NavLink to="/Gallery">
                        <button className='ServicePS-Button'>View Gallery</button>
                    </NavLink>
                </div>
            </div>
    </div>
  )
}

export default ServiceProductCategory1;