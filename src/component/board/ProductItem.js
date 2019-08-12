import React from "react"

// Product List 에서 제품 하나하나를 보여주는 컴포넌트
function ProductItem(props) {
    return (
        <div className="product-item">
            <img src={props.item.img} alt="Product poster" />
            <p>상품 코드 : {props.item.productBoardNum}</p>
            <p>타이틀 : {props.item.productBoardTitle}</p>
            <p>상품 대분류 : {props.item.upperCode}</p>
            <p>상품 소분류 : {props.item.lowerCode}</p>
            <p>상품 가격 : {props.item.productBoardDeliveryPrice}</p>
        </div>
    )
}

export default ProductItem