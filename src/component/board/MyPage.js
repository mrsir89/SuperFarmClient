import React from 'react';
import { connect } from 'react-redux';
import './MyPage.css';
import Login from '../login/Login';

class MyPage extends React.Component {

//  추후에 로그인 후 로그아웃으로 스위치
logout() {
    localStorage.clear();
    window.location.href = '/';
    
}

    render() {
        const { userDetails } = this.props;

        if (userDetails === null || userDetails === undefined) {
            alert("로그인 후 이용바랍니다.");
            return (
                <Login />
            );
        } else {
            var date = new Date(userDetails.userLastConnect);
            console.log("date====>", date, typeof date);

            const userdate = getFormatDate(date);
            console.log(userdate);

            return (
                <div id="contentWrap">
                    
                    <div id="content">
                        <div class="navi w1100">
                            <a href="/">HOME</a>
                            <a href="/mypage">마이페이지</a>
                            <h2>마이페이지</h2>
                        </div><br />
                        <link type="text/css" rel="stylesheet" href="/shopimages/samdamall/template/work/592/menu.2.css?t=201905070922"></link>
                        <div id="mypage_aside">
                            <dl id="my_info_top" class="mt_30">
                                <dt>
                                    <div class="user_info">
                                        <em>{userDetails.username}</em>님<br />
                                        반갑습니다!
                                    </div>
                                    <a href="/usereditlogin" class="user_btn">회원정보 수정</a>
                                    
                                </dt>
                                <dd>
                                    <h3>적립 포인트</h3>
                                    <p class="info">
                                        고객님이 적립하신<br />총 포인트 금액입니다.
                            </p>
                                    <p class="number">
                                        <em>{userDetails.position.customerPoint}</em> 포인트
                            </p>
                                </dd>
                                <dd>
                                    <h3>회원 등급</h3>
                                    <p class="info">
                                        고객님의 현재 등급<br />입니다.
                            </p>
                                    <p class="number">
                                        <em>{userDetails.position.customerGrade}</em> 등급
                            </p>
                                </dd>
                                <dd>
                                    <h3>마지막 접속일자</h3>
                                    <p class="info">
                                        고객님의 마지막 접속일자<br />입니다.
                            </p>
                                    <p class="number">
                                        <em>{userdate}</em> 입니다.
                            </p>
                                </dd>
                            </dl>
                            <ul id="my_link_nav" class="mt_20">
                                <li class="my_menu01"><a href=""><span>주문/배송조회</span></a></li>
                                <li class="my_menu02"><a href=""><span>포인트내역</span></a></li>
                                <li class="my_menu03"><a href=""><span>쿠폰내역</span></a></li>
                                <li class="my_menu04"><a href=""><span>관심상품(장바구니)</span></a></li>
                                <li class="my_menu05"><a href=""><span>e-mail 문의</span></a></li>
                                <li class="my_menu05"><a href=""><span>1:1문의게시판</span></a></li>
                                <li class="my_menu07"><a href=""><span>오늘 본 상품</span></a></li>
                                <li class="my_menu08"><a href=""><span>회원탈퇴</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
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