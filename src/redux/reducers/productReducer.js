import { ActionTypes } from "../constants/actionTypes";

const initialState = {}

// export const productReducer = (state, action) => {
// destructurised to 
export const productReducer = (state = initialState, {type, payload}) => {
   switch (type) {
      case ActionTypes.SET_POST:
        return {...state, posts: payload};
      default: 
        return state;
   }
}

export const selectedPostReducer = (state = {}, {type, payload}) => {
  switch (type) {
     case ActionTypes.SELECTED_POST:   
       return {...state, ...payload};
     default: 
       return state;
  }
}
