import React, { useState } from "react";
import "./GalleryCatProds.css";
import PosterImgData from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import { GalleryImgProd2 } from "../GalleryImgSec/GalleryImgProd";
import ImgCat2Prod1, {ImgCat2Prod2, ImgCat2Prod3, ImgCat2Prod4, ImgCat2Prod5, ImgCat2Prod6} from "../GalleryImgSec/GalleryCardData/ImgDataCat2";

export const GalleryCatProd2 = () => {
  const [activeProd, setActiveProd] = useState(4);

  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return ImgCat2Prod1;
      case 2:
        return ImgCat2Prod2;
      case 3:
        return ImgCat2Prod3;
      case 4:
        return ImgCat2Prod4;
      case 5:
        return ImgCat2Prod5;
      case 6:
        return ImgCat2Prod6;
    }
  };
  return (
    <div className="GalleryISMain">
      <div className="GalleryIS">
        <div className="GalleryIS-ProductStrip">
          <div className="GalleryIS-ProductList container">
            {GalleryImgProd2.map((ProdData, i) => (
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
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </div>
              </div>
            ))}
          </div>
          <button className="GalleryIS-ImgButton">Load More</button>
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd2;
