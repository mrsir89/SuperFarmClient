import React from "react"

// Product List 에서 제품 하나하나를 보여주는 컴포넌트
function ProductItem(props) {
    return (
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="../../images/rice.jpg" className="img-responsive" alt="Berry Lace Dress" />
                    <div>
                        <a href="../../images/rice.jpg" className="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">{props.item.productBoardTitle}</a></h3>
                <div class="pi-price">{props.item.productBoardDeliveryPrice}원</div>
                <a href="javascript:;" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>

    )
}

export default ProductItem



