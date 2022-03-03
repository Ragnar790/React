import './App.css';
import React, { useEffect } from 'react';
import AllProducts from './containers/AllProducts';
import axios from 'axios';
import { setProducts } from './redux/actions/productActions';
import { useDispatch } from 'react-redux';

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
    <div className='text-center'>
      <AllProducts />
    </div>
  );
}
   
export default App;
