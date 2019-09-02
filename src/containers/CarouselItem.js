import React from 'react';


//숫자 통화 표시
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function CarouselItem(props) {
  // { 이미지 경로, 할인중, 새제품, 상품코드, 상품명, 상품가격 }
  const { productBoardThumbnail, isDiscount, isNew, productId, productBoardBest,productBoardTitle, productList ,} = props;
  console.log('carouseItem |||||||||', props)
  var price = productList[0].productPrice
  if(productBoardBest >4){
    return 
  }
  return (
    <div className="product-item2">
      <div className="pi-img-wrapper">
        <p className="m_index_item_img"><img src={productBoardThumbnail} className="img-responsive" alt="Berry Lace Dress" /></p>
      </div>
      <div className="index_prd_info">
        <p className="index_prd_itemname"><a href="shop-item.html">{productBoardTitle}</a></p>
        <div className="pi-price" >{numberWithCommas(price)} 원</div>
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