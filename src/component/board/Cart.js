import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/index';

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
      selectedProduct: []
    }
  }

  componentWillMount() {
    const { getCartByUser } = this.props;
    const { userDetails } = this.props;
    getCartByUser(userDetails.userNum)
      .then(response => this.setState(response));
  }

  // onChangeHandler
  _changeQuantity(event, cartNum) {

    const target = event.target;
    const newQty = Number.parseInt(target.value);     // newQty (변경된 수량) Number.parseInt(target.value); 
    const { cartlist } = this.props;
    const idx = cartNum - 1;    // cartNum은 1부터 시작, 배열 인덱스는 0부터 시작하므로 맞춰준다 개망...

    //items.map((item, index) => index == idx ? { ... item, qty: newQty} : item)  
    console.log("바뀐 수량 newQty >>>>>>>>>>>>>>>>>.",newQty);
    console.log("바뀐 수량 newQty 타입 ??>>>>>>>>>>>>>>>>>.",typeof newQty)
    const { editCartQty } = this.props;

    // index와 idx 어케 맞추지............
    const newCartList = cartlist.map((item, index) => index == idx ? { ...item, cartProductCount:newQty} : item)
    this.setState({
      items: newCartList
    });

    editCartQty(newCartList[cartNum - 1]);
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


  // _cartlistCheck() {
  //   const { cartItem } = this.props
  //   if (cartItem !== undefined && cartItem !== null) {
  //     return cartItem;
  //   } else {
  //     return null
  //   }
  // }

  // 장바구니에 담긴 상품이 1개일 경우 가격 구하기 
  _getOnePrice(items) {
    const price = Number.parseFloat(items[0].cartProductPrice) * Number.parseFloat(items[0].cartProductCount);
    return price.toFixed(0);
  }


  render() {
    const { cartlist } = this.props;
    const SubPrice = this._getCartCount(cartlist) > 1 ? this._getSubTotalPrice(cartlist)
      : this._getCartCount(cartlist) == 1 ? this._getOnePrice(cartlist) : 0;

    const shippingPrice = (cartlist.length > 0 ? 3000 : 0);
    const TotalPrice = Number.parseFloat(SubPrice) + Number.parseFloat(shippingPrice);


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
                          : cartlist.map(item => {
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
                                  <input type="number" value={cartProductCount} min="1" max="20" name={cartNum} onChange={e => this._changeQuantity(e, cartNum)} size="4"></input>
                                  {/* <input type="button" value="적용" onClick={e => this._editCartDB(e, cartNum)} /> */}

                                </td>

                                {/* 단가 */}
                                <td className="goods-page-price">
                                  <strong>{cartProductPrice}</strong>
                                </td>

                                {/* 가격 */}
                                <td className="goods-page-total">
                                  <strong>{cartProductPrice * (cartProductCount)}</strong>
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
                        <em>Sub total</em>
                        <strong className="price">{SubPrice}<span>원</span></strong>
                      </li>
                      <li>
                        <em>Shipping cost</em>
                        <strong className="price">{shippingPrice}<span>원</span></strong>
                      </li>
                      <li className="shopping-total-price">
                        <em>Total</em>
                        <strong className="price">{TotalPrice}<span>원</span></strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart"></i></button>

                <input className="btn btn-primary" type="submit" value="구매하기" />
                <a href="/orderSheet">Checkout</a>
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
  return {
    cartlist,  // 배열 
    userDetails
  };
}
const mapDispatchToProps = (dispatch) => ({
  getCartByUser: (userNum) => dispatch(Actions.getCartByUser(userNum)),
  editCartQty: (newCart) => dispatch(Actions.editCartQty(newCart)),
  removeCartById: (cartNum) => dispatch(Actions.removeCartById(cartNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

