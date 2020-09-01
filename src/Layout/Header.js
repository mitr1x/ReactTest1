import React from 'react';
import logo from '../Images/logo.svg';
import '../App.css';


function Header() {
    return(
<header className="header">
<div className="container">
  <div className="header_inner">
      <div className="header_text"> 
        <a className="logo_link">
        <img src={logo} className="header_logo" alt="logo" />Decision Mapper
        </a>
      </div>
    <nav className="nav">
        <a className="nav_link">Work</a>
        <a className="nav_link">Services</a>
        <a className="nav_link">About</a>
        <a className="nav_link">Tutorials</a>
        <btn className="nav_link_btn">Contact</btn>
    </nav>
  </div>
</div>
</header>
    )
}
export default Header;