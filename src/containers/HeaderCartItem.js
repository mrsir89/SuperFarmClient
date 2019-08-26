import React from 'react';


function HeaderCartItem(props){
  const { cartProductName, cartProductImg, cartProductCount, cartProductPrice,productBoardNum } = props;
  return(
    <li>
      <a href="shop-item.html"><img src={cartProductImg} alt={cartProductName} width={37} height={34} /></a>
      <span className="cart-content-count">X {cartProductCount}</span>
      <strong><a href={`http://localhost:3000/product/${productBoardNum}`}>{cartProductName}</a></strong>
      <em>{cartProductPrice}</em>
      <a href="javascript:void(0);" className="del-goods">&nbsp;</a>
    </li>
  );
}

export default HeaderCartItem;