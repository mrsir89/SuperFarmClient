import React from 'react';
import { Link } from 'react-router-dom';
import './NaviBar.css';




// cates: Navibarj.cates= 더미


function NaviBar() {
  return (
    <div className="container">  
    
        <div className="list-group list-group-horizontal-md" >
          {/* <Product/> */}
          <ul class = "navbar">
            <li><Link className="active" to="/review/all">Home</Link></li>
            <li><Link  to="/review/all">About</Link></li>
            <li><Link  to="/review/all">SusanMul</Link></li>
            <li><Link  to="/review/all">NongSanMul</Link></li>
            <li><Link  to="/review/all">ChukSanMul</Link></li>
            <li><Link  to="/review/all">Notice</Link></li>
            <li><Link  to="/review/all">Contact</Link></li>
          </ul>
        <br></br>
            <br></br>
            <p><strong>우리는 수퍼팜~.</strong></p>
    </div>
</div>     
  );
}

export default NaviBar;