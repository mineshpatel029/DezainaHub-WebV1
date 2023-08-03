import React from 'react'
import "./GalleryImgSec.css"
import PosterImgData from './GalleryCardData/GalleryImgData'

import GalleryImg1 from "../Image/17.jpg"

export const GalleryImgSec = () => {
  return (
    <div className='GalleryISMain'>
        <div className='GalleryIS'>
        <div className='GalleryIS-ProductStrip'>
            <div className='GalleryIS-ProductList container'>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
                <h6 className='GalleryISStrip-ProductActive'>Business Card</h6>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
                <h6 className='GalleryISStrip-Product'>Business Card</h6>
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
                {/* <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div>
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={GalleryImg1}/>
                    </div>
                </div> */}

            </div>
                <button className='GalleryIS-ImgButton'>Load More</button>
            </div>
        </div>
    </div>
  )
}

export default GalleryImgSec;