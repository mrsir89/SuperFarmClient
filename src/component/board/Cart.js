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
  }

  componentWillMount() {
    const { getCartByUser, userDetails } = this.props;
    getCartByUser(userDetails.userNum);
  }

  _removeHandler = (e, id) => {
    e.stopPropagation();
    this.props.removeCart(id);
  };

  // getCartByUser응답이 오고 나서 실행 되어야함
  _showCartItems = () => {
    const { cartlist } = this.props;
    console.log("cartItems >>>", cartlist);

    var cartItem = [];
    if (cartlist !== undefined && cartlist !== null) {
      cartItem = cartlist.map(item => {
        return (
          <div>
            <CartView key={item.productBoardNum} item={item} />
            <button className="badge badge-danger" onClick={e => this._removeHandler(e, item.cartNum)}>remove</button>
          </div>
        )
      })
    }

    return cartItem
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
  const { cart, auth } = state;
  const { userDetails } = auth;
  const { cartlist } = cart;
  return {
    cartlist,  // 배열 
    userDetails
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCartByUser: ()=> dispatch(Actions.getCartByUser) ,
  removeCart : (id)=> dispatch(Actions.removeCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);


