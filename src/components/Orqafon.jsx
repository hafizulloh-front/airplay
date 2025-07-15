import React from "react";

const Orqafon = () => {
  return (
    <div className="orqafon">
      <div className="navbar">
        <div className="container navbar-content">
          <span>
            <img src="./img/logo.png" alt="" />
          </span>
          <ul>
            <li>
              <a href="!#">Home</a>
            </li>
            <li>
              <a href="!#">Booking</a>
            </li>
            <li>
              <a href="!#">private Jet</a>
            </li>
            <li>
              <a href="!#">Specifcateion</a>
            </li>
            <li>
              <a href="!#">Luxury Chartes</a>
            </li>
            <li>
              <a href="!#">Memberiship</a>
            </li>
          </ul>
          <span className="regstratsa">
            <p>Register</p> <button className="btn btn-primary">Sign In</button>
          </span>
        </div>
      </div>
      <div className="container header-content">
        <h1>
          Enjoy <span className="hi">Reserved</span> <br />
          Overhead bin space
        </h1>
        <p>Explore Now </p>
      </div>
    </div>
  );
};

export default Orqafon;
