import React from "react"


//숫자 통화 표시
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// Product List 에서 제품 하나하나를 보여주는 컴포넌트
function ProductItem(props) {
  console.log('productList Item ', props)
  return (

    <li className="product-best-item product-bot-item">
      <a href={`/product/${props.productBoardNum}`}>
        <div className="product-best-item--thumb">
          <img src={props.item.productBoardThumbnail} />
        </div>
        <div className="product-best-item--info product-bot-info">
          <div className="product-best-item--icon">
            {/* <p className="icon">아이콘</p> */}
          </div>
          <div className="product-best-item--title">
            {props.item.productBoardTitle}
          </div>
          <div className="product-best-item--price">
            <span className="price">{numberWithCommas(props.item.productPrice)}</span>원
                  </div>
        </div>
      </a>
    </li>
  )
}

export default ProductItem



