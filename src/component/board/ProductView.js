import React from 'react';
import './ProductView.css';
//import productItem from './productItem.json';
import ListReview from './reviewBoard/ListReview'

// ProductDetail 페이지에서 공통으로 있는 상품 상세 정보, 배송교환반품안내, 이용후기(추후 해당 컴포넌트 추가 예정) 
function ProductView() {

  return (
    <div className>
      <div id="section1">
        <div className="list-group list-group-horizontal-md">
          <ul class="navbar">
            <a className="list-group-item list-group-item-dark active" href="#section1">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section2">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section3">이용후기</a>
          </ul>
        </div>
        <img src="/resource/b.jpg" />
      </div>
      <div id="section2">
        <div className="list-group list-group-horizontal-md">
          <ul class="navbar">
            <a className="list-group-item list-group-item-dark active" href="#section1">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section2">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section3">이용후기</a>
          </ul>
        </div>
        <img src="/resource/b.jpg" />
      </div>
      <div id="section3">
        <div className="list-group list-group-horizontal-md">
          <ul class="navbar">
            <a className="list-group-item list-group-item-dark active" href="#section1">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section2">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section3">이용후기 </a>
          </ul>
        </div>
        <ListReview />
      </div>
    </div>
  );
}

export default ProductView;
