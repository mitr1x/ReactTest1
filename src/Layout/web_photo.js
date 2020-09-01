import React from 'react';
import '../App.css';
import web1 from '../Images/Lingua web 1.png';
import web2 from '../Images/Lingua web 2.png';
import web3 from '../Images/Lingua web 3.png';
import web4 from '../Images/Lingua web 4.png';
import web5 from '../Images/Lingua web 5.png';
import web6 from '../Images/Lingua web 6.png';
import web7 from '../Images/Lingua web 7.png';
function Web_photo() {
    return (

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
)
}
  export default Web_photo;