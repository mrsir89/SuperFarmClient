import React from 'react';


//숫자 통화 표시
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function CarouselItem(props) {
  const { productBoardThumbnail, productBoardNum, isDiscount, isNew, productId, productBoardBest, productBoardTitle, productPrice, } = props;
  console.log('carouseItem |||||||||', props)

  const _numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (productBoardBest > 4) {
    return
  }
  return (
    <div className="product-item2">
      <div className="pi-img-wrapper"><a href={`/product/${productBoardNum}`}>
        <p className="m_index_item_img"><img src={productBoardThumbnail}  className="img-responsive" alt="Berry Lace Dress" />
        </p>
        </a>
      </div>
      <div className="index_prd_info">
        <p className="index_prd_itemname"><a href={`/product/${productBoardNum}`}>{productBoardTitle}</a></p>
        <div className="pi-price" >{productPrice} 원</div>
        {/* <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a> */}
        {isDiscount !== undefined && isDiscount !== null && isDiscount
          ? (<div className="sticker sticker-sale" />) : ('')}
        {isNew !== undefined && isNew !== null && isNew
          ? (<div className="sticker sticker-new" />) : ('')}
      </div>
    </div>
  );
}

export default CarouselItem;