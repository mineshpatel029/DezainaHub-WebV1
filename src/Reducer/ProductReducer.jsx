const ProductReducer = (state,action) => {

//     if(action.type === "SET_LOADING")
//         return {
//     ...state,
//     isLoading: true,
// };
// if(action.type === "API_ERROR")
//         return {
//     ...state,
//     isLoading: false,
//     isError: true
// };

switch (action.type) {
    case "SET_LOADING":
        return {
            ...state,
            isLoading: true,
        };
    case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };
    case "SET_PRODUCT_API_DATA":
        const featureProductsData = action.payload.filter((currElement)=>{
            return currElement.featured === true;
        });
        return {
            ...state,
            isLoading: false,
            products: action.payload,
            featureProducts: featureProductsData,
        }
    case "SET_PDP_LOADING":
            return {
                ...state,
                isSinglePDPLoading: true,
            };
    case "SET_SINGLE_PDP":
                return {
                    ...state,
                    isSinglePDPLoading: false,
                    singlePDP: action.payload,
                };
    case "PDP_ERROR":
                return {
                    ...state,
                    isSinglePDPLoading: false,
                    isError: true
                };
    default:
        return state;
}

}

export default ProductReducer;