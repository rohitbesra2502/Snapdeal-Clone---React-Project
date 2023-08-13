import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({children}) =>{
    const[state, dispatch] = useReducer(reducer,initialState);
    
    const getProduct = async (url) => {
        dispatch({type:"SET_LOADING"});
        try{
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_API_DATA" , payload: products})
            // console.log(products);
        }catch(error){
            dispatch({type:"API_ERROR"});
        }
    }
    //my single api for one product
    const getSingleProduct = async (url)=>{
        // console.log("entered");
        dispatch({type:"SET_SINGLE_LOADING"});
        try{
            const res = await axios.get(url);
            const singleProduct = await res.data[0];
            dispatch({type:"SET_SINGLE_PRODUCT" , payload: singleProduct})
            // console.log(singleProduct);
            // console.log("singleProduct data are from singleProduct:" , singleProduct);
        }catch(error){
            dispatch({type:"SET_SINGLE_ERROR"});
        }
    }

    useEffect(()=>{
        getProduct(API);
    },[]);
    
    return(
        <AppContext.Provider value={{...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () => {
    return useContext(AppContext);
};

export {AppProvider,AppContext,useProductContext};