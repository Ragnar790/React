import './App.css';
import React, { useEffect } from 'react';
import AllProducts from './containers/AllProducts';
import axios from 'axios';
import { setProducts } from './redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import SelectedPost from './containers/SelectedPost';

function App() {
  const dispatch = useDispatch();

  const fetchPosts = async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts").catch((err) => {
      console.log("Error", err)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchPosts() 
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/post/:postId' element={<SelectedPost/>}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </>
  );
}
   
export default App;
