import React from 'react';
import '../App.css';
import Phone1 from '../Images/Lingua phone 1.png';
import Phone2 from '../Images/Lingua phone 2.png';
import Phone3 from '../Images/Lingua phone 3.png';
import Phone4 from '../Images/Lingua phone 4.png';
import Phone5 from '../Images/Lingua phone 5.png';

function Phone_photo() {
  return (
<div className="Phone_photo">
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
</div>
)
}
  export default Phone_photo;