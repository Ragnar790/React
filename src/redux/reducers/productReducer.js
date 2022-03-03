import { ActionTypes } from "../constants/actionTypes";

const initialState = {}

// export const productReducer = (state, action) => {
// destructurised to 
export const productReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      case ActionTypes.SET_PRODUCTS:   
        return {...state, posts: payload};
      default: 
        return state;
   }
}
