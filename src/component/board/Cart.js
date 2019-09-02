import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import { Redirect } from 'react-router-dom' ;
import Order from '../order/order';

/**
 * items = [{qty}, {qty}, {qty}]
 * item = items[idx];
 * item = {
 *   ...item,
 *   qty: qty
 * }
 * items = [
 *   ...items,
 *   {
 *     ...item,
 *     qty: newQty
 *   }
 * ]
 * 
 * items.map((item, index) => index == idx ? { ... item, qty: newQty} : item)
 */


// 수량이 String 타입으로 넘어감 바꿔야 하나?
class Cart extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const { cartlist, userDetails } = this.props;


    this.state = {
      items: [],
      selectedProduct: [],
      SubPrice: 0,
      shippingPrice: 0,
      TotalPrice: 0
    }
  }
  componentWillMount() {
    const { getCartByUser } = this.props;
    const { userDetails } = this.props;
    const { history } = this.props;
    if (userDetails !== null && userDetails !== undefined) {
      getCartByUser(userDetails.userNum)
        .then(response => {
          this._changeTotalPrice();
        });
    } else {
      alert('로그인이 필요한 페이지 입니다.')
      history.push("/login")
    }
  }


  // onChangeHandler
  _changeQuantity(event, index) {

    const target = event.target;
    const newQty = Number.parseInt(target.value);     // newQty (변경된 수량) Number.parseInt(target.value); 
    const { cartlist } = this.props;
    const idx = index;    // cartNum은 1부터 시작, 배열 인덱스는 0부터 시작하므로 맞춰준다 개망...

    //items.map((item, index) => index == idx ? { ... item, qty: newQty} : item)  
    console.log("바뀐 수량 newQty >>>>>>>>>>>>>>>>>.", newQty);
    console.log("바뀐 수량 newQty 타입 ??>>>>>>>>>>>>>>>>>.", typeof newQty)
    const { editCartQty } = this.props;

    // index와 idx 어케 맞추지............
    const newCartList = cartlist.map((item, index) => index == idx ? { ...item, cartProductCount: newQty } : item)
    this.setState({
      items: newCartList
    });

    editCartQty(newCartList[idx]).then(response => {
      this._changeTotalPrice();
    });
  }

  //장바구니 삭제 
  _delectCartById(e, cartNum) {
    e.stopPropagation();
    const { removeCartById } = this.props;
    removeCartById(cartNum);

  }

  // 장바구니에 담긴 상품 갯수 구하기 
  _getCartCount(items) {
    return (items === undefined || items === null || items.length === 0 ? 0 : items.length);

  }

  _getSubTotalPrice(items) {
    return (items === undefined || items === null || items.length === 0 ? 0 : items.reduce((prevItem, item) => {
      const itemPrice = Number.parseFloat(item.cartProductPrice) * Number.parseFloat(item.cartProductCount);
      let totalPrice = 0.00;

      if (typeof prevItem === 'object') {
        totalPrice = Number.parseFloat(prevItem.cartProductPrice) * Number.parseFloat(prevItem.cartProductCount);
      } else {
        totalPrice = Number.parseFloat(prevItem);
      }
      //console.log('>>>>', (totalPrice + itemPrice).toFixed(0));
      return (totalPrice + itemPrice).toFixed(0);
    }));
  }


  // 장바구니에 담긴 상품이 1개일 경우 가격 구하기 
  _getOnePrice(items) {
    const price = Number.parseFloat(items[0].cartProductPrice) * Number.parseFloat(items[0].cartProductCount);
    return price.toFixed(0);
  }


  _changeTotalPrice() {
    console.log('작동~!!!!!!!!!!!!!!!')
    const { cartlist } = this.props;
    const SubPrice = this._getCartCount(cartlist) > 1 ? this._getSubTotalPrice(cartlist)
      : this._getCartCount(cartlist) == 1 ? this._getOnePrice(cartlist) : 0;

    const shippingPrice = (cartlist.length > 0 ? 3000 : 0);
    const TotalPrice = Number.parseFloat(SubPrice) + Number.parseFloat(shippingPrice);

    this.setState({
      SubPrice: SubPrice,
      shippingPrice: shippingPrice,
      TotalPrice: TotalPrice
    })
  }

  // 주문 하기
  // 주문 하기 위해 현재 리스트에 담겨 있는 제품들을 리듀서를 통해 store 에 저장해 준다.
  _checkout = () => {
    const{ userDetails } = this.props;
    if(userDetails === null || userDetails ===undefined){
      
      return alert(' 로그인이 필요한 작업니다.')
    }
    const { cartlist } = this.props
    const { history } = this.props
    const { orderList } = this.props
    console.log(cartlist, ' cart List 임니다.')
    var SubPrice = this.state.SubPrice;
    var shippingPrice = this.state.shippingPrice;
    var TotalPrice = this.state.TotalPrice;

    const orderItems = {
      cartlist,
      SubPrice,
      shippingPrice,
      TotalPrice
    }
    if (cartlist.size !== 0) {
      orderList(orderItems)
      history.push("/order");
    } else {
      alert('제품에 담긴 물품이 없습니다.')
    }
  }

  _changeTotalPrice() {
    console.log('작동~!!!!!!!!!!!!!!!')
    const { cartlist } = this.props;
    const SubPrice = this._getCartCount(cartlist) > 1 ? this._getSubTotalPrice(cartlist)
      : this._getCartCount(cartlist) == 1 ? this._getOnePrice(cartlist) : 0;

    const shippingPrice = (cartlist.length > 0 ? 3000 : 0);
    const TotalPrice = Number.parseFloat(SubPrice) + Number.parseFloat(shippingPrice);

    this.setState({
      SubPrice: SubPrice,
      shippingPrice: shippingPrice,
      TotalPrice: TotalPrice
    })
  }
  //숫자 통화 표시
  _numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { cartlist } = this.props;
    // const SubPrice = this._getCartCount(cartlist) > 1 ? this._getSubTotalPrice(cartlist)
    //   : this._getCartCount(cartlist) == 1 ? this._getOnePrice(cartlist) : 0;

    // const shippingPrice = (cartlist.length > 0 ? 3000 : 0);
    // const TotalPrice = Number.parseFloat(SubPrice) + Number.parseFloat(shippingPrice);

    console.log("===========selected product===========", this.state.selectedProduct)
    return (

      <div className="main">
        <div className="container">
          {/* <!-- BEGIN SIDEBAR & CONTENT --> */}
          <div className="row margin-bottom-40">
            {/* <!-- BEGIN CONTENT --> */}
            <div className="col-md-12 col-sm-12">
              <h1>장바구니</h1>

              <div className="goods-page">
                <div className="goods-data clearfix">
                  <div className="table-wrapper-responsive">

                    <table summary="Shopping cart">
                      <tbody>
                        <tr>
                          <th >선택</th>
                          <th className="goods-page-image">제품</th>
                          <th className="goods-page-description">제품 목록</th>
                          {/* <th className="goods-page-ref-no">제품 번호</th> */}
                          <th className="goods-page-quantity">수량</th>
                          <th className="goods-page-price">단가</th>
                          <th className="goods-page-total" colspan="2">가격 </th>
                        </tr>

                        {/* --------------------------------------------------------------------------------------------------------------------------- */}

                        {cartlist === undefined || cartlist === null ? ''
                          : cartlist.map((item, index) => {
                            console.log("item !!!!!!!!!!!!!!!!!!!!!!!!!", item)
                            const { cartProductCount, cartNum, productBoardTitle, cartProductPrice,
                              cartProductName, productBoardNum, cartProductImg,
                              cartProductOption1, cartProductOption2 } = item;

                            return (
                              <tr>
                                <td>
                                  <input type="checkbox" name="check" checked />
                                </td>
                                <td className="goods-page-image">
                                  <a href={`/product/${productBoardNum}`}><img src={cartProductImg} alt="Berry Lace Dress" /></a>
                                </td>

                                {/* 상품 이름 & 옵션 */}
                                <td className="goods-page-description">
                                  <h3><a href={`/product/${cartProductName}`}>{cartProductName}</a></h3>
                                  <p><strong>{cartProductOption1 == null ? '' : '옵션1 '} </strong> {cartProductOption1 == null ? '' : cartProductOption1} </p>
                                  <p><strong>{cartProductOption2 == null ? '' : '옵션2 '} </strong> {cartProductOption2 == null ? '' : cartProductOption2} </p>
                                </td>

                                {/* 제품코드 */}
                                {/* <td className="goods-page-ref-no">
                                  {item.productCode}
                                  </td> */}

                                {/* 수량 */}
                                <td >
                                  <input type="number" value={cartProductCount} min="1" max="20" name={cartNum} onChange={e => this._changeQuantity(e, index)} size="4"></input>
                                  {/* <input type="button" value="적용" onClick={e => this._editCartDB(e, cartNum)} /> */}

                                </td>

                                {/* 단가 */}
                                <td className="goods-page-price">
                                  <strong>{this._numberWithCommas(cartProductPrice)}</strong>원
                                </td>

                                {/* 가격 */}
                                <td className="goods-page-total">
                                  <strong>{this._numberWithCommas(cartProductPrice * (cartProductCount))}</strong>원
                                </td>

                                {/* 삭제 */}
                                <td className="del-goods-col">
                                  {/* <a className="del-goods" href="javascript:;">&nbsp;</a> */}
                                  <button className="del-goods" onClick={e => this._delectCartById(e, cartNum)} />
                                </td>
                              </tr>
                            );
                          })}

                        {/* --------------------------------------------------------------------------------------------------------------------------- */}
                      </tbody></table>
                  </div>

                  <div className="shopping-total">
                    <ul>
                      <li>
                        <em>상품금액</em>
                        <strong className="price">{this._numberWithCommas(this.state.SubPrice)}<span>원</span></strong>
                      </li>
                      <li>
                        <em>배송비</em>
                        <strong className="price">{this._numberWithCommas(this.state.shippingPrice)}<span>원</span></strong>
                      </li>
                      <li className="shopping-total-price">
                        <em>총금액</em>
                        <strong className="price" onChange={this._test}>{this._numberWithCommas(this.state.TotalPrice)}<span>원</span></strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart"></i></button>

                <input className="btn btn-primary" type="button" onClick={this._checkout}value="구매하기" />
                <i className="fa fa-check"></i>
              </div>



            </div>
            {/* <!-- END CONTENT --> */}
          </div>
          {/* <!-- END SIDEBAR & CONTENT --> */}

          {/* <!-- BEGIN SIMILAR PRODUCTS --> */}

          {/* <!-- END SIMILAR PRODUCTS --> */}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { cart, auth } = state;
  const { userDetails } = auth;
  const { cartlist } = cart;
  if (userDetails !== null || userDetails !== undefined) {
    return {
      cartlist,  // 배열 
      userDetails
    }
  } else {
    alert('로그인이 필요 합니다.')
    return (
      <Redirect to="/" />
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  getCartByUser: (userNum) => dispatch(Actions.getCartByUser(userNum)),
  editCartQty: (newCart) => dispatch(Actions.editCartQty(newCart)),
  removeCartById: (cartNum) => dispatch(Actions.removeCartById(cartNum)),
  orderList: (cartlist) => dispatch(Actions.orderList(cartlist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

