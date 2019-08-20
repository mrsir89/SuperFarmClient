import React from 'react';
import { withRouter } from 'react-router-dom';

function Header({ history, location, matcher }) {
  return (
    <div className="header">
      <div className="container">
        
        {/* logo size 166 * 55  */}
        <a className="site-logo" href="/"><img src="/images/logo.jpg" alt="SuperFarm UI" /></a> 
        <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
        {/* BEGIN CART */}
        <div className="top-cart-block">
          <div className="top-cart-info">
            <a href="javascript:void(0);" className="top-cart-info-count">장바구니 상품 개수</a>
            <a href="javascript:void(0);" className="top-cart-info-value">담긴 상품 총액</a>
          </div>
          <i className="fa fa-shopping-cart" />
          <div className="top-cart-content-wrapper">
            <div className="top-cart-content">
              <ul className="scroller" style={{ height: '250px' }}>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">실제 담은 제품과 사진</a></strong>
                  <em>123456789 원</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
              </ul>
              <div className="text-right">
                {/* <a href="shop-shopping-cart.html" className="btn btn-default">View Cart</a> */}
                <a href="/cart" className="btn btn-primary">상품 주문하기</a>
              </div>
            </div>
          </div>
        </div>
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

export default withRouter(Header);