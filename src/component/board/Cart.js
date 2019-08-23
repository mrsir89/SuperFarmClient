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
      items: cartlist
    }
  }

  componentWillMount() {
    const { getCartByUser } = this.props;
    const { userDetails } = this.props;
    console.log(userDetails, '     UserDetails')
    getCartByUser(userDetails.userNum);
  }

  // onChangeHandler
  _changeQuantity(event, cartNum) {
    
    const target = event.target;
    const newQty = target.value;     // newQty (변경된 수량)
    const { cartlist } = this.props;
    const idx = cartNum - 1;    // cartNum은 1부터 시작, 배열 인덱스는 0부터 시작하므로 맞춰준다

    //items.map((item, index) => index == idx ? { ... item, qty: newQty} : item)
    const { editCartQty } = this.props;
    const newCartList = cartlist.map((item, index) => index == idx ? { ...item, cartProductCount: newQty } : item)
    this.setState({
      items: newCartList
    });

    editCartQty(newCartList[cartNum-1]);
  }


  // _delectCartId(e, cartNum) {
    
  
  //   editCartQty(newCartList[cartNum-1]);
  // }
  

  _getSubTotalPrice(items) {
  
    return (items === undefined || items === null || items.length ===0 ? 0 : items.reduce((prevItem, item) => {
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
 

  _cartlistCheck() {
    const { cartItem } = this.props
    if (cartItem !== undefined && cartItem !== null) {
      return cartItem;
    } else {
      return null
    }
  }

  // {this._showCartItems()}
  render() {
    const { items } = this.state;
    console.log("state의 수량이 변경되었나 확인2 >>>>", this.state);
    const SubPrice = this._getSubTotalPrice(items);
    const TotalPrice = SubPrice + 3.0;
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
                          <th className="goods-page-image">제품</th>
                          <th className="goods-page-description">제품 목록</th>
                          {/* <th className="goods-page-ref-no">제품 번호</th> */}
                          <th className="goods-page-quantity">수량</th>
                          <th className="goods-page-price">단가</th>
                          <th className="goods-page-total" colspan="2">가격 </th>
                        </tr>
                        {/* --------------------------------------------------------------------------------------------------------------------------- */}

                        {items.map(item => {

                          const { cartProductCount, cartNum, productBoardTitle, cartProductPrice,
                            cartProductName, productBoardNum, cartProductImg,
                            cartProductOption1, cartProductOption2 } = item;
                          console.log("state의 수량이 변경되었나 확인3>>>>", this.state);
                          console.log("state의 수량이 변경되었나 확인4>>>>", cartProductCount);
                          return (
                            <tr>
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
                                <button className="del-goods" onClick={e => this._delectCartId(e, cartNum)}/>
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
                        <strong className="price"><span>$</span>{SubPrice}</strong>
                      </li>
                      <li>
                        <em>Shipping cost</em>
                        <strong className="price"><span>$</span>3.00</strong>
                      </li>
                      <li className="shopping-total-price">
                        <em>Total</em>
                        <strong className="price"><span>$</span>{TotalPrice}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart"></i></button>
                <button className="btn btn-primary" type="submit">Checkout <i className="fa fa-check"></i></button>
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
  console.log('mapStateToProps--------', state)
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
  editCartQty: (newCart) => dispatch(Actions.editCartQty(newCart))

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


