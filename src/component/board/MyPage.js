import React from 'react';
import { connect } from 'react-redux';
import './MyPage.css'


class MyPage extends React.Component {
    constructor(props) {
        super(props)
    }



//  추후에 로그인 후 로그아웃으로 스위치
logout() {
    localStorage.clear();
    window.location.href = '/';
    
}

    render() { 
        const {userDetails}=this.props;
        var date =new Date( userDetails.userLastConnect);
        console.log("date====>",date, typeof date);

        const userdate=getFormatDate(date);
        console.log(userdate);
        return (
            <div id="contentWrap">
                <div id="content">
                    <div class="navi w1100">
                        <a href="/">HOME</a>
                        <a href="/shop/mypage.html">마이페이지</a>
                        <h2>마이페이지</h2>
                    </div><br/>
                    <link type="text/css" rel="stylesheet" href="/shopimages/samdamall/template/work/592/menu.2.css?t=201905070922"></link>
                    <div id="mypage_aside">
                        <dl id="my_info_top" class="mt_30">
                        <dt>
                            <div class="user_info">
                                <em>{userDetails.userName}</em>님<br/>
                                반갑습니다!
                            </div>
                            <a href="/usereditlogin" class="user_btn">회원정보 수정</a>  
                        </dt>
                        <dd>
                            <h3>적립 포인트</h3>
                            <p class="info">
                                고객님이 적립하신<br/>총 포인트 금액입니다.
                            </p>
                            <p class="number">
                                <em>{userDetails.position.customerPoint}</em> 포인트
                            </p>
                        </dd>
                        <dd>
                            <h3>회원 등급</h3>
                            <p class="info">
                                고객님의 현재 등급<br/>입니다.
                            </p>
                            <p class="number">
                                <em>{userDetails.position.customerGrade}</em> 등급
                            </p>
                        </dd>
                        <dd>
                            <h3>마지막 접속일자</h3>
                            <p class="info">
                                고객님의 마지막 접속일자<br/>입니다.
                            </p>
                            <p class="number">
                                <em>{userdate}</em> 입니다.
                            </p>
                        </dd>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }
}

function getFormatDate(date){
    console.log("function date ====> ",date);
     var year = date.getFullYear();	//yyyy 
     var month = (1 + date.getMonth());	//M 
     month = month >= 10 ? month : '0' + month;	//month 두자리로 저장 
     var day = date.getDate();	//d 
     day = day >= 10 ? day : '0' + day;	//day 두자리로 저장 
     var hour = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();
     
     return year + '.' + month + '.' + day + '.' + hour + ':' + min + ':' + sec; 
}


{/* <div>
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
<button onClick={this.logout}>Logout</button>
</div> */}
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