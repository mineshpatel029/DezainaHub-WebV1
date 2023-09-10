import React, { useEffect } from "react";
import "./CartPage.css"
import YourCartPage from './YourCartPage/YourCartPage';
import ReviewCartPage from './ReviewCartPage/ReviewCartPage';
import CartOrderSuccesPage from './CartOrderSuccesPage/CartOrderSuccesPage';
import { useSelector, useDispatch } from "react-redux";
import UserCartData from "./UserCartData";
import { setProdInfo } from "../../../Redux/cartReducer";

export const CartPage = () => {
  const steps = useSelector((state) => state.cartReducer?.step);
  const dispatch = useDispatch();

  useEffect(() => {
    UserCartData.map((CartData) => {
        dispatch(setProdInfo({key: CartData.prodId, value: {
            prodQuantity: 1,
            maxPrice: CartData.MaxPrice,
            minPrice: CartData.MinPrice
        }
        }))
    })
  },[])

  const Showstep = (step)=>{
    switch (step) {
      case 1:
        // return <CartStage1/>;
        return <YourCartPage/>;
      case 2:
        return <ReviewCartPage/>;
      case 3:
          return <CartOrderSuccesPage/>;
    }
  }
  return (
    <div className='CartPageMain'>  
        {Showstep(steps)}
       
        {/* <YourCartPage/> */}
        {/* <ReviewCartPage/>
        <CartOrderSuccesPage/> */}
    </div>
  )
}

export default CartPage;