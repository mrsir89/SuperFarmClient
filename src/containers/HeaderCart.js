import React from 'react';
import HeaderCartItem from './HeaderCartItem';

function getCartCount(items) {
   return (items === undefined || items === null || items.length ===0 ? 0 : items.length);
  
}

function getOnePrice (items) {
  console.log("items >>>>>>>>>>>>>>>>>>>",items)
  const price = Number.parseFloat(items[0].cartProductPrice) * Number.parseFloat(items[0].cartProductCount);
  return price.toFixed(0);
}

function getTotalPrice(items) {
  console.log("item의 타입은??", typeof items);
  console.log("item의 타입은??",  items);
  
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

function HeaderCart(props) {
//   const { props } = props;
  const { items } = props;
  
  return (
    <div className="top-cart-block">
      <div className="top-cart-info">
        <a href="javascript:void(0);" className="top-cart-info-count">{getCartCount(items)}개</a>
        <a href="javascript:void(0);" className="top-cart-info-value">
          {getCartCount(items) >1 ? getTotalPrice(items): getCartCount(items)== 1 ?getOnePrice(items) : 0}원
        </a>
      </div>
      <i className="fa fa-shopping-cart" />
      <div className="top-cart-content-wrapper">
        <div className="top-cart-content">
          <ul className="scroller" style={{ height: '250px' }}>
            {items.map((item, index, array) => (<HeaderCartItem {...item} key={index} />))}
          </ul>
          <div className="text-right">
            <a href="/cart" className="btn btn-default">View Cart</a>
            <a href="/cart" className="btn btn-primary">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCart;