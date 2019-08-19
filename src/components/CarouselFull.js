import React from 'react';

function Carousel() {
  return (
    <div className="row margin-bottom-40">
      {/* BEGIN SALE PRODUCT */}
      <div className="col-md-12 sale-product">
        <h2>New Arrivals</h2>
        <div className="owl-carousel owl-carousel5">
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/assets/frontend/pages/img/products/model1.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model1.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
              <div className="sticker sticker-sale" />
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/assets/frontend/pages/img/products/model2.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model2.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/assets/frontend/pages/img/products/model6.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model6.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                </div>
              </div>
              <h3><a href="shop-item.html">Berry Lace Dress2</a></h3>
              <div className="pi-price">$29.00</div>
              <a href="javascript:;" className="btn btn-default add2cart">Add to cart</a>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="pi-img-wrapper">
                <img src="/assets/frontend/pages/img/products/model4.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model4.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
                <img src="/assets/frontend/pages/img/products/model5.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model5.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
                <img src="/assets/frontend/pages/img/products/model3.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model3.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
                <img src="/assets/frontend/pages/img/products/model7.jpg" className="img-responsive" alt="Berry Lace Dress" />
                <div>
                  <a href="/assets/frontend/pages/img/products/model7.jpg" className="btn btn-default fancybox-button">Zoom</a>
                  <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
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
