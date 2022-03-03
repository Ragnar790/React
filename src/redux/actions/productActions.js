import { ActionTypes } from "../constants/actionTypes";

//functions that return an object with TYPE and PAYLOAD

export const setProducts = (products) => {
  return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products
  }
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  }
}