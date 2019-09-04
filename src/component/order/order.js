import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import './order.css';
import { ActionTypes } from '../../contants';
import { Redirect } from 'react-router-dom';


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
class order extends React.Component {

    constructor(props) {

        const { userDetails } = props
        const { order } = props
        const { orderList } = order
        const { history } = props
        console.log(props, ' constructor props')
        if (userDetails === null || userDetails === undefined) {
            alert('잘못된 접근입니다')

        }
        super(props)
        this.state = {
            userDetails: userDetails,
            userNum: userDetails.userNum,
            userId: userDetails.userId,
            shippingReceiver: '',
            deliveryAddress: '',
            paymentMethod: {
                kakaoPay: true,
                bank: false,
                creditCard: false,
                naverPay: false
            },
            finalCheck: false,
            productCode: '',
            SubPrice: orderList.SubPrice,
            orderTotalPrice: orderList.TotalPrice,
            orderMemo: '',
            shippigMethod: '',
            shippingPrice: orderList.shippingPrice,
            shipping_memo: '',
            bankDepositName: '',
            phone1: '', phone2: '', phone3: '',
            phone4: '', phone5: '', phone6: '',
            orderItemsList: orderList.cartlist
        }
        this._paymentCheck = this._paymentCheck.bind(this);
    }

    _email(email) {
        var emailArray = email.split('@')
        return emailArray
    }
    _phoneNumber(phone) {
        var phoneArray = phone.split('-')
        return phoneArray
    }
    _onChangeInputText = (event) => {

        const target = event.target
        const name = target.name
        const value = target.value
        console.log('name : ', name, '   value: ', value)
        this.setState({
            [name]: value
        })

    }
    _onChangePhoneNumber = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        console.log(event.target)
        console.log(target.name, ' name')
        console.log(target.value, ' value')

