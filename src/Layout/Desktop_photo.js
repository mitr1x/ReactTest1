import React from 'react';
import '../App.css'; 
import desk1 from '../Images/Lingua desktop 1.png';
import desk2 from '../Images/Lingua desktop 2.png';
import desk3 from '../Images/Lingua desktop 3.png';
function Desktop_photo() {
    return(
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
    )
}
export default Desktop_photo;
