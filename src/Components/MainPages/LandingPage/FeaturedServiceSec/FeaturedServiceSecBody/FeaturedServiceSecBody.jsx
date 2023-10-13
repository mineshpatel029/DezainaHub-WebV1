import React, { useEffect, useState } from "react";
import "./FeaturedServiceSecBody.css";
import ProductDataC1, {ProductDataC2, ProductDataC3} from "../../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData";
import { useProductContext } from "../../../../../Context/ProductContext";
import { useSelector, useDispatch } from "react-redux";
// import FeaturedServiceCardData from './FeaturedServiceCardData/FeaturedServiceCardData'
import FeaturedServiceCardData from "./FeaturedServiceCardData/FeaturedServiceCardData";
import {
  setLoading,
  setProduct,
} from "../../../../../Redux/productDetailReducer";
import axios from "axios";


// export const FeaturedServiceSecBody = ({featureProducts}) => {
    export const FeaturedServiceSecBody = () => {
        
        const [activeCat, setActiveCat] = useState(1);

        let ProdCat = [
            {
                Catid: 1,
                CatName: "All Category",
                product: [...ProductDataC1, ...ProductDataC2, ...ProductDataC3],
            },
            {
                Catid: 2,
                CatName: "Visual Branding",
                product: ProductDataC1,
            },
            {
                Catid: 3,
                CatName: "Brand Marketing",
                product: ProductDataC2,
            },
            {
                Catid: 4,
                CatName: "Digital Interaction",
                product: ProductDataC3,
            },
        ];
        
        const ShowProd = (Cat) => {
            switch (Cat) {
              case 1:
                return ProdCat[0];
              case 2:
                return ProdCat[1];
              case 3:
                return ProdCat[2];
              case 4:
                return ProdCat[3];
            }
          };
        
  return (
    <div className="FeaturedSS-BodyMain">
      <div className="FeaturedSS-Body">
        <div className="FeaturedSSBody-Nav">
          {ProdCat.map((CatData, i) => (
            <h6
              key={i}
              onClick={() => setActiveCat(CatData.Catid)}
              className={
                activeCat === CatData.Catid
                  ? "FeaturedSSBodyNav-ActiveButton"
                  : "FeaturedSSBodyNav-Button"
              }
            >
              {CatData.CatName}
            </h6>
          ))}
        </div>
        <div className="FeaturedSSBody-Content">
          {/* {featureProducts.length ? featureProducts.map((ServiceCardData)=> {
                    if(ServiceCardData?.featured) {
                        return <FeaturedServiceCardData key={ServiceCardData.id} { ...ServiceCardData}/>

                    }
                }
                ) : <>Loading...</>} */}
                {ShowProd(activeCat).product.map((ServiceCardData) => {
                    
            if (ServiceCardData?.featured) {
              return <FeaturedServiceCardData {...ServiceCardData} />;
            }
          })}

          {/* {ProductDataC1.map((ServiceCardData) => {
            if (ServiceCardData?.featured) {
              return <FeaturedServiceCardData {...ServiceCardData} />;
            }
          })} */}
        </div>
      </div>
    </div>
  );
};
export default FeaturedServiceSecBody;
