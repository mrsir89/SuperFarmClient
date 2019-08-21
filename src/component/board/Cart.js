import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/index';
import CartView from './CartView';
// 0810 Cart Component 추가 (장바구니 페이지)


class Cart extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const { cartlist, userDetails } = this.props;
    this.state = {
      cartItems: cartlist
    };
    console.log('cart의 state 확인',this.state)
  }

  componentWillMount() {
    const { getCartByUser } = this.props;
    const { userDetails } = this.props;
    console.log(userDetails,'     UserDetails')
    getCartByUser(userDetails.userNum);

  }

  // getCartByUser응답이 오고 나서 실행 되어야함
  _showCartItems = () => {
    const { cartlist } = this.props;
    console.log("cartItems >>>", cartlist);

    var cartItem = [];
    if (cartlist !== undefined && cartlist !== null) {
      cartItem = cartlist.map(item => {
        return <CartView key={item.productBoardNum} item={item} />
      })
    }
    return cartItem
  }
  _cartlistCheck(){
    const{ cartItem } = this.props
    if(cartItem !== undefined &&  cartItem !== null){
      return cartItem;
    }else{
      return null
    }
  }
// {this._showCartItems()}
  render() {

    // const{ cartItem }= this.props
      const { cartItem } = this.props;
    return (
      <div>
        {this._showCartItems()}
      </div>
      
    //  <div>
    //    {cartItem.map((item) => (
    //     <div className="main">
    //     <div className="container">
    //       {/* <!-- BEGIN SIDEBAR & CONTENT --> */}
    //       <div className="row margin-bottom-40">
    //         {/* <!-- BEGIN CONTENT --> */}
    //         <div className="col-md-12 col-sm-12">
    //           <h1>장바구니</h1>
    //           <div className="goods-page">
    //             <div className="goods-data clearfix">
    //               <div className="table-wrapper-responsive">
    //                 <table summary="Shopping cart">
    //                   <tbody>
                        
    //                     <tr>
    //                     <th className="goods-page-image">제품</th>
    //                     <th className="goods-page-description">제품 설명</th>
    //                     <th className="goods-page-ref-no">제품 코드</th>
    //                     <th className="goods-page-quantity">수량</th>
    //                     <th className="goods-page-price">금액</th>
    //                     <th className="goods-page-total" colspan="2">총금액</th>
    //                   </tr>
    //       {/* -------------------------------------------------------------------------------------------------------- */}
    //                     <tr>
    //                       <td className="goods-page-image">
    //                         <a href="javascript:;"><img src="../../assets/frontend/pages/img/products/model3.jpg" alt="Berry Lace Dress" /></a>
    //                       </td>
    //                       <td className="goods-page-description">
    //                         <h3><a href='/product/'>{item.cartProductName}</a></h3>
    //                         <p><strong>Item 1</strong> - Color: Green; Size: S</p>
    //                         <em>More info is here</em>
    //                       </td>
    //                       <td className="goods-page-ref-no">
    //                         javc2133
    //                       </td>
    //                       <td className="goods-page-quantity">
    //                         <div className="product-quantity">
    //                           <div className="input-group bootstrap-touchspin input-group-sm">
    //                             <span className="input-group-btn">
    //                               <button className="btn quantity-down bootstrap-touchspin-down" type="button">
    //                                 <i className="fa fa-angle-down"></i>
    //                               </button>
    //                             </span>
    //                             <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }}>
    //                             </span>
    //                             <input id="product-quantity" type="text" value="1" readonly="" className="form-control input-sm" style={{ display: 'block' }} />
    //                             <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }}></span>
    //                             <span className="input-group-btn">
    //                               <button className="btn quantity-up bootstrap-touchspin-up" type="button">
    //                               <i className="fa fa-angle-up"></i></button></span></div>
    //                         </div>
    //                       </td>
    //                       <td className="goods-page-price">
    //                         <strong><span>$</span>47.00</strong>
    //                       </td>
    //                       <td className="goods-page-total">
    //                         <strong><span>$</span>47.00</strong>
    //                       </td>
    //                       <td className="del-goods-col">
    //                         <a className="del-goods" href="javascript:;">&nbsp;</a>
    //                       </td>
    //                     </tr>
             
    //             {/* -------------------------------------------------------------------------------------------------------- */}
    //                   </tbody></table>
    //               </div>

    //               <div className="shopping-total">
    //                 <ul>
    //                   <li>
    //                     <em>Sub total</em>
    //                     <strong className="price"><span>$</span>47.00</strong>
    //                   </li>
    //                   <li>
    //                     <em>Shipping cost</em>
    //                     <strong className="price"><span>$</span>3.00</strong>
    //                   </li>
    //                   <li className="shopping-total-price">
    //                     <em>Total</em>
    //                     <strong className="price"><span>$</span>50.00</strong>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //             <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart"></i></button>
    //             <button className="btn btn-primary" type="submit">Checkout <i className="fa fa-check"></i></button>
    //           </div>
    //         </div>
    //         {/* <!-- END CONTENT --> */}
    //       </div>
    //       {/* <!-- END SIDEBAR & CONTENT --> */}

    //       {/* <!-- BEGIN SIMILAR PRODUCTS --> */}

    //       {/* <!-- END SIMILAR PRODUCTS --> */}
    //     </div>
    //   </div>
    //    ))};
    //   </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps--------',state)
  const { cart, auth } = state;
  const { userDetails } = auth;
  const { cartlist } = cart;
  return {
    cartlist,  // 배열 
    userDetails
  };
}
const mapDispatchToProps=(dispatch)=>( {
     getCartByUser:(userNum) =>dispatch(Actions.getCartByUser(userNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


