import { createContext, useContext, useEffect } from "react";
import ProductDataC1 from "../Components/MainPages/ServicePage/ServiceProductSec/ServiceProductCategory1/ProductDataC1";
import axios from "axios";

const AppContext = createContext();

const ProductDataAPI = "https://fakestoreapi.com/products";

const AppProvider = ({ children }) => {
  const getProductData = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log("Getting Data...", products);
  };

  useEffect(() => {
    getProductData(ProductDataAPI);
  }, []);

  return (
    <AppContext.Provider value="Deva Singh">{children}</AppContext.Provider>
  );
};

// Global Hooks

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
