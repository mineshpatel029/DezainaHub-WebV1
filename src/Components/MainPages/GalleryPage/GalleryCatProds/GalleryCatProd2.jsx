import React, { useState } from "react";
import "./GalleryCatProds.css";
import PosterImgData from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import { GalleryImgProd3 } from "../GalleryImgSec/GalleryImgProd";
import ImgCat3Prod1, {ImgCat3Prod2, ImgCat3Prod3, ImgCat3Prod4, ImgCat3Prod5} from "../GalleryImgSec/GalleryCardData/ImgDataCat3";
import {ProductDataC2} from "../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData"


export const GalleryCatProd2 = () => {
  const [activeProd, setActiveProd] = useState(2);

  
  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return ProductDataC2[0].gallery;
      case 2:
        return ProductDataC2[1].gallery;
      case 3:
        return ProductDataC2[2].gallery;
      case 4:
        return ProductDataC2[3].gallery;
      case 5:
        return ProductDataC2[4].gallery;
    }
  };

  return (
    <div className="GalleryISMain">
      <div className="GalleryIS">
        <div className="GalleryIS-ProductStrip">
          <div className="GalleryIS-ProductList container">
            {GalleryImgProd3.map((ProdData, i) => (
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
            {/* {PosterImgData.map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </div>
              </div>
            ))} */}

            {ShowProd(activeProd).map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData} />
                </div>
              </div>
            ))}
          </div>
          {/* <button className="GalleryIS-ImgButton">Load More</button> */}
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd2;
