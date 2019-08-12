import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';

// 0810 Cart Component 추가 (장바구니 페이지)
class Cart extends React.Component {

  constructor(props) {    // props 굳이 안써줘도 넘어 옴
    super(props)
    const { cart } = this.props;
    this.state = {
      cartItems: cart
    };
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
    console.log("this.state ?????", this.state);
    console.log("this.props ?????", this.props);
    return cartList
  }

  render() {
    console.log("cart state? >> ", this.state.cartItems)
    return (
      <div>
        {this._showCartItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state;
  const { cart } = product;
  return {
    cart  // 배열 
  };
}


export default connect(mapStateToProps)(Cart);