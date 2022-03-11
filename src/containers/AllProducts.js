import React from "react";
import { useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Post from "./Post";
import { Link } from "react-router-dom";
import '../Styles/style.css'

const AllProducts = () => {

  const allPosts = useSelector(state => state.allPosts.posts)
  
  console.log('aaa',allPosts)
  return (
    <div className="d-flex flex-column align-items-center">{allPosts?.map((post) => 
      <Link className="cardLink" to={`/post/${post.id}`} key={post.id}>
        <Post post={post}/>
      </Link>
    )}</div>
    )
}

export default AllProducts