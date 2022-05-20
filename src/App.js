import './App.css';
import React, { useEffect } from 'react';
import AllProducts from './containers/AllProducts';
import axios from 'axios';
import { setProducts } from './redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import SelectedPost from './containers/SelectedPost';
import LinksToExamples from './containers/Examples/LinksToExamples';
import Controlled from './containers/Examples/Controlled';
import Uncontrolled from './containers/Examples/Uncontrolled';
import FnComp from './containers/Examples/States/FnComp';

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
        <Route path='/' element={<LinksToExamples />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/controlled' element={<Controlled />} />
        <Route path='/uncontrolled' element={<Uncontrolled />} />
        <Route path='/stateInFnComp' element={<FnComp />} />
        <Route path='/stateInClsComp' element={<Uncontrolled />} />
        <Route path='/post/:postId' element={<SelectedPost/>} />
        <Route>404 Not Found!</Route>
      </Routes>
    </>
  );
}
   
export default App;
