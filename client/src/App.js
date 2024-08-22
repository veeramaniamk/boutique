import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/login';
import Register from "./components/Register"
import ProductSection from './components/products';
import Orders from './User/orders';
import Designerhome from './designer/designerhome';
import Desginerorder from './designer/designerorders.jsx';
import Profilepage from './components/profilepage';
import Admindashboard from './admin/admindashboard';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      {/* <Route path='/userprofile  ' element = {<Profile />} /> */}
      <Route path='/login' element = {<Login />} />
      <Route path='/' element = {<Register />} />
      <Route path='/products' element = {<ProductSection />} />
      <Route path='/orders' element = {<Orders />} />
      <Route path='/desginerhome' element = {<Designerhome />} />
      <Route path='/desginerorder' element = {<Desginerorder />} />
      <Route path='/profilepage' element = {<Profilepage />} />
      <Route path='/admindashboard' element = {<Admindashboard />} />
    </Routes>
   </Router>
  );
}

export default App;
