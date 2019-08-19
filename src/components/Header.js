import React from 'react';
import { withRouter } from 'react-router-dom';

function Header({ history, location, matcher }) {
  return (
    <div className="header">
      <div className="container">
        <a className="site-logo" href="shop-index.html"><img src="/assets/frontend/layout/img/logos/logo-shop-red.png" alt="Metronic Shop UI" /></a>
        <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
        {/* BEGIN CART */}
        <div className="top-cart-block">
          <div className="top-cart-info">
            <a href="javascript:void(0);" className="top-cart-info-count">3 items</a>
            <a href="javascript:void(0);" className="top-cart-info-value">$1260</a>
          </div>
          <i className="fa fa-shopping-cart" />
          <div className="top-cart-content-wrapper">
            <div className="top-cart-content">
              <ul className="scroller" style={{ height: '250px' }}>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="/assets/frontend/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width={37} height={34} /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
                </li>
              </ul>
              <div className="text-right">
                <a href="shop-shopping-cart.html" className="btn btn-default">View Cart</a>
                <a href="shop-checkout.html" className="btn btn-primary">Checkout</a>
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
                <li><a href="shop-index.html">Home Default</a></li>
                <li className="active"><a href="shop-index-header-fix.html">Home Header Fixed</a></li>
                <li><a href="shop-index-light-footer.html">Home Light Footer</a></li>
                <li><a href="shop-product-list.html">Product List</a></li>
                <li><a href="shop-search-result.html">Search Result</a></li>
                <li><a href="shop-item.html">Product Page</a></li>
                <li><a href="shop-shopping-cart-null.html">Shopping Cart (Null Cart)</a></li>
                <li><a href="shop-shopping-cart.html">Shopping Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="shop-about.html">About</a></li>
                <li><a href="shop-contacts.html">Contacts</a></li>
                <li><a href="shop-account.html">My account</a></li>
                <li><a href="shop-wishlist.html">My Wish List</a></li>
                <li><a href="shop-goods-compare.html">Product Comparison</a></li>
                <li><a href="shop-standart-forms.html">Standart Forms</a></li>
                <li><a href="shop-faq.html">FAQ</a></li>
                <li><a href="shop-privacy-policy.html">Privacy Policy</a></li>
                <li><a href="shop-terms-conditions-page.html">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            <li className="dropdown active">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                축산물
            </a>
              <ul className="dropdown-menu">
                <li><a href="shop-index.html">Home Default</a></li>
                <li className="active"><a href="shop-index-header-fix.html">Home Header Fixed</a></li>
                <li><a href="shop-index-light-footer.html">Home Light Footer</a></li>
                <li><a href="shop-product-list.html">Product List</a></li>
                <li><a href="shop-search-result.html">Search Result</a></li>
                <li><a href="shop-item.html">Product Page</a></li>
                <li><a href="shop-shopping-cart-null.html">Shopping Cart (Null Cart)</a></li>
                <li><a href="shop-shopping-cart.html">Shopping Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="shop-about.html">About</a></li>
                <li><a href="shop-contacts.html">Contacts</a></li>
                <li><a href="shop-account.html">My account</a></li>
                <li><a href="shop-wishlist.html">My Wish List</a></li>
                <li><a href="shop-goods-compare.html">Product Comparison</a></li>
                <li><a href="shop-standart-forms.html">Standart Forms</a></li>
                <li><a href="shop-faq.html">FAQ</a></li>
                <li><a href="shop-privacy-policy.html">Privacy Policy</a></li>
                <li><a href="shop-terms-conditions-page.html">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            <li className="dropdown active">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                수산물
            </a>
              <ul className="dropdown-menu">
                <li><a href="shop-index.html">Home Default</a></li>
                <li className="active"><a href="shop-index-header-fix.html">Home Header Fixed</a></li>
                <li><a href="shop-index-light-footer.html">Home Light Footer</a></li>
                <li><a href="shop-product-list.html">Product List</a></li>
                <li><a href="shop-search-result.html">Search Result</a></li>
                <li><a href="shop-item.html">Product Page</a></li>
                <li><a href="shop-shopping-cart-null.html">Shopping Cart (Null Cart)</a></li>
                <li><a href="shop-shopping-cart.html">Shopping Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="shop-about.html">About</a></li>
                <li><a href="shop-contacts.html">Contacts</a></li>
                <li><a href="shop-account.html">My account</a></li>
                <li><a href="shop-wishlist.html">My Wish List</a></li>
                <li><a href="shop-goods-compare.html">Product Comparison</a></li>
                <li><a href="shop-standart-forms.html">Standart Forms</a></li>
                <li><a href="shop-faq.html">FAQ</a></li>
                <li><a href="shop-privacy-policy.html">Privacy Policy</a></li>
                <li><a href="shop-terms-conditions-page.html">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            <li className="dropdown active">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                게시판
            </a>
              <ul className="dropdown-menu">
                <li><a href="shop-index.html">Home Default</a></li>
                <li className="active"><a href="shop-index-header-fix.html">Home Header Fixed</a></li>
                <li><a href="shop-index-light-footer.html">Home Light Footer</a></li>
                <li><a href="shop-product-list.html">Product List</a></li>
                <li><a href="shop-search-result.html">Search Result</a></li>
                <li><a href="shop-item.html">Product Page</a></li>
                <li><a href="shop-shopping-cart-null.html">Shopping Cart (Null Cart)</a></li>
                <li><a href="shop-shopping-cart.html">Shopping Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="shop-about.html">About</a></li>
                <li><a href="shop-contacts.html">Contacts</a></li>
                <li><a href="shop-account.html">My account</a></li>
                <li><a href="shop-wishlist.html">My Wish List</a></li>
                <li><a href="shop-goods-compare.html">Product Comparison</a></li>
                <li><a href="shop-standart-forms.html">Standart Forms</a></li>
                <li><a href="shop-faq.html">FAQ</a></li>
                <li><a href="shop-privacy-policy.html">Privacy Policy</a></li>
                <li><a href="shop-terms-conditions-page.html">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            <li className="dropdown active">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="javascript:;">
                Contact
            </a>
              <ul className="dropdown-menu">
                <li><a href="shop-index.html">Home Default</a></li>
                <li className="active"><a href="shop-index-header-fix.html">Home Header Fixed</a></li>
                <li><a href="shop-index-light-footer.html">Home Light Footer</a></li>
                <li><a href="shop-product-list.html">Product List</a></li>
                <li><a href="shop-search-result.html">Search Result</a></li>
                <li><a href="shop-item.html">Product Page</a></li>
                <li><a href="shop-shopping-cart-null.html">Shopping Cart (Null Cart)</a></li>
                <li><a href="shop-shopping-cart.html">Shopping Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="shop-about.html">About</a></li>
                <li><a href="shop-contacts.html">Contacts</a></li>
                <li><a href="shop-account.html">My account</a></li>
                <li><a href="shop-wishlist.html">My Wish List</a></li>
                <li><a href="shop-goods-compare.html">Product Comparison</a></li>
                <li><a href="shop-standart-forms.html">Standart Forms</a></li>
                <li><a href="shop-faq.html">FAQ</a></li>
                <li><a href="shop-privacy-policy.html">Privacy Policy</a></li>
                <li><a href="shop-terms-conditions-page.html">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            <li className="dropdown active">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="/about:;">
                About
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
