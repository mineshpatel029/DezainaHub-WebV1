import React, { useEffect, useState } from "react";
import "./YourCartPage.css";
import UserCartData from "../UserCartData";
import { useSelector, useDispatch } from "react-redux";
import { setProdInfo, setStep } from "../../../../Redux/cartReducer";

export const YourCartPage = () => {
  const dispatch = useDispatch();
  const steps = useSelector((state) => state.cartReducer?.step);
  const productInfo = useSelector((state) => state.cartReducer?.prodInfo);
  const [totalMax, setTotalMax] = useState(0);
  const [totalMin, setTotalMin] = useState(0);

  const handleNextClick = () => {
    if (steps < 3) {
      dispatch(setStep(steps + 1));
    }
  };
  const incrementQuantity = (prodId, max, min) => {
    let quantity = productInfo[`${prodId}`]?.prodQuantity + 1;
    dispatch(setProdInfo({key: prodId, value: {
        prodQuantity: productInfo[`${prodId}`]?.prodQuantity + 1,
        maxPrice: quantity * parseInt(max),
        minPrice: quantity * parseInt(min)
    }}))  
    };
  const decrementQuantity = (prodId, max, min) => {
    if (productInfo[`${prodId}`]?.prodQuantity > 1) {
        let quantity = productInfo[`${prodId}`]?.prodQuantity - 1;
        dispatch(setProdInfo({key: prodId, value: {
            prodQuantity: productInfo[`${prodId}`]?.prodQuantity - 1,
            maxPrice: quantity * parseInt(max),
            minPrice: quantity * parseInt(min)
        }}))   
    }
  };

  useEffect(() => {
    let maxData = 0;
    let minData = 0;
    let data = Object.entries((productInfo));
    data.map((item) => {
        maxData += parseInt(item[1].maxPrice);
        minData += parseInt(item[1].minPrice)
    })
    setTotalMax(maxData);
    setTotalMin(minData);
  },[productInfo])

  return (
    <div className="CPMain">
      <div className="CP container">
        <div className="CP-Head">
          <div className="CPHead-Writeup">
            <h2 className="CPHead-Heading">Your Bag.</h2>
            <p className="CPHead-Content">
              Please write brief description about your projects, regarding
              which we should connect
            </p>
          </div>
          <hr />
        </div>
        <div className="CPBodyMain">
          {UserCartData.map((CartData, i) => {
            return (
                <div className="CP-Body">
              <div className="CPBody-Head">
                <div className="CPBodyHead-ImgContainer">
                  <div className="CPBodyHead-ImgBox">
                    <div className="CPBodyHead-ImgShadow"></div>
                    <img className="CPBodyHead-Img" src={CartData.Image} />
                  </div>
                </div>
                <div className="CPBodyHead-Content">
                  <div className="CPBodyHeadContent-Head">
                    <h2 className="CPBodyHeadContent-Heading">
                      {CartData.Heading}
                    </h2>
                    {/* <p className="CPBodyHeadContent-Body">
                      {CartData.Description}
                    </p> */}
                    <div>
                    <textarea rows="3" cols="60" className="CPBodyHeadContent-Body" placeholder="Explain Breifly About This Project..."/>
                    <button>Update</button>
                    <button>Cancel</button>
                    </div>
                  </div>
                  <button className="CPBodyHead-AddMoreButton">
                    + Add More
                  </button>
                </div>
              </div>
              <div className="CPBody-Value">
                <div className="CPBodyValue-Counter">
                  <div className="CPBodyValue-Quantity">
                    <button
                      onClick={() => decrementQuantity(CartData.prodId, CartData.MaxPrice, CartData.MinPrice)}
                      className="CPBodyValueQuantity-Button"
                    >
                      <svg
                        className="CPBodyValueQuantity-Dec"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5144 0.503418H6.12278C2.9121 0.503418 0.998047 2.41748 0.998047 5.62815V13.0109C0.998047 16.2304 2.9121 18.1445 6.12278 18.1445H13.5056C16.7163 18.1445 18.6303 16.2304 18.6303 13.0198V5.62815C18.6391 2.41748 16.7251 0.503418 13.5144 0.503418ZM13.3468 9.9855H6.29037C5.92873 9.9855 5.62883 9.6856 5.62883 9.32396C5.62883 8.96232 5.92873 8.66242 6.29037 8.66242H13.3468C13.7084 8.66242 14.0083 8.96232 14.0083 9.32396C14.0083 9.6856 13.7084 9.9855 13.3468 9.9855Z"
                          fill="#2F455C"
                        />
                      </svg>
                    </button>
                    <p className="CPBodyValueQuant-Counter">{productInfo?.[`${CartData.prodId}`]?.prodQuantity}</p>
                    <button
                      onClick={() => incrementQuantity(CartData.prodId, CartData.MaxPrice, CartData.MinPrice)}
                      className="CPBodyValueQuantity-Button"
                    >
                      <svg
                        className="CPBodyValueQuantity-Inc"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.1985 0.503418H5.80686C2.59619 0.503418 0.682129 2.41748 0.682129 5.62815V13.0109C0.682129 16.2304 2.59619 18.1445 5.80686 18.1445H13.1897C16.4003 18.1445 18.3144 16.2304 18.3144 13.0198V5.62815C18.3232 2.41748 16.4092 0.503418 13.1985 0.503418ZM13.0309 9.9855H10.1642V12.8522C10.1642 13.2138 9.86431 13.5137 9.50267 13.5137C9.14103 13.5137 8.84113 13.2138 8.84113 12.8522V9.9855H5.97445C5.61281 9.9855 5.31291 9.6856 5.31291 9.32396C5.31291 8.96232 5.61281 8.66242 5.97445 8.66242H8.84113V5.79574C8.84113 5.4341 9.14103 5.1342 9.50267 5.1342C9.86431 5.1342 10.1642 5.4341 10.1642 5.79574V8.66242H13.0309C13.3925 8.66242 13.6924 8.96232 13.6924 9.32396C13.6924 9.6856 13.3925 9.9855 13.0309 9.9855Z"
                          fill="#2F455C"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="CPBodyValue-PriceBox">
                    <h6 className="CPBodyValue-PriceTag">
                    ₹{productInfo?.[`${CartData.prodId}`]?.prodQuantity > 0
                        ? productInfo?.[`${CartData.prodId}`]?.minPrice
                        : CartData.MinPrice}
                    </h6>
                    -
                    <h6 className="CPBodyValue-PriceTag">
                    ₹{productInfo?.[`${CartData.prodId}`]?.prodQuantity > 0
                        ? productInfo?.[`${CartData.prodId}`]?.maxPrice
                        : CartData.MaxPrice}
                    </h6>
                  </div>
                </div>
                <button className="CPBodyHead-DelButton">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0C3.143 0 0 3.143 0 7C0 10.857 3.143 14 7 14C10.857 14 14 10.857 14 7C14 3.143 10.857 0 7 0ZM9.352 8.61C9.555 8.813 9.555 9.149 9.352 9.352C9.247 9.457 9.114 9.506 8.981 9.506C8.848 9.506 8.715 9.457 8.61 9.352L7 7.742L5.39 9.352C5.285 9.457 5.152 9.506 5.019 9.506C4.886 9.506 4.753 9.457 4.648 9.352C4.55036 9.2532 4.49561 9.1199 4.49561 8.981C4.49561 8.8421 4.55036 8.7088 4.648 8.61L6.258 7L4.648 5.39C4.55036 5.2912 4.49561 5.1579 4.49561 5.019C4.49561 4.8801 4.55036 4.7468 4.648 4.648C4.851 4.445 5.187 4.445 5.39 4.648L7 6.258L8.61 4.648C8.813 4.445 9.149 4.445 9.352 4.648C9.555 4.851 9.555 5.187 9.352 5.39L7.742 7L9.352 8.61Z" />
                  </svg>
                  <span>Remove</span>
                </button>
              </div>
            </div>
            )
          })}
        </div>
        <div className="CP-Base">
          <div className="CPBase-Head">
            <hr />
            <div className="CPBase-Value">
              <h5 className="CPBaseValue-Head">Estimated Total Cost :</h5>
              <h4 className="CPBaseValue-Amount">
                ₹{totalMin} - ₹{totalMax}  
              </h4>
            </div>
            <hr />
          </div>
          <div className="CPBase-Button">
            <button className="CPBase-ProceedButton" onClick={handleNextClick}>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCartPage;
