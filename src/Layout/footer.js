import React from 'react';
import logo from '../Images/logo.svg';


import '../App.css';

function Footer() {

  return (
 <footer className="footer">
    <div className="header_text"> 
      <img src={logo} className="header_logo" alt="logo" /> Хех кек мда <img src={logo} className="header_logo" alt="logo" />
    </div>
  </footer>

  )
}

export default Footer;