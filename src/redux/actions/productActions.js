import { ActionTypes } from "../constants/actionTypes";

//functions that return an object with TYPE and PAYLOAD

export const setProducts = (posts) => {
  return {
      type: ActionTypes.SET_POST,
      payload: posts
  }
}

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post
  }
}