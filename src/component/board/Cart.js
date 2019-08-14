import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { bindActionCreators } from 'redux';
import { Actions } from '../../actions/index';
// 0810 Cart Component 추가 (장바구니 페이지)
class Cart extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const { cart, userDetails } = this.props;
    this.state = {
      cartItems: cart
    };
  }

  componentDidMount(){
    const { getCartByUser, userDetails } = this.props;
    // user
    getCartByUser(userDetails.userNum);
  }

  _showCartItems = () => {
    const { cartItems } = this.state;
    //cartItems !== undefined && cartItems !== null
    var cartList = [];
    if (cartItems !== undefined && cartItems !== null) {
      cartList = cartItems.map(item => {
        return <ProductItem key={item.productBoardNum} item={item} />
      })
    }

    return cartList
  }

  render() {

    return (
      <div>
        {this._showCartItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product, auth } = state;
  const {userDetails} = auth;
  const { cart } = product;
  return {
    cart,  // 배열 
    userDetails
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getCartByUser: bindActionCreators(Actions.getCartByUser, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);