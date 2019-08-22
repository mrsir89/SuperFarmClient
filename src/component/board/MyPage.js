import React from 'react';
import { connect } from 'react-redux';


class MyPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        const {userDetails}=this.props;
        return (
            <div>
                <div class="navi w1100">
                    <a href="/">HOME</a>
                    <a href="/shop/mypage.html">마이페이지</a>
                    <h2>마이페이지</h2>
                </div>
                <p>이름 : {userDetails.username}<a href="/usereditlogin">회원 정보수정</a></p>
                <p>주소 : {userDetails.position.customerAddr}</p>
                <p>전화번호 : {userDetails.position.customerPhone}</p>
                <p>쿠폰 : {userDetails.position.cutomerCoupon}</p>
                <p>가입일 : {userDetails.userRegDay}</p>
                <p>최근 접속일자 : {userDetails.userLastConnect}</p>
                <p>이메일 : {userDetails.userEmail}</p><br/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    console.log(auth, "auth....");
    const { userDetails } = auth;
    console.log(userDetails, "userdetail....");
    return {
        userDetails // 배열...
    };
}
export default connect(mapStateToProps)(MyPage);