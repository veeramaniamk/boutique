import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/login';
import Register from "./components/Register"
import ProductSection from './components/products';
import Orders from './User/orders';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/login' element = {<Login />} />
      <Route path='/' element = {<Register />} />
      <Route path='/products' element = {<ProductSection />} />
      <Route path='/orders' element = {<Orders />} />
    </Routes>
   </Router>
  );
}

export default App;
