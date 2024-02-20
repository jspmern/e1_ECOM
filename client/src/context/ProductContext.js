import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import axios from 'axios'

export let productContext = createContext();
let initalState={
    loading:false,
    data:[],
    error:''
}
function reducer()
{
   return 'avc'
}
function ProductContext({ children }) {
    let [state,dispatch] =useReducer(reducer,initalState)
    async function getAllProduct()
    {
        try{
             dispatch({type:"LOADING"})
             let {data}=await axios.get('/api/v1/products')
              dispatch({type:"FETCHED_DATA",payload:data.products})
        }
        catch(err)
        {
            console.log(err)
            dispatch({type:"ERROR",payload:err.message})
        }
    }
    useEffect(()=>{
        getAllProduct()
    },[])
  return <productContext.Provider value={{...state}}> {children} </productContext.Provider>;
}

export default ProductContext;
