import { combineReducers } from "redux";
import { productReducer, selectedPostReducer } from "./productReducer";

const reducers = combineReducers({
  allPosts: productReducer,
  selectedPost: selectedPostReducer
})

export default reducers