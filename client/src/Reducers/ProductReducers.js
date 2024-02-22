import React from "react";
import {
  ERROR,
  FETCHED_DATA,
  LOADING,
  SINGLE_ERROR,
  SINGLE_FETCHED_PRODUCT,
  SINGLE_LOADING,
} from "../Action/ActionType";

function ProductReducers(state, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCHED_DATA:
      return { ...state, loading: false, products: action.payload ,total:action.payload.length};
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case SINGLE_FETCHED_PRODUCT:
      return { ...state,single_loader: false, single_error: "", product: action.payload };

    case SINGLE_LOADING:
      return { ...state, single_loader: true };
    case SINGLE_ERROR:
      return {
        ...state,
        single_loader: false,
        single_error: action.payload,
      };
    default:
      return state;
  }
}

export default ProductReducers;
