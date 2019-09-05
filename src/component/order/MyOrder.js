import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';

class MyOrder extends React.Component{

    constructor(props) {    // props 굳이 안써줘도 넘어 옴
        super(props)

        // this.state = {
        //     orderlist = 
        // }
      }

      componentWillMount() {
        const { userDetails } = this.props
        const { loadUserOrder } = this.props;
        var userNum = userDetails.userNum
        loadUserOrder(userNum);
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
    //숫자 통화 표시
      _numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    
      render() {
        
        // const SubPrice = this._getCartCount(cartlist) > 1 ? this._getSubTotalPrice(cartlist)
        //   : this._getCartCount(cartlist) == 1 ? this._getOnePrice(cartlist) : 0;
    
        // const shippingPrice = (cartlist.length > 0 ? 3000 : 0);
        // const TotalPrice = Number.parseFloat(SubPrice) + Number.parseFloat(shippingPrice);
    
        return (
    
          <div className="main">
            
            <div className="container">
              {/* <!-- BEGIN SIDEBAR & CONTENT --> */}
              <div className="row margin-bottom-40">
                {/* <!-- BEGIN CONTENT --> */}
                <div className="col-md-12 col-sm-12">
                  <h1>구매내역</h1>
    
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
    
                            {/* {cartlist === undefined || cartlist === null ? ''
                              : cartlist.map((item, index) => {
                                console.log("item !!!!!!!!!!!!!!!!!!!!!!!!!", item)
                                const { cartProductCount, cartNum, productBoardTitle, cartProductPrice,
                                  cartProductName, productBoardNum, cartProductImg,
                                  cartProductOption1, cartProductOption2 } = item; */}
    
                                return (
                                  <tr>
                                    <td>
                                      <input type="checkbox" name="check" checked />
                                    </td>
                                    <td className="goods-page-image">
                                      {/* <a href={`/product/${productBoardNum}`}><img src={cartProductImg} alt="Berry Lace Dress" /></a> */}
                                    </td>
    
                                    {/* 상품 이름 & 옵션 */}
                                    {/* <td className="goods-page-description">
                                      <h3><a href={`/product/${cartProductName}`}>{cartProductName}</a></h3>
                                      <p><strong>{cartProductOption1 == null ? '' : '옵션1 '} </strong> {cartProductOption1 == null ? '' : cartProductOption1} </p>
                                      <p><strong>{cartProductOption2 == null ? '' : '옵션2 '} </strong> {cartProductOption2 == null ? '' : cartProductOption2} </p>
                                    </td> */}
    
                                    {/* 제품코드 */}
                                    {/* <td className="goods-page-ref-no">
                                      {item.productCode}
                                      </td> */}
    
                                    {/* 수량 */}
                                    <td >
                                      {/* <input type="number" value={cartProductCount} min="1" max="20" name={cartNum} onChange={e => this._changeQuantity(e, index)} size="4"></input> */}
                                      {/* <input type="button" value="적용" onClick={e => this._editCartDB(e, cartNum)} /> */}
    
                                    </td>
    
                                    {/* 단가 */}
                                    <td className="goods-page-price">
                                      {/* <strong>{this._numberWithCommas(cartProductPrice)}</strong>원 */}
                                    </td>
    
                                    {/* 가격 */}
                                    <td className="goods-page-total">
                                      {/* <strong>{this._numberWithCommas(cartProductPrice * (cartProductCount))}</strong>원 */}
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
                            {/* <strong className="price">{this._numberWithCommas(this.state.SubPrice)}<span>원</span></strong> */}
                          </li>
                          <li>
                            <em>배송비</em>
                            {/* <strong className="price">{this._numberWithCommas(this.state.shippingPrice)}<span>원</span></strong> */}
                          </li>
                          <li className="shopping-total-price">
                            <em>총금액</em>
                            {/* <strong className="price" onChange={this._test}>{this._numberWithCommas(this.state.TotalPrice)}<span>원</span></strong> */}
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
      const { auth } = state;
      const { userDetails } = auth;
      if (userDetails !== null || userDetails !== undefined) {
        return {
            userDetails
        }
      } else {
        alert('로그인이 필요 합니다.')
        window.location.href='/'
      }
    }
    const mapDispatchToProps = (dispatch) => ({
        loadUserOrder:() => dispatch(Actions.loadUserOrder())
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
    