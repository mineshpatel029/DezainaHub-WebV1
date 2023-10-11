import React, { useState } from 'react'
import "./GalleryCatProds.css"
import PosterImgData from '../GalleryImgSec/GalleryCardData/GalleryImgData'
import {GalleryImgProd3} from '../GalleryImgSec/GalleryImgProd'

export const GalleryCatProd3 = () => {
    const [activeProd, setActiveProd] = useState(2)
  return (
    <div className='GalleryISMain' >
        <div className='GalleryIS'>
        <div className='GalleryIS-ProductStrip'>
            <div className='GalleryIS-ProductList container'>

            {GalleryImgProd3.map((ProdData, i)=>(
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
export default GalleryCatProd3;