import React from 'react';

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
          <li><a className="active nav-con anch" href={ () => false}>Home</a></li>
          <li><a className="anch nav-con" href={ () => false}>Chat</a></li>
          <li><a className="anch nav-con" href={ () => false}>Orders</a></li>
          <li><a className="anch nav-con" href={ () => false}>Profile</a></li>
          <li><a className="anch nav-con" href={ () => false}>Logout</a></li>
          {/* <li><a className="anch" href="#">Feedback</a></li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
