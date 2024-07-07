import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../../../../../Helpers/FormatPrice";

export const FeaturedServiceCardData = (ServiceCardData) => {
  const { id, Name, minPrice, maxPrice, gallery, category, Description } =
    ServiceCardData;
  //   const {id , Name , Price , img , category, description} = ServiceCardData;

  //   console.log('Getting Data', ServiceCardData);
  // console.log(gallery.src, "gallery URL");
  return (
    
    <div className="FSBodyContent-Box swiper-slide">
      <div className="FSBodyContentBox-ImgContainer">
        <img className="FSBodyContentBox-Img" src={gallery[0]} alt="galleyImag"/>
      </div>
      <div className="FSBodyContentBox-Content">
        <div className="FSBodyContentBox-HeadContent">
          <h5 className="FSBodyContentBox-ProductName">{Name}</h5>
          <h6 className="FSBodyContentBox-ProductPrice">
            <FormatPrice price={minPrice} /> - <FormatPrice price={maxPrice} />
            /-
          </h6>
        </div>

        <div className="FSBodyContentBox-BodyContainer">
          <p className="FSBodyContentBox-BodyContent">
          {Description.DescriptHead}
                      <br />
                      <b>Factors Affecting Price:</b>
                      <br />
                      {Description.DescriptFactors.map((Points) => (
                        <ul>
                          
                        <li>{Points.factorsPoints}</li>
                        </ul>
                      ))}
                      <br />
                      {Description.DescriptFooter.map((Points) => (
                        <div>{Points.FooterPoints}</div>
                      ))}
          </p>
        </div>
      </div>
    </div>
    //   </NavLink>
  );
};

export default FeaturedServiceCardData;
