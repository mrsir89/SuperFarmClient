import React from 'react';

function Carousel(props) {
  return (
    <div className="row margin-bottom-40">
      {/* BEGIN SALE PRODUCT */}
      <div className="col-md-12 sale-product">
        <h2>베스트 상품</h2>
        <div className="owl-carousel owl-carousel5">
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/images/tangerin.png" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="/product/1">Berry Lace Dress</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
              <div className="sticker sticker-sale" />
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/images/tangerin.png" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="/product/1">Berry Lace Dress2</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/images/tangerin.png" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="/product/1">Berry Lace Dress2</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/images/tangerin.png" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="javascript:;">Berry Lace Dress4</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
              <div className="sticker sticker-new" />
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model5.jpg" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress5</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model3.jpg" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/images/tangerin.png" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/images/tangerin.png" className="btn btn-default fancybox-button">Zoom</a>

                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress3</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      {/* END SALE PRODUCT */}
    </div>
  );
}



export default Carousel;
