import React from "react";
import "./style.css"

const Header = () => {
  return (
    <div>
      <header id="header" className="Header fixed-top  header-transparent ">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <h1><a href="index.html">My-PPDB</a></h1>

        {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */} 
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#features">Tentang</a></li>
              <li><a className="nav-link scrollto" href="#faq">F.A.Q</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="getstarted scrollto" href="#features">Login</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>
    </div>
  );
};

export default Header;
