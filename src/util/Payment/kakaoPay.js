import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import './kakaoTable.css';


    // 1순서
    //결제를 하기 위해서 넘어와야 하는 목록 (준비 단계 -> reuest )
    /**
     * cid 가맹점 코드 10자 : TC0ONETIME <  test 버전용
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
      * (결제준비를 위한 <- response 목록) 
      * 
      * tid 결제 고유번호 20자	     : String
        next_redirect_app_url	    : 요청한 클라이언트가 모바일 앱일 경우 해당 url을 통해 카카오톡 결제페이지를 띄움	String
        next_redirect_mobile_url	: 요청한 클라이언트가 모바일 웹일 경우 해당 url을 통해 카카오톡 결제페이지를 띄움	String
        next_redirect_pc_url	    : 요청한 클라이언트가 pc 웹일 경우 redirect. 카카오톡으로 TMS를 보내기 위한 사용자입력화면이으로 redirect	String
        android_app_scheme	        : 카카오페이 결제화면으로 이동하는 안드로이드 앱스킴	String
        ios_app_scheme	            : 카카오페이 결제화면으로 이동하는 iOS 앱스킴	String
        created_at	                : 결제 준비 요청 시간	Datetime
      */

      /**(최종 결제 승인을 위한 호출 -> request)
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

class kakaoPay extends React.Component {

    constructor(props) {
        const { userDetails } = props
        super(props)
        this.state = {
            userDetails: userDetails

        }


    }


    // 주문시 order를 생성 하기 위한 function
    _createOrder=()=>{

        //order에 필요한 정보를 불러 와야 한다.
        const order ={
            userid:'tester01',
            quantity:'수량',
            total:'1'
        }

    }


    _kakaoPayStart = () => {
        console.log('kakopay test', this.props)
        const { kakaoPayReady } = this.props;
        kakaoPayReady();
    }



    render() {
        console.log('결제 실행 함니다.')
        return (
            <div>
                <h4><b> 회원정보</b> </h4>
                <form action={this._kakaoPayStart}>
                    <table className="tg" width="100%">
                        <tr>
                            <th className="tg-833v" colSpan="4" width="10%">  이름</th>
                            <th className="tg-gt6j" colSpan="16" width="90%"><input type="text" value="이름을 넣으세요" /></th>
                        </tr>

                        <tr>
                            <td className="tg-wymk" colSpan="4" rowSpan="2" width="10px">  E-mail</td>
                            <td className="tg-m9fq" colSpan="7" width="40px">
                                <input type="text" size="20" /> @ <br/>
                                <br/>
                                <input type="text" size="10" />&nbsp;&nbsp; <input type="text" size="10" />
                                </td>
                            <td className="tg-vsa0" colSpan="3" rowSpan="2" width="10%">연락처</td>
                            <td className="tg-d44j" colSpan="6" rowSpan="2" width="40%">
                                <input type="text" size="3" value="010" />-
                                <input type="text" size="4" value="7777" />-
                                <input type="text" size="4" value="5465" /></td>
                        </tr>
                        <tr >
                            <td className="tg-d44j" colSpan="7" width="40%"><intput type="text" /></td>
                        </tr>
                        <tr height="50px">
                            <td className="tg-default" colSpan="20"></td>
                        </tr>
                    </table>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div>
                        <h4><b>배송지 정보</b></h4>
                    </div>
                    <table className="tg" width="100%">
                        <tr>
                            <th className="tg-g4tm" colSpan="3">이름</th>
                            <th className="tg-gt6j" colSpan="17">
                                <input type="text" />
                            </th>
                        </tr>
                        <tr>
                            <td className="tg-g4tm" colSpan="3">
                                연락처(휴대폰)
                            </td>
                            <td className="tg-d44j" colSpan="7">
                                <select name="telno1">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="017">017</option>
                                    <option value="016">016</option>
                                    <option value="019">019</option>

                                </select>
                                -
                                <input type="text" size="4" />
                                -
                                <input type="text" size="4" />
                            </td>
                            <td className="tg-g4tm" colSpan="3">
                                연락처2(자택)
                            </td>
                            <td className="tg-d44j" colSpan="7">
                                <select name="telno2">
                                    <option value="0002" selected>02</option>
                                    <option value="0031">031</option>
                                    <option value="0032">032</option>
                                    <option value="0033">033</option>
                                    <option value="0041">041</option>
                                    <option value="0042">042</option>
                                    <option value="0043">043</option>
                                    <option value="0051" >051</option>
                                    <option value="0052">052</option>
                                    <option value="0053">053</option>
                                    <option value="0054">054</option>
                                    <option value="0055">055</option>
                                    <option value="0061">061</option>
                                    <option value="0062">062</option>
                                    <option value="0063">063</option>
                                    <option value="0064">064</option>
                                    <option value="0502">0502</option>
                                </select>
                                -
                                <input type="text" size="4" />
                                -
                                <input type="text" size="4" />
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-g4tm" colSpan="3">
                                배송지 선택
                            </td>
                            <td className="tg-d44j" colSpan="17">
                                <input type="radio" name="chk_info" value="자택" />자택
                                <input type="radio" name="chk_info" value="자택" />최근배송지
                                <input type="radio" name="chk_info" value="자택" />신규배송지
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-g4tm" colSpan="3" rowSpan="2">
                                주소
                            </td>
                            <td className="tg-de2y" colSpan="17">
                                <input type="text" />
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-d44j" colSpan="17"></td>
                        </tr>
                        <tr>
                            <td className="tg-g4tm" colSpan="3" rowSpan="2">
                                주문메세지<br />(100자내외)
                            </td>
                            <td className="tg-d44j" colSpan="17" rowSpan="2">
                                <input type="textarea" size="100" />
                            </td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td className="tg-g4tm" colSpan="3">
                                무통장 입금자명
                            </td>
                            <td className="tg-d44j" colSpan="17">
                                <input type="text" />
                            </td>
                        </tr>
                        <tr height="50px">
                            <td className="tg-default" colSpan="20"></td>
                        </tr>
                    </table>
                    <div>
                        &nbsp;
                    </div>
                    <div>
                        &nbsp;
                    </div>

                    <table className="tg" width="1170px">
                        <tr>
                            <th className="tg-cly1" colSpan="20">
                                주문상품 할인적용
                            </th>
                        </tr>
                        <tr>
                            <td className="tg-nrix" colSpan="3">
                                상품금액
                            </td>
                            <td className="tg-nrix">
                                &nbsp;
                            </td>
                            <td className="tg-nrix" colSpan="4">
                                배송비
                            </td>
                            <td className="tg-nrix" colSpan="4">
                                할인금액
                            </td>
                            <td className="tg-nrix" colSpan="4">
                                추가금액
                            </td>
                            <td className="tg-nrix" colSpan="4">
                                결제 예정금액
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-nrit" colSpan="3">
                                100,000
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                +
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                3,000
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                -
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                10000
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                +
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                0
                            </td>
                            <td className="tg-nrit" colSpan="2">
                                =
                            </td>
                            <td className="tg-nrit" colSpan="3">
                                8
                            </td>
                        </tr>
                        <tr height="50px">
                            <td className="tg-default" colSpan="20"></td>
                        </tr>
                    </table>
                    <div>
                        &nbsp;
                    </div>
                    <table className="tg">
                        <tr>
                            <th className="tg-cly1" colSpan="20">
                                결제 서비스
                            </th>
                        </tr>
                        <tr>
                            <td className="tg-cly1" colSpan="4" width="10px" >
                                결제 방법
                            </td>
                            <td className="tg-payCheck" colSpan="16">

                                <input type="radio" name="clickPay" value="bankDeposit" />무통장입금 <br/><br/>
                                <input type="radio" name="clickPay" value="kakaopay" />카카오페이 <br/><br/>
                                <input type="radio" name="clickPay" value="creaditcart" />신용카드 <br/><br/>
                                <input type="radio" name="clickPay" value="naverpay" />네이버페이 <br/><br/>
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-nrix" colSpan="20">
                                Radio 선택에 따라<br />
                                결제 내용이 나옵니다.
                            </td>
                        </tr>
                    </table>
                    <div>
                        <br />&nbsp;<br />
                    </div>
                    <h4>주문자 동의</h4>
                    <table className="tg">
                        <tr>
                            <td className="tg-cly1" colSpan="4">
                                주문동의
                            </td>
                            <td className="tg-lastCheck" colSpan="16">
                                <input type="radio" name="check" value="true"/> 상기 결제정보를 확인하였으며, 구매진행에 동의합니다.
                            </td>
                        </tr>
                        <tr>
                            <td className="tg-cly1" colSpan="4">
                                최종 결제금액
                            </td>
                            <td className="tg-lastCheck" colSpan="16">
                                <h4><b> 100000000000 원</b></h4>
                               얼마가 나와야 하는지 표시 하면 된다용 
                            </td>
                        </tr>
                        <tr height ="40px">
                            &nbsp;
                        </tr>
                    </table>

                    <table width="1170px">
                        <tr >
                            <td className="orderClick"colSpan="20">
                                <button type="sumbit" value="주문하기" className="submitButton">주문하기</button>
                                &nbsp;&nbsp;
                                <button type="reset" value="취소" className="submitcancel">취소</button>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <input type="button" value="카카오페이 테스트" onClick={this._kakaoPayStart} />
                    <input type="text" />
                    <input tyep="text" />
                    <input tyep="text" />
                </form>


            </div>
        )
    }
}
const mapStateToProps = (state) => {

    const { auth } = state;
    const { userDetails } = auth;
    return {
        userDetails
    }

}
const mapDispatchToProps = dispatch => ({
    kakaoPayReady: () => dispatch(Actions.kakaoPayReady())
})

export default connect(mapStateToProps, mapDispatchToProps)(kakaoPay);