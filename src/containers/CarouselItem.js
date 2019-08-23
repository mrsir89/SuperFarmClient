import React from 'react';

function CarouselItem(props) {
  // { 이미지 경로, 할인중, 새제품, 상품코드, 상품명, 상품가격 }
  const { imageUrl, isDiscount, isNew, productId, productName, productPrice } = props;

  return (
    <div>
      <div className="product-item">
        <div className="pi-img-wrapper">
          <img src={imageUrl} className="img-responsive" alt="Berry Lace Dress" />
          <div>
            <a href={imageUrl} className="btn btn-default fancybox-button">Zoom</a>
            <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
          </div>
        </div>
        <h3><a href="shop-item.html">{productName}</a></h3>
        <div className="pi-price">{productPrice}</div>
        <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
        {isDiscount !== undefined && isDiscount !== null && isDiscount
          ? (<div className="sticker sticker-sale" />) : ('')}
        {isNew !== undefined && isNew !== null && isNew
          ? (<div className="sticker sticker-new" />) : ('')}
      </div>
    </div>
  );
}

export default CarouselItem;