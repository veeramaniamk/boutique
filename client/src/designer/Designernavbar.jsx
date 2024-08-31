import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

function Navbar() {
  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Knitting Nest</label>
        <ul>
          <li>
          <Link className="active nav-con anch" to="/products">Home</Link>
          </li>
          <li>
          <Link className=" nav-con anch" to="/products">Chat</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/designerorder">Orders</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/profile">Profile</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/profile">Product Lists</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
