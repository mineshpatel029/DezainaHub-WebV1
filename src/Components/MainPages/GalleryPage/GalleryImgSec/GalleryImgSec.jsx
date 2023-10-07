import React, { useState } from 'react'
import "./GalleryImgSec.css"
import PosterImgData from './GalleryCardData/GalleryImgData'
import GalleryImgProd from './GalleryImgProd'

import GalleryImg1 from "../Image/17.jpg"
import GalleryProdCat from '../GalleryLandingSec/GalleryProdCat'

export const GalleryImgSec = (id) => {
    // console.log("Category id" , activeCat);
    const [activeProd, setActiveProd] = useState(1)
    // const [active, setActive] = useState(activeCatf)
    // console.log("Index" , active);
  return (
    <div className='GalleryISMain'>
        <div className='GalleryIS'>
        <div className='GalleryIS-ProductStrip'>
            <div className='GalleryIS-ProductList container'>
            {GalleryImgProd.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))}
                {/* <h6 className='GalleryISStrip-ProductActive'>Business Card</h6> */}
                
            </div>
        </div>
        <div className='GalleryIS-Gallery container'>
            <div className='GalleryIS-GalleryContainer'>  
            {PosterImgData.map((ImgData, i)=>(
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={ImgData.img}/>
                    </div>
                </div>
                ))} 

            </div>
                <button className='GalleryIS-ImgButton'>Load More</button>
            </div>
        </div>
    </div>
  )
}

export default GalleryImgSec;