import { createContext, useContext, useEffect, useReducer } from "react";
import ProductDataC1 from "../Components/MainPages/ServicePage/ServiceProductSec/ServiceProductCategory1/ProductDataC1";
import axios from "axios";
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext();

const ProductDataAPI = "http://localhost:5050/api/item/get?categoryId=650437af7623e86332589260";


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts:[],
  isSinglePDPLoading: false,
  singlePDP: {},
}


const AppProvider = ({ children }) => {


  const [state , dispatch] = useReducer(reducer, initialState);


  const getProductData = async (url) => {
    dispatch({type:"SET_LOADING"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log("Getting Data...", products);
      dispatch({type:"SET_PRODUCT_API_DATA", payload: products})
      
    } catch(error){
        dispatch({type:"API_ERROR"})
    }
  };


  // API for Single Products 
  const getProdDescription = async (url) => {
    dispatch({type: "SET_PDP_LOADING"})
    try {
      const res = await axios.get(url);
      const prodDescription = await res.data;
      dispatch({type:"SET_SINGLE_PDP", payload:prodDescription})
    } catch(error){
      dispatch({type:"PDP_ERROR"})
    }
  }



  useEffect(() => {
    getProductData(ProductDataAPI);
  }, []);

  return (
    <AppContext.Provider value={{...state, getProdDescription}}>{children}</AppContext.Provider>
  );
};

// Global Hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
