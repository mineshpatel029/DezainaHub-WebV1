import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

// CartStageContext

const CartStageContext = createContext();
const CartStage = ({CartStage}) => {
    const [currentStep, setStep] = useState(1);
    const value = useMemo(() => ({currentStep, setStep}))
    return (
        <CartStageContext.Provider value={(currentStep, setStep)} >{CartStage}</CartStageContext.Provider>
    )
}

export {CartStage, CartStageContext};