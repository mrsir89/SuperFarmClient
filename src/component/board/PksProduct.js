import React, { Component } from 'react';
import './pks_product.css'
// import DaumPostcode from 'react-daum-postcode';

class PksProduct extends Component {
  render() {
    return (
      <div className="product">

        {/* best 상품 */}
        <div className="product-top">
          <ul className="product-best">
            <li className="product-best-item">
              <a href="#none">
                <div className="product-best-item--rank">
                  best1
                </div>
                <div className="product-best-item--thumb">
                  <img src="https://placeimg.com/280/280/nature/sepia" />
                </div>
                <div className="product-best-item--info">
                  <div className="product-best-item--icon">
                    <p className="icon">아이콘</p>
                  </div>
                  <div className="product-best-item--title">
                    내용입력
                  </div>
                  <div className="product-best-item--price">
                    <span className="price">30,000</span> 원
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>


        {/* Sidebar */}
        <div className="product-bot">
          <div className="product-bot-left">
            <dl className="product-sidebar">
              {/* 현재 upper category 나오게  */}
              <dt className="sidebar-title">농산물</dt>
              <dd className="sidebar-menu">
                {/* productlist의 lower category,  
                    map  */}
                <a href="#none">menu1</a>
              </dd>
            </dl>
          </div>



          <div className="product-bot-right">

            {/* 필터 */}
            <div className="product-total">
              <div className="product-total-bar">
                <span className="total-item">현재 lower </span> 카테고리 내 <span className="total-count">8</span>개의 상품이 있습니다.
              </div>
              <div className="product-filter">
                필터
              </div>
            </div>


            {/* 상품 리스트 */}
            <ul className="product-best product-bot-list">
              <li className="product-best-item product-bot-item">
                <a href="#none">
                  <div className="product-best-item--thumb">
                    <img src="https://placeimg.com/280/280/nature/sepia" />
                  </div>
                  <div className="product-best-item--info product-bot-info">
                    <div className="product-best-item--icon">
                      <p className="icon">아이콘</p>
                    </div>
                    <div className="product-best-item--title">
                      내용입력
                    </div>
                  <div className="product-best-item--price">
                    <span className="price">30,000</span> 원
                  </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>


        </div>
      </div>
    )
  }
}

export default PksProduct;