        this.setState({
            [name]: value
        })
    }

    componentWillMount = () => {
        const { history } = this.props
        if (this.state.userNum === null || this.state.userNum === undefined) {
            alert('잘못된 접근 입니다.')
            history.push("/")
        }
    }

    _phoneSum(type) {
        let phone = ''
        if (type == 1) {
            phone = this.state.phone1 + '-' + this.state.phone2 + '-' + this.state.phone3
        } else {
            phone = this.state.phone4 + '-' + this.state.phone5 + '-' + this.state.phone6
        }
        return phone;
    }

    _checkOut = () => {

        if (!this._inputCheck()) {
            return
        }
        const { checkoutOrder } = this.props
        const { removeCartAll } = this.props
        const { history } = this.props;
        console.log('checkout sssssss', this.state)
        const itemlist = this.state.orderItemsList
        const orderModel = {
            userNum: this.state.userNum,
            paymentMethod: 'kakaopay',
            orderTotalPrice: this.state.orderTotalPrice,
            orderMemo: this.state.orderMemo,
            deliveryAddress: this.state.deliveryAddress,
            shippingMethod: this.state.shippigMethod,
            shippingPrice: this.shippngPrice,
            shippingReceiver: this.state.shippingReceiver,
            shippingReceiverPhone: this._phoneSum(1),
            shippingReceiverPhone2: this._phoneSum(2),
            shippingMemo: this.state.orderMemo,
            orderItemsList: this.state.orderItemsList
        }
        console.log(orderModel, ' order 들어가기전 확인 ')
        if (true) {
            checkoutOrder(orderModel).then(response => {
                if (response.type === ActionTypes.CHECKOUTORDERS_SUCCESS) {
                    const { data } = response.payload
                    if (data !== null && data !== undefined) {
                        console.log(data, '----------------')
                        this._kakaopayStart(data);
                    }
                }
            });

        } else {
            alert('현재 카카오페이 서비스만 이용 가능 합니다.')
        }
    }

    _inputCheck() {

        if (this.state.shippingReceiver === null || this.state.shippingReceiver === undefined ||
            this.state.shippingReceiver === '') {
            alert('받으실 분이 누락 되었습니다.')
            return false
        } else if (this.state.deliveryAddress === null || this.state.deliveryAddress === undefined ||
            this.state.deliveryAddress === '') {
            alert('주소가 누락 되었습니다.')
            return false
        } else if (this.state.phone1 === null || this.state.phone2 === null || this.state.phone3 === null) {
            alert('전화번호가 누락 되었습니다.')
            return false
        } else if(this.state.finalCheck === false){
            alert('결제 정보 확인을 체크해주세요')
            return false
        } else {
            return true
        }

    }

    _kakaopayReadSetting = (data) => {
        const cartlist = this.state.orderItemsList
        const { order } = this.props
        console.log(cartlist.length, ' size 확인')
        console.log(cartlist[0], ' 0번 확인 ')
        var itemName = ''
        if (cartlist.length == 1) {
            itemName = cartlist[0].cartProductName;
        } else {
            itemName = cartlist[0].cartProductName + '외 ' + cartlist.length
        }
        const orderSend = {

            item_name: itemName,
            partner_order_id: data.orderNum,
            partner_user_id: this.state.userNum,
            quantity: cartlist.length,
            total_amount: this.state.orderTotalPrice,
            tax_free_amount: this.state.orderTotalPrice
        }

        console.log(orderSend, '여기 부터 확인 ')
        return orderSend;
    }
    _kakaopayStart = (data) => {
        const orderSend = this._kakaopayReadSetting(data);
        const { removeCartAll } = this.props;
        const { kakaoPayReady } = this.props;
        const { history } = this.props;
        console.log(history, ' history ')
        kakaoPayReady(orderSend).then(response => {
            if (response.payload !== null && response.payload !== undefined) {
                const { data } = response.payload;
                var nextUrl = data.next_redirect_pc_url;
                window.open(nextUrl, 'Review  작성', 'width=500,height=800,location=no,status=no,scrollbars=yes')
            }
        }).then(response => {
            if (response !== null && response !== undefined) {
                removeCartAll(this.state.userNum)
            }
        });
    }


    _paymentCheck(event) {
        console.log(event.target)
        var name = event.target.value
        // obj[event.target.value] = event.target.checked
        console.log('paymentCheck  : ', this.state)
        this.setState({
            paymentMethod: {
                [name]: event.target.checked
            }

        })
    }
    _finalCheck = (event) => {
        console.log(' 체크 박스 확인 ')
        const { target: { checked } } = event;
        this.setState({ 
            finalCheck:!(this.state.finalCheck)
        });
        console.log(this.state.finalCheck,'finalCheck')
    }
    //숫자 통화 표시
    _numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    render() {
        const userDetails = this.state.userDetails
        const orderlist = this.state.orderItemsList
        var emailArray = this._email(userDetails.userEmail);
        var phoneArray = this._phoneNumber(userDetails.position.customerPhone)

        return (
            <div className="mainDiv" align="center">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                {/* 구매하려는 상품 목록 표시  */}
                <table className="tg" >
                    <h2>주문서 작성</h2>
                    <tbody>
                        <tr height="10px"></tr>
                        <tr>
                            <th className="goods-page-image" width="20%"><center>제품</center></th>
                            <th className="goods-page-description" width="20%"><center>제품 목록</center></th>
                            <th className="goods-page-quantity" width="20%"><center>수량</center></th>
                            <th className="goods-page-price" width="20%"><center>단가</center></th>
                            <th className="goods-page-total" width="20%" ><center>가격</center> </th>
                        </tr>

                        {/* --------------------------------------------------------------------------------------------------------------------------- */}

                        {orderlist === undefined || orderlist === null ? ''
                            : orderlist.map((item, index) => {
                                console.log("item !!!!!!!!!!!!!!!!!!!!!!!!!", item)
                                const { cartProductCount, cartNum, productBoardTitle, cartProductPrice,
                                    cartProductName, productBoardNum, cartProductImg,
                                    cartProductOption1, cartProductOption2 } = item;

                                return (
                                    <tr >
                                        <td className="goods-page-image" width="20%">
                                            <a href={`/product/${productBoardNum}`}><img src={cartProductImg} alt="Berry Lace Dress" /></a>
                                        </td>

                                        {/* 상품 이름 & 옵션 */}
                                        <td className="goods-page-description" width="20%">
                                            <h4><a href={`/product/${productBoardNum}`}>{cartProductName}</a></h4>
                                            <p>{cartProductOption1 == null ? '' : '옵션1 '}  {cartProductOption1 == null ? '' : cartProductOption1} </p>
                                            <p>{cartProductOption2 == null ? '' : '옵션2 '}  {cartProductOption2 == null ? '' : cartProductOption2} </p>
                                        </td>

                                        {/* 수량 */}
                                        <td width="20%">
                                            {cartProductCount}
                                            {/* <input type="button" value="적용" onClick={e => this._editCartDB(e, cartNum)} /> */}

                                        </td>

                                        {/* 단가 */}
                                        <td className="goods-page-price" width="20%">
                                            <strong>{this._numberWithCommas(cartProductPrice)}</strong>원
                                    </td>

                                        {/* 가격 */}
                                        <td className="goods-page-total" width="20%" align='center'>
                                            <strong>{this._numberWithCommas(cartProductPrice * (cartProductCount))}</strong>원
                                    </td>
                                    </tr>
                                );
                            })}
                        <tr height="50px">

                        </tr>
                    </tbody>
                </table>
                {/*  기존 회원정보를 불러서 수정은 불가능 */}
                <h4><b> 회원정보</b> </h4>
                <form action={this._checkoutOrder} >
                    <table className="tg" width="100%">
                        <tbody>
                            <tr>
                                <td className="tg-g4tm" colSpan="2" >
                                    이름
                                </td>
                                <td className="tg-gt6j" colSpan="18">
                                    &nbsp;&nbsp;&nbsp;{userDetails.username}
                                </td>
                            </tr>

                            <tr >
                                <td className="tg-g4tm" colSpan="2" >
                                    E-mail
                                </td>
                                <td className="tg-m9fq" colSpan="7" >

                                    <input type="text" size="10" value={emailArray[0]} />&nbsp;
                                    @&nbsp;&nbsp;&nbsp;
                                    <input type="text" size="10" value={emailArray[1]} />&nbsp;&nbsp;

                                </td>
                                <td className="tg-g4tm" colSpan="2" >
                                    연락처
                                </td>
                                <td className="tg-d44j" colSpan="6" >
                                    <input type="text" size="3" value={phoneArray[0]} />
                                    &nbsp;-&nbsp;
                                    <input type="text" size="4" value={phoneArray[1]} />
                                    &nbsp;-&nbsp;
                                    <input type="text" size="4" value={phoneArray[2]} />
                                </td>
                            </tr>

                            <tr className="tg-default" height="40px">
                                <td className="tg-default" colSpan="20">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <br />
                        <br />
                    </div>
                    <div>
                        {/* 여기 부터 배송지 입력란 */}
                        <h4><b>배송지 정보</b></h4>
                    </div>
                    <table className="tg" width="100%">
                        <tbody>
                            <tr>
                                <th className="tg-g3tm" colSpan="3"  >이름</th>
                                <th className="tg-gt6j" colSpan="17">
                                    <input type="text" name="shippingReceiver"
                                        onChange={this._onChangeInputText} />
                                </th>
                            </tr>
                            <tr>
                                <td className="tg-g3tm" colSpan="3" >
                                    연락처(휴대폰)
                            </td>
                                <td className="tg-d44j" colSpan="7">
                                    <select name="phone1" onChange={this._onChangePhoneNumber}>
                                        <option value="" selected>선택하세요</option>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="017">017</option>
                                        <option value="016">016</option>
                                        <option value="019">019</option>

                                    </select>
                                    -
                                <input type="text" name="phone2" maxLength="4" size="4"
                                        onChange={this._onChangePhoneNumber} />
                                    -
                                <input type="text" name="phone3" maxLength="4" size="4"
                                        onChange={this._onChangePhoneNumber} />
                                </td>
                                <td className="tg-g3tm" colSpan="3">
                                    연락처2(자택)
                            </td>
                                <td className="tg-d44j" colSpan="7">
                                    <select name="phone4" onChange={this._onChangePhoneNumber}>
                                        <option selected >선택하세요</option>
                                        <option value="002">02</option>
                                        <option value="031">031</option>
                                        <option value="032">032</option>
                                        <option value="033">033</option>
                                        <option value="041">041</option>
                                        <option value="042">042</option>
                                        <option value="043">043</option>
                                        <option value="051">051</option>
                                        <option value="052">052</option>
                                        <option value="053">053</option>
                                        <option value="054">054</option>
                                        <option value="055">055</option>
                                        <option value="061">061</option>
                                        <option value="062">062</option>
                                        <option value="063">063</option>
                                        <option value="064">064</option>
                                        <option value="0502">0502</option>
                                    </select>
                                    -
                                <input type="text" name="phone5"
                                        onChange={this._onChangePhoneNumber} maxLength="4" size="4" />
                                    -
                                <input type="text" name="phone6"
                                        onChange={this._onChangePhoneNumber} maxLength="4" size="4" />
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-g3tm" colSpan="3" >
                                    수령 방법
                            </td>
                                <td className="tg-d44j" colSpan="17">

                                    <input type="radio" name="shippigMethod"
                                        value="delivery" onClick={this._onChangeInputText} />택배
                                <input type="radio" name="shippigMethod"
                                        value="selfpickup" onClick={this._onChangeInputText} />방문수령
                            </td>
                            </tr>
                            <tr>
                                <td className="tg-g3tm" colSpan="3" rowSpan="2" >
                                    주소
                            </td>
                                <td className="tg-de2y" colSpan="17">
                                    <input type="text" name="deliveryAddress"
                                        onChange={this._onChangeInputText} />
                                </td>
                            </tr>
                            <tr>
                                <td className="tg-d44j" colSpan="17">

                                </td>
                            </tr>
                            <tr>
                                <td className="tg-g3tm" colSpan="3" rowSpan="2" >
                                    주문메세지<br />(100자내외)
                            </td>
                                <td className="tg-d44j" colSpan="17" rowSpan="2">
                                    <input type="textarea" name="orderMemo"
                                        onChange={this._onChangeInputText} size="100" />
                                </td>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <td className="tg-g3tm" colSpan="3" >
                                    무통장 입금자명
                            </td>
                                <td className="tg-d44j" colSpan="17">
                                    <input type="text" name="bankDepositName"
                                        onChange={this._onChangeInputText} />
                                </td>
                            </tr>
                            <tr height="60px">
                                <td className="tg-default" colSpan="20"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>

                    </div>
                    <div>

                    </div>

                    <table className="tg" width="100%">
                        <tbody>
                            <tr>
                                <th className="tg-cly1" colSpan="20">
                                    주문상품 할인적용
                            </th>
                            </tr>
                            <tr>
                                <td className="tg-nrix" colSpan="3">
                                    상품금액
                            </td>
                                <td className="tg-nrix" colSpan="2">
                                    &nbsp;
                            </td>
                                <td className="tg-nrix" colSpan="4">
                                    배송비
                            </td>
                                <td className="tg-nrix" colSpan="3">
                                    &nbsp;
                            </td>

                                <td className="tg-nrix" colSpan="2">
                                    할인금액
                            </td>
                                <td className="tg-nrit" colSpan="2">
                                    &nbsp;
                            </td>
                                <td className="tg-nrix" colSpan="4">
                                    <a>&nbsp;</a>결제 예정금액
                            </td>
                            </tr>
                            <tr>
                                <td className="tg-nrit" colSpan="3">
                                    {this._numberWithCommas(this.state.SubPrice)}원
                                </td>
                                <td className="tg-nrit" colSpan="2">
                                    +
                            </td>
                                <td className="tg-nrit" colSpan="4">
                                    {this._numberWithCommas(this.state.shippingPrice)}원
                                </td>
                                <td className="tg-nrit" colSpan="3">
                                    -
                            </td>
                                <td className="tg-nrit" colSpan="2">
                                    0원
                            </td>

                                <td className="tg-nrit" colSpan="2">
                                    =
                            </td>
                                <td className="tg-nrit" colSpan="4">
                                    {this._numberWithCommas(this.state.orderTotalPrice)}원
                            </td>
                            </tr>
                            <tr height="50px">
                                <td className="tg-default" colSpan="20"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        &nbsp;
                    </div>
                    <table className="tg">
                        <tbody>
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

                                    &nbsp;<input type="radio" value="bank" name="paymentMethod"
                                        checked={this.state.paymentMethod['bank']}
                                        onChange={this._paymentCheck} />무통장입금 <br /><br />
                                    &nbsp;<input type="radio" name="paymentMethod" value="kakaopay"
                                        checked={this.state.paymentMethod['kakaoPay']}
                                        onChange={this._paymentCheck} />카카오페이 <br /><br />
                                    &nbsp;<input type="radio" name="paymentMethod" value="creditCard"
                                        checked={this.state.paymentMethod['creditCard']}
                                        onChange={this._paymentCheck} />신용카드 <br /><br />
                                    &nbsp;<input type="radio" name="paymentMethod" value="naverPay"
                                        checked={this.state.paymentMethod['naverPay']}
                                        onChange={this._paymentCheck} />네이버페이 <br /><br />

                                </td>
                            </tr>
                            <tr>
                                <td className="tg-nrix" colSpan="20">
                                    {this.state.paymentMethod.kakaoPay === true ? '카카오페이' : ''}

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <br />&nbsp;<br />
                    </div>
                    <h4>주문자 동의</h4>
                    <table className="tg">
                        <tbody>
                            <tr>
                                <td className="tg-cly1" colSpan="4">
                                    주문동의
                            </td>
                                <td className="tg-lastCheck" colSpan="16">
                                    <input type="checkbox" name="finalCheck"
                                        checked={this.state.finalCheck}
                                        onClick={this._finalCheck} /> 상기 결제정보를 확인하였으며, 구매진행에 동의합니다.
                            </td>
                            </tr>
                            <tr>
                                <td className="tg-cly1" colSpan="4">
                                    최종 결제금액
                            </td>
                                <td className="tg-lastCheck" colSpan="16">
                                    <h3><b> {this._numberWithCommas(this.state.orderTotalPrice)} 원</b></h3>

                                </td>
                            </tr>
                            <tr height="40px">

                            </tr>
                        </tbody>
                    </table>

                    <table className="tg" width="100%">
                        <tbody>
                            <tr className="orderClick">
                                <td className="orderClick">
                                    <input type="button" value="주문하기" onClick={this._checkOut} className="submitButton" />
                                    &nbsp;&nbsp;
                                <button type="reset" value="취소" className="submitcancel" onClick={this._checkOut}>취소</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br /><br /><br /><br />
                </form>


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
    checkoutOrder: (orders) => dispatch(Actions.checkoutOrder(orders)),
    removeCartAll: (userNum) => dispatch(Actions.removeCartAll(userNum))
})

export default connect(mapStateToProps, mapDispatchToProps)(order);