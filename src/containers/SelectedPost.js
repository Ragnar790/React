import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedPost } from "../redux/actions/productActions";

const SelectedPost = () => {

  const {postId} = useParams()
  console.log(postId)
  const dispatch = useDispatch()
  
  const fetchSelectedPost = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?id=' + postId).catch((err) => {
      console.log("Error", err)
    })
    console.log('selected', response.data[0])
    dispatch(selectedPost(response.data))
  }
  
  useEffect(() =>{
    fetchSelectedPost()
  }, [])

  return (
    <div>
      <h1>id</h1>
      <h5>title</h5>
      <h6>summary</h6>
    </div>
  )
}

export default SelectedPost