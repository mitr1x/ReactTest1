import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './Layout/Header';
import Intro from './Layout/Intro';
import Product_section from './Layout/Product_section';
import Desktop_photo from './Layout/Desktop_photo';
import Comments from './Layout/Comments_info';
import Phone_photo from './Layout/Phone_photo';
import Web_photo from './Layout/web_photo';
import Footer from './Layout/footer';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Intro />
      <Product_section />
      <Desktop_photo />
      <Comments />
      <Phone_photo />
      <Web_photo />
      <Footer />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
