import React from "react"

// Product List 에서 제품 하나하나를 보여주는 컴포넌트
function ProductItem(props) {
    return (

        <li className="product-best-item product-bot-item">
                <a href="#none">
                  <div className="product-best-item--thumb">
                    <img src="../../images/rice.jpg" />
                  </div>
                  <div className="product-best-item--info product-bot-info">
                    <div className="product-best-item--icon">
                      <p className="icon">아이콘</p>
                    </div>
                    <div className="product-best-item--title">
                        {props.item.productBoardTitle}
                    </div>
                  <div className="product-best-item--price">
                    <span className="price">{props.item.productBoardDeliveryPrice}</span> 원
                  </div>
                  </div>
                </a>
        </li>


    )
}

export default ProductItem



