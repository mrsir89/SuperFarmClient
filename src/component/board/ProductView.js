import React from 'react';
import './ProductView.css';
//import productItem from './productItem.json';

// ProductDetail 페이지에서 공통으로 있는 상품 상세 정보, 배송교환반품안내, 이용후기(추후 해당 컴포넌트 추가 예정) 
function ProductView(props) {

  return (
    <div className>
 
        <img src={props.productDetail.productBoardCommon} width="1100px"/>
      <table>
        <tr height="100px">
        </tr>
      </table>
      <div id="section2">
        <div className="list-group list-group-horizontal-md">
          <ul className="navbar">
          <a className="list-group-item list-group-item-dark active" href="#section2">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section3">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section4">이용후기</a>
          </ul>
        </div>
        <img src={props.productDetail.productBoardDetail} width="1100px"/>
        <table>
        <tr height="100px">
        </tr>
      </table>
      </div>
      <div id="section3">
        <div className="list-group list-group-horizontal-md">
          {/* <ul class="navbar">
          <a className="list-group-item list-group-item-dark active" href="#section2">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section3">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section4">이용후기</a>
         </ul> */}
        </div> 
        <img src={props.productDetail.productBoardBottom} width="1100px"/>
        <table>
        <tr height="100px">
        </tr>
      </table>
      </div>
      <div id="section4">
        <div className="list-group list-group-horizontal-md">
          {/* <ul class="navbar">
          <a className="list-group-item list-group-item-dark active" href="#section2">상품 상세 정보</a>
            <a className="list-group-item list-group-item-dark" href="#section3">배송/교환/반품안내</a>
            <a className="list-group-item list-group-item-dark" href="#section4">이용후기</a>
          </ul> */}
        </div>
        {/* <ListReview /> */}
        <table>
        <tr height="100px">
        </tr>
      </table>
      </div>
      {/* <QnABoard /> */}
    </div>
  );
}

export default ProductView;
