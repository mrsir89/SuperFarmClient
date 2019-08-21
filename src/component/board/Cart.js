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

class Cart extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const { cartlist, userDetails } = this.props;

    this.state = {
      Items: []
    }
  }

  componentWillMount() {
    const { getCartByUser } = this.props;
    const { userDetails } = this.props;
    console.log(userDetails, '     UserDetails')
    getCartByUser(userDetails.userNum);
  }

  _changeQuantity(event) {
    console.log('버튼  확인', event)
    console.log('targetName >>>>>>>>>>>>>>', event.target.name)
    console.log('targetValue >>>>>>>>>>>>>>', event.target.value)
    const target = event.target;
    const value = target.value;
    this.setState({
      Items: []
    });

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
    // const{ cartItem }= this.props
    const { cartlist } = this.props;
    return (
      // <div>
      //   {this._showCartItems()}
      // </div>

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

                        {cartlist.map(item => {
                          return (
                            <tr>
                              <td className="goods-page-image">
                                <a href={`/product/${item.productBoardNum}`}><img src={item.cartProductImg} alt="Berry Lace Dress" /></a>
                              </td>

                              {/* 옵션 */}
                              <td className="goods-page-description">
                                <h3><a href={`/product/${item.cartProductName}`}>{item.cartProductName}</a></h3>
                                <p><strong>{item.cartProductOption1 == null ? '' : '옵션1 '} </strong> {item.cartProductOption1 == null ? '' : item.cartProductOption1} </p>
                                <p><strong>{item.cartProductOption2 == null ? '' : '옵션2 '} </strong> {item.cartProductOption2 == null ? '' : item.cartProductOption1} </p>
                              </td>

                              {/* 제품코드 */}
                              {/* <td className="goods-page-ref-no">
                                  {item.productCode}
                                  </td> */}

                              {/* 수량 */}
                              <td >
                                <input type="number" min="1" max="20" name={item.cartNum} onChange={this._changeQuantity} size="4"></input>
                                <input type="button" value="적용" onClick={this._changeQuantity} />
                              </td>

                              {/* 단가 */}
                              <td className="goods-page-price">
                                <strong>{item.cartProductPrice}</strong>
                              </td>

                              {/* 가격 */}
                              <td className="goods-page-total">
                                <strong>{item.cartProductPrice * (item.cartProductCount)}</strong>
                              </td>

                              {/* 삭제 */}
                              <td className="del-goods-col">
                                <a className="del-goods" href="javascript:;">&nbsp;</a>
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
                        <strong className="price"><span>$</span>47.00</strong>
                      </li>
                      <li>
                        <em>Shipping cost</em>
                        <strong className="price"><span>$</span>3.00</strong>
                      </li>
                      <li className="shopping-total-price">
                        <em>Total</em>
                        <strong className="price"><span>$</span>50.00</strong>
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
  getCartByUser: (userNum) => dispatch(Actions.getCartByUser(userNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


