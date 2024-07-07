import React, { useState } from "react";
import "./GalleryImgSec.css";
import PosterImgData from "./GalleryCardData/ImgDataCat1";
import GalleryImgProd from "./GalleryImgProd";

import GalleryImg1 from "../Image/17.jpg";
import GalleryProdCat from "../GalleryLandingSec/GalleryProdCat";

export const GalleryImgSec = (newCat, prodList) => {
  // console.log("Category id" , activeCat);
  const [activeProd, setActiveProd] = useState(1);
  // const [prodList, setProdList]= useState(GalleryImgProd)
  // const [active, setActive] = useState(activeCatf)
  // console.log("Index" , active);
  console.log(newCat, "cat");

  function toggleCatBar() {
    // if (newCat===1) {
    //     console.log("ans")
    // } else if (newCat===2) {
    //     console.log("thsk")
    // } else { console.log("psdihac")
    // }
  }

  // function toggleCat(newCat) {

  //     return <div className='GalleryIS-ProductList container'>{newCat.map((ProdData, i)=>(
  //         <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
  //     ))}</div>

  // }

  // console.log(activeCat)
  // console.log(prodList)

  return (
    <div className="GalleryISMain">
      <div className="GalleryIS">
        <div className="GalleryIS-ProductStrip">
          <div className="GalleryIS-ProductList container">
            {/* {()=>{GalleryImgProd.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))}}

            { activeCat === 1 ? {GalleryImgProd.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))} : <></>}
              { activeCat === 2 ? {GalleryImgProd2.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))} : <></>}
              { activeCat === 3 ? "Digital Interaction design involves crafting online experiences that are user friendly visually appealing and aligned with brand's message & objective" : <></>}

            {GalleryImgProd.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))} */}

            {/* {toggleCat(prodList)} */}
            {/* {prodList.map((ProdData, i)=>(
                <h6 key={i} onClick={() => setActiveProd(ProdData.id)} className={activeProd === (ProdData.id) ? "GalleryISStrip-ProductActive" : 'GalleryISStrip-Product'}>{ProdData.ProdName}</h6>
            ))} */}

            {GalleryImgProd.map((ProdData, i) => (
              <h6
                key={i}
                onClick={() => setActiveProd(ProdData.id)}
                className={
                  activeProd === ProdData.id
                    ? "GalleryISStrip-ProductActive"
                    : "GalleryISStrip-Product"
                }
              >
                {ProdData.ProdName}
              </h6>
            ))}

            {/* <h6 className='GalleryISStrip-ProductActive'>Business Card</h6> */}
          </div>
        </div>
        <div className="GalleryIS-Gallery container">
          <div className="GalleryIS-GalleryContainer">
            {PosterImgData.map((ImgData, i) => (
              <div key={i} className="GalleryIS-ImgContainer">
                <button className="GalleryIS-ImgBox" >
                  <img className="GalleryIS-Img" src={ImgData} />
                </button>
              </div>
            ))}
          </div>
          <button className="GalleryIS-ImgButton">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryImgSec;
