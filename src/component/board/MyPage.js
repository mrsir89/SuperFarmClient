import React from 'react';
import { connect } from 'react-redux';

class MyPage extends React.Component {
    constructor(props) {    // props 굳이 안써줘도 넘어 옴
        super(props)

    }

    render() {
        const { auth } = this.props;
        const { userDetails } = auth;
        const {position} = userDetails;
        const couponNum=userDetails.coupon.length;
        return (
            <div>
                <p>이름 : {userDetails.username}<a href="/UserEdit">회원 정보수정</a></p>
                <p>주소 : {position.customerAddr}</p>
                <p>전화번호 : {position.customerPhone}</p>
                <p>쿠폰 : {position.cutomerCoupon}</p>
                <p>가입일 : {userDetails.userRegDay}</p>
                <p>최근 접속일자 : {userDetails.userLastConnect}</p>
                <p>이메일 : {userDetails.userEmail}</p>
            </div>
        )
    }


}

function mapStateToProps(state) {
    const { auth } = state;
    return {
        auth  // 배열 
    };
}
export default connect(mapStateToProps)(MyPage);