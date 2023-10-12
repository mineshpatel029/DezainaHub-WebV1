import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../../../../../Helpers/FormatPrice';


    export const FeaturedServiceCardData = (ServiceCardData) => {
  const {id , Name , minPrice, maxPrice , gallery , category, Description} = ServiceCardData;
//   const {id , Name , Price , img , category, description} = ServiceCardData;

//   console.log('Getting Data', ServiceCardData);
// console.log(gallery.src, "gallery URL");
  return (
//   <NavLink to={`/Service/${id}`}>
                    <div className="FSBodyContent-Box">
                <div className="FSBodyContentBox-ImgContainer">
                  <img className="FSBodyContentBox-Img" src={gallery[0]} />
                </div>
                <div className="FSBodyContentBox-Content">
                  <div className="FSBodyContentBox-HeadContent">
                    <h5 className="FSBodyContentBox-ProductName">
                      {Name}
                    </h5>
                    <h6 className="FSBodyContentBox-ProductPrice">
                      ₹{minPrice} - {maxPrice}/-
                    </h6>
                  </div>

                  <div className="FSBodyContentBox-BodyContainer">
                    <p className="FSBodyContentBox-BodyContent"><span>{Description}</span></p>
                  </div>
                </div>
              </div>
//   </NavLink>
  )
}

export default FeaturedServiceCardData;
