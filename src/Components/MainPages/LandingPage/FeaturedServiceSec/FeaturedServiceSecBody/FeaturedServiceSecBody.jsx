import React, { useEffect, useState } from "react";
import "./FeaturedServiceSecBody.css";
import ProductDataC1, {ProductDataC2, ProductDataC3} from "../../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData";
// import { useProductContext } from "../../../../../Context/ProductContext";
// import { useSelector, useDispatch } from "react-redux";
// import FeaturedServiceCardData from './FeaturedServiceCardData/FeaturedServiceCardData'
import FeaturedServiceCardData from "./FeaturedServiceCardData/FeaturedServiceCardData";
// import {
//   setLoading,
//   setProduct,
// } from "../../../../../Redux/productDetailReducer";
// import axios from "axios";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
                CatName: "Digital Interaction",
                product: ProductDataC2,
            },
            {
                Catid: 4,
                CatName: "Brand Marketing",
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

          const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 2000 },
              items: 4
            },
            desktop3: {
              breakpoint: { max: 2000, min: 1500 },
              items: 3
            },
            desktop2: {
              breakpoint: { max: 1500, min: 1000 },
              items: 3
            },
            desktop1: {
              breakpoint: { max:1200, min: 1000 },
              items: 2.15
            },
            tablet1: {
              breakpoint: { max: 1000, min: 490 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 522, min: 0 },
              items: 1
            }
          };

        
  return (
    <div className="FeaturedSS-BodyMain">
      <div className="FeaturedSS-Body">
      {/* <Carousel className="FeaturedSSBody-Nav" responsive={responsive}> */}
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
        {/* </Carousel> */}
  
        {/* <div className="FeaturedSSBody-ContentMain"> */}
        <Carousel className="FeaturedSSBody-Content" renderButtonGroupOutside={true}  responsive={responsive} 
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        focusOnSelect={true}

        transitionDuration={500}
        >
        {/* <div className="FeaturedSSBody-Content"> */}
                {ShowProd(activeCat).product.map((ServiceCardData) => {
                    
            if (ServiceCardData?.featured) {
              return <FeaturedServiceCardData {...ServiceCardData} />;
            }
          })}
        {/* </div> */}
</Carousel>
        {/* </div> */}
      </div>
    </div>
  );
};
export default FeaturedServiceSecBody;
