import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
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
          <Link className=" nav-con anch" to="/products">Chat</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/products">Orders</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/products">Profile</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/products">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
