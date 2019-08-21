import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//import { Actions } from '../../actions/index';

function Header({ history, location, matcher, cartlist}) {
  if(window.location.href !== "http://localhost:3000/review/write"){
    return (
      <div className="header">
        <div className="container">
          <a className="site-logo" href="/"><img src="/images/logo.jpg" alt="Metronic Shop UI" /></a>
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
                {/* ---------------------------cartlist map으로 표현--------------------------------------------------- */}
                  {
                    cartlist.map(item => {
                      const {cartProductName, cartProductPrice, cartProductCount, cartProductImg,productBoardNum } = item;
                      return (
                        <li>
                          <a href="/cart"><img src={cartProductImg} alt="Product poster" width={37} height={34} /></a>
                          <span className="cart-content-count">{cartProductCount}</span>
                          <strong><a href="/cart">{cartProductName}</a></strong>
                          <em>{cartProductPrice}원</em>
                          <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                      </li>
                      );
                    })
                  }
                  
                 {/* ------------------------------------------------------------------------------ */}
                </ul>
                <div className="text-right">
                  <a href="/cart" className="btn btn-default">View Cart</a>
                  <a href="/cart" className="btn btn-primary">Checkout</a>    
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