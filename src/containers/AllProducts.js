import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Post from "./Post";

const AllProducts = () => {

  // const dispatch = useDispatch();
  // const allPosts = useSelector(state => state.allPosts.posts)
  // const fetchPosts = async() => {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err) => {
  //     console.log("Error", err)
  //   })
  //   dispatch(setProducts(response.data))
  // }

  // useEffect(() => {
  //   fetchPosts() 
  // }, [])

  return (
    // <div>{allPosts.map((post) => 
    //   <Post post={post}/>
    // )}</div>
    <><Post /></>
  )
}

export default AllProducts