import React from 'react';

function CarouselItem(props) {
  // { 이미지 경로, 할인중, 새제품, 상품코드, 상품명, 상품가격 }
  const { imageUrl, isDiscount, isNew, productId, productName, productPrice } = props;

  return (
    <div className="product-item2">
      <div className="pi-img-wrapper">
        <p className="m_index_item_img"><img src={imageUrl} className="img-responsive" alt="Berry Lace Dress" /></p>
      </div>
      <div className="index_prd_info">
        <p className="index_prd_itemname"><a href="shop-item.html">{productName}</a></p>
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