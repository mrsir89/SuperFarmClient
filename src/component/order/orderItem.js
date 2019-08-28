import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import './order.css';
import { ActionTypes } from '../../contants';
import { exportDefaultSpecifier } from '@babel/types';
import orderSuccess from './orderSuccess';


// 1순서
//결제를 하기 위해서 넘어와야 하는 목록 (준비 단계 -> reuest ) 프론트 -> 백엔드 -> 카카오서버
/**
 * cid                 : 가맹점 코드 10자 TC0ONETIME <  test 버전용
 * partner_order_id    : 가맹점 주문번호 < 우리에게 생성되는 주문 번호
 * partner_user_id     : 가맹점 회원 Id
 * quantity            : 상품 수량,
 * total_amount        : 상품 총액
 * tax_free_amount     : 상품 비과세 금액 tax
 * approval_url        : 결제 성공시 redirect url 최대 255
 * cancel_url          : 결제 취소 redirect url 최대 255
 * fail_url            : 결제 실패시 url 최대 255
 */

/**
 * (결제준비를 위한 <- response 목록) 카카오서버 -> 백엔드 -> 프론트(개인 카톡으로 알람옴)
 * 
 * tid 결제 고유번호 20자	     : String
   next_redirect_app_url	    : 요청한 클라이언트가 모바일 앱일 경우 해당 url을 통해 카카오톡 결제페이지를 띄움	String
   next_redirect_mobile_url	    : 요청한 클라이언트가 모바일 웹일 경우 해당 url을 통해 카카오톡 결제페이지를 띄움	String
   next_redirect_pc_url	        : 요청한 클라이언트가 pc 웹일 경우 redirect. 카카오톡으로 TMS를 보내기 위한 사용자입력화면이으로 redirect	String
   android_app_scheme	        : 카카오페이 결제화면으로 이동하는 안드로이드 앱스킴	String
   ios_app_scheme	            : 카카오페이 결제화면으로 이동하는 iOS 앱스킴	String
   created_at	                : 결제 준비 요청 시간	Datetime
 */

/**(최종 결제 승인을 위한 호출 -> request) (개인카톡에서 결제 완료) -> 백엔드 -> 프론트(완료)
 *  cid               : 가맹점 코드 10자
 *  tid               : 결제 고유 번호. 결제 준비 API의 응답에서 얻을 수 있음
 * partner_order_id   : 가맹점 주문번호. 결제 준비 API에서 요청한 값고 일치해야 함
 * partner_user_id    : 가맹점 회원 id. 결제 준비 API에서 요청한 값과 일치해야 함
 * pg_token           : 결제 승인 요청을 인증하는 토큰 사용자가 결제 수단 선택 완료시 
 *                      approval_url로 redirection해 줄때 pg_token을 query String으로 넘겨줌
 */

/**
 * ( 결제 완료후 response 되는 값들 <- response)
 * 
 * aid	Request 고유 번호	String
     tid	                : 결제 고유 번호	String
     cid	                : 가맹점 코드	String
     sid	                : subscription id. 정기(배치)결제 CID로 결제요청한 경우 발급	String
     partner_order_id	: 가맹점 주문번호	String
     partner_user_id	    : 가맹점 회원 id	String
     payment_method_type	: 결제 수단. CARD, MONEY 중 하나	String
     amount	            : 결제 금액 정보	JSON Object
     card_info	        : 결제 상세 정보(결제수단이 카드일 경우만 포함)	JSON Object
     item_name	        : 상품 이름. 최대 100자	String
     item_code	        : 상품 코드. 최대 100자	String
     quantity	        : 상품 수량	Integer
     created_at	        : 결제 준비 요청 시각	Datetime
     approved_at	        : 결제 승인 시각	Datetime
     payload	            : Request로 전달한 값	String
     * 
 */


/**
 *  cart 나 구매클릭시  물품 정보 props로 가져 온다는 가정하에  시작
 *  orderList 라는 모델에 객체를 담아 보내기
 *  필요 param
 *  userNum
 *  orderTotalPrice
 *  orderItemprice[]
 * 
 */
class orderItem extends React.Component {

    constructor(props) {
        super(props)
        const { orderlist } = props
        console.log(orderlist,'adsasdasdasdasdasdasd')
        this.state = {
            orderlist : orderlist
        }
    }

    
    render() {
        var list = this.state.orderlist
        
        return (
            <div>
               123123123123
aaaaaaaaaaaaaaaaaaaaaaaaaaaa

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state, 'ddddddddddddddd')

    const { auth } = state;
    const { userDetails } = auth;
    const { order } = state;
    return {
        userDetails,
        order
    }

}
const mapDispatchToProps = dispatch => ({
    kakaoPayReady: (orderSend) => dispatch(Actions.kakaoPayReady(orderSend)),
    checkoutOrder: (orders) => dispatch(Actions.checkoutOrder(orders))
})

export default orderItem;