import React from 'react';
import { Link } from 'react-router-dom';


function Adminnavbar() {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">BOUTIQUE</label>
        <ul>
          <li>
          <Link className="active nav-con anch" to="/products">Home</Link>
          </li>
          <li>
          <Link className=" nav-con anch" to="/products">Designers</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/orders">Customers</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/orders">Orders</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/profilepage">Profile</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/products">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Adminnavbar;
