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
        <label className="logo">Knitting Nest</label>
        <ul>
          <li>
          <Link className="active nav-con anch" to="/usermain">Home</Link>
          </li>
          <li>
          <Link className=" nav-con anch" to="/usermain">Chat</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/userorders">Orders</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/profile">Profile</Link>
          </li>
          <li>
          <Link className="nav-con anch" to="/profile">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
