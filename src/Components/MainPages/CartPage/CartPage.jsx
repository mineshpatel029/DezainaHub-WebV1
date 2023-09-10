import React, { useContext } from 'react'
import { useProductContext } from '../../../Context/ProductContext';
import {CartStageContext} from '../../../Context/CartContext';
import "./CartPage.css"
import YourCartPage from './YourCartPage/YourCartPage';
import ReviewCartPage from './ReviewCartPage/ReviewCartPage';
import CartOrderSuccesPage from './CartOrderSuccesPage/CartOrderSuccesPage';

export const CartPage = () => {
  // const myName = useProductContext();
  const {setStep, currentStep} = useContext(CartStageContext);
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
      {console.log(currentStep)}
  
        {Showstep(currentStep)}
       
        {/* <YourCartPage/> */}
        {/* <ReviewCartPage/> */}
        {/* <CartOrderSuccesPage/> */}
    </div>
  )
}

export default CartPage;