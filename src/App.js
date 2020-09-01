import React from 'react';
import logo from './logo.svg';
import desk1 from './Lingua desktop 1.png';
import desk2 from './Lingua desktop 2.png';
import desk3 from './Lingua desktop 3.png';
import Phone1 from './Lingua phone 1.png';
import Phone2 from './Lingua phone 2.png';
import Phone3 from './Lingua phone 3.png';
import Phone4 from './Lingua phone 4.png';
import Phone5 from './Lingua phone 5.png';
import web1 from './Lingua web 1.png';
import web2 from './Lingua web 2.png';
import web3 from './Lingua web 3.png';
import web4 from './Lingua web 4.png';
import web5 from './Lingua web 5.png';
import web6 from './Lingua web 6.png';
import web7 from './Lingua web 7.png';
import './App.css';
import { render } from '@testing-library/react';

function App() {

  return (
<div className="App">
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

  <div className="intro">
    <div className="container">
      <div className="intro_inner">
        <h1 className="intro_title">Lingua.Live</h1>
          <h2 className="intro_subtitle">If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow value.  </h2>
      </div>
    </div>
  </div>

      <section className="section">
        <div className="container">
            <h1 className="section_title">Product</h1>
            <h2 className="section_text">
              By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
          </h2>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
            <h1 className="section_title">The Scope</h1>
            <h2 className="section_text">
          <li>By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.</li>
          <li>By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.</li>
          <li>By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.</li>
          <li>By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.</li>
          </h2>
        </div>
      </section>

    <div className="tab_photo">
        <div className="tab_item">
          <div className="desk_photo">
            <img src={desk1}/>
          </div>
        </div>
        <div className="tab_item_center">
          <div className="desk_photo">
            <img src={desk2}/>
          </div>
        </div>
        <div className="tab_item">
          <div className="desk_photo">
            <img src={desk3}/>
          </div>
        </div>
    </div>
      
  <div className="section">
    <div className="container">
      <div className="section_title">
        Design Process
      </div>
      <div className="design_title">
        Research
      </div>
      <div className="section_text">
        The background of an element is the total size of the element, including padding and border (but not the margin).
        The background of an element is the total size of the element, including padding and border (but not the margin).
        The background of an element is the total size of the element, including padding and border (but not the margin).
      </div>
    </div>
  </div>

  <div className="comments">
    <div className="comments_text">
        Sets all the properties for a list in one declarationSets all the properties for a list in one declarationSets all the properties for a list in one declarationdss
      <div className="author">
        <div className="comments_author">Yulia</div>
        <div className="comments_job">Russian Language Student</div>
      </div>   
    </div>     
  </div>
  <div className="section">
    <div className="container"> 
      <div className="design_title">
        The problem
      </div>
      <div className="section_text">
        The background of an element is the total size of the element, including padding and border (but not the margin).
        The background of an element is the total size of the element, including padding and border (but not the margin).
        The background of an element is the total size of the element, including padding and border (but not the margin).
      </div>
      <div className="subtext">
        Specifies the position of the list-item markers (bullet points)
        Specifies the position of the list-item markers (bullet points)
        Specifies the position of the list-item markers (bullet points)
      </div>
    </div>
  </div>


  <div className="phone_photo">
    <div className="phone_card">
      <img src={Phone1} alt="phone1"/>
    </div>
    <div className="phone_card">
      <img src={Phone2} alt="phone2"/>
    </div>
    <div className="phone_card">
      <img src={Phone3} alt="phone3"/>
    </div>
    <div className="phone_card">
      <img src={Phone4} alt="phone4"/>
    </div>
    <div className="phone_card">
      <img src={Phone5} alt="phone5"/>
    </div>
  </div>
  <section className="section">
    <div className="container">
      <div className="design_title">
        Cross platform experience
      </div>
      <h2 className="section_text">
        By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
      </h2>
    </div>
  </section>
  <div className="web">
    <div className="top">
      <div className="web_item">
        <img src={web1} alt=""/>
      </div>
      <div className="web_item">
        <img src={web2} alt=""/>
      </div>
      <div className="web_item">
        <img src={web3} alt=""/>
      </div>
    </div>

    <div className="bottom">
      <div className="web_item">
        <img src={web4} alt=""/>
      </div>
      <div className="web_item">
        <img src={web5} alt=""/>
      </div>
      <div className="web_item">
        <img src={web6} alt=""/>
      </div>
      <div className="web_item">
        <img src={web7} alt=""/>
      </div> 
    </div>
  </div>

  <footer className="footer">
    <div className="header_logo"> 
      <img src={logo} className="App-logo" alt="logo" /> Хех кек мда <img src={logo} className="App-logo" alt="logo" />
    </div>
  </footer>
</div>
  );
}

export default App;
