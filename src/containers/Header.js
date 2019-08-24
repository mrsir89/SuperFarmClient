import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderCart from './HeaderCart'
//import { Actions } from '../../actions/index';

function Header({ history, location, matcher, cartlist}) {
  console.log(cartlist);
  if(window.location.href !== "http://localhost:3000/review/write"){
    return (
      <div className="header">
        <div className="container">
          <a className="site-logo" href="/"><img src="/images/logo.jpg" alt="Metronic Shop UI" /></a>
          <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
          {/* BEGIN CART */}
            <HeaderCart items={cartlist} />
          {/*END CART */}
          {/* BEGIN NAVIGATION */}
          <div className="header-navigation">
            <ul>
              <li className="dropdown active">
                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                  농산물
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/productlist/1">채소</a></li>
                  <li><a href="/productlist/2">과일</a></li>
                </ul>
              </li>
              <li className="dropdown active">
                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                  축산물
              </a>
                <ul className="dropdown-menu">
                  <li><a href="shop-account.html">돼지고기</a></li>
                  <li><a href="shop-wishlist.html">소고기</a></li>
                </ul>
              </li>
              <li className="dropdown active">
                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                  수산물
              </a>
                <ul className="dropdown-menu">
                  <li><a href="shop-privacy-policy.html">어패류</a></li>
                  <li><a href="shop-terms-conditions-page.html">해조류</a></li>
                </ul>
              </li>
  
              <li className="dropdown active">
                <a className="dropdown-toggle" href="qnaboard">
                  게시판
              </a>
              </li>
              <li className="dropdown active">
                <a className="dropdown-toggle" href="/about">
                  연락처
              </a>
              </li>
             
  
  
              {/* BEGIN TOP SEARCH */}
              <li className="menu-search">
                <span className="sep" />
                <i className="fa fa-search search-btn" />
                <div className="search-box">
                  <form action="#">
                    <div className="input-group">
                      <input type="text" placeholder="Search" className="form-control" />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Search</button>
                      </span>
                    </div>
                  </form>
                </div>
              </li>
              {/* END TOP SEARCH */}
            </ul>
          </div>
          {/* END NAVIGATION */}
        </div>
      </div>
    );
  } 
  else {
    return (
    <div></div>
    )
  }
 
}


const mapStateToProps = state => ({
  cartlist: state.cart.cartlist
});

export default withRouter(connect(mapStateToProps)(Header));
//export default withRouter(Header);
