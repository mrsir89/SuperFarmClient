import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Actions } from '../actions/index';


function PreHeader({ userDetails, logout, history }) {

  const _logout = (e) => {
    e.preventDefault();
    logout();
    
    alert('로그아웃 되었습니다.')
    window.location.href ='http://localhost:3000/';
    
  }
  // const _login =(e) =>{
  //   window.open('/login','로그인','width=500,height=300,location=no,status=no,scrollbars=yes')
  // }
  const _signup =(e) => {
    if(userDetails === null && userDetails ===undefined){
    window.open("/signup" ,'회원가입  작성', 'width=600,height=750,location=no,status=no,scrollbars=yes')
    }else{
      alert('로그아웃 후 이용해 주세요')
    }

  }
  console.log('PreHeader userDetails =====>', userDetails)
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
          <div className="col-md-5 col-sm-6 additional-nav">
            <ul className="list-unstyled list-inline pull-right">
              <li><a href="/mypage">회원정보</a></li>
              <li>
                {((userDetails === undefined || userDetails === null)) ? (<a href='/login'>로그인</a>)
                  : (<a onClick={_logout}>로그아웃 </a>)}
              </li>
              <li><a onClick={_signup}>회원가입</a></li>
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
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(Actions.logout())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PreHeader));
