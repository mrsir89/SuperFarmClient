import React from "react"

function CartView(props) {
    return(
      <div >
          <img src={props.item.cartProductImg} />
          <p>cartNum : {props.item.cartNum}</p>  
          <p>수량 : {props.item.cartProductCount}</p>  
          <p>상품 이름 : {props.item.cartProductName}</p>  
          <p>옵션1 : {props.item.cartProductOption1}</p>  
          <p>옵션2 : {props.item.cartProductOption2}</p> 
          <p>가격 : {props.item.cartProductPrice}</p>
      </div>
    );
}

  export default CartView