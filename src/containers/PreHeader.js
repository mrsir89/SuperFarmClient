import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function PreHeader( { userDetails } ) {
  console.log('PreHeader userDetails =====>',userDetails)
  return (
    <div className="pre-header">
      <div className="container">
        <div className="row">
          {/* BEGIN TOP BAR LEFT PART */}
          <div className="col-md-6 col-sm-6 additional-shop-info">
            <ul className="list-unstyled list-inline">
              <li><span>SuperFarm🥑</span></li>
              {/* END LANGS */}
            </ul>
          </div>
          {/* END TOP BAR LEFT PART */}
          {/* BEGIN TOP BAR MENU */}
          <div className="col-md-5 col-sm-6 additional-nav">
            <ul className="list-unstyled list-inline pull-right">
              <li><a href="/mypage">회원정보</a></li>
              {/* <li><a href="shop-wishlist.html">My Wishlist</a></li> */}
              {/* <li><a href="shop-checkout.html">Checkout</a></li> */}
              <li>
                {((userDetails === undefined || userDetails ===null))?(<a href="/login">로그인</a>):(<a href="/logout">로그아웃</a>)}
              </li>
              <li><a href="/signup">회원가입</a></li>
            </ul>
          </div>
          {/* END TOP BAR MENU */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.auth.userDetails
});
export default withRouter(connect(mapStateToProps)(PreHeader));
