import React, { useState } from "react";
import "./GalleryCatProds.css";
import PosterImgData from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import { GalleryImgProd3 } from "../GalleryImgSec/GalleryImgProd";
import ImgCat3Prod1, {ImgCat3Prod2, ImgCat3Prod3, ImgCat3Prod4, ImgCat3Prod5} from "../GalleryImgSec/GalleryCardData/ImgDataCat3";

export const GalleryCatProd3 = () => {
  const [activeProd, setActiveProd] = useState(2);

  
  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return ImgCat3Prod1;
      case 2:
        return ImgCat3Prod2;
      case 3:
        return ImgCat3Prod3;
      case 4:
        return ImgCat3Prod4;
      case 5:
        return ImgCat3Prod5;
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
export default GalleryCatProd3;
