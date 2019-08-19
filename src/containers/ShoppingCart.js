import React from 'react';

function ShoppingCart() {
  return (
    <div className="main">
      <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-12 col-sm-12">
          <h1>Shopping cart</h1>
          <div className="goods-page">
            <div className="goods-data clearfix">
              <div className="table-wrapper-responsive">
                <table summary="Shopping cart">
                  <tbody><tr>
                    <th className="goods-page-image">Image</th>
                    <th className="goods-page-description">Description</th>
                    <th className="goods-page-ref-no">Ref No</th>
                    <th className="goods-page-quantity">Quantity</th>
                    <th className="goods-page-price">Unit price</th>
                    <th className="goods-page-total" colSpan={2}>Total</th>
                  </tr>
                    <tr>
                      <td className="goods-page-image">
                        <a href="javascript:;"><img src="/assets/frontend/pages/img/products/model3.jpg" alt="Berry Lace Dress" /></a>
                      </td>
                      <td className="goods-page-description">
                        <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                        <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                        <em>More info is here</em>
                      </td>
                      <td className="goods-page-ref-no">
                        javc2133
                    </td>
                      <td className="goods-page-quantity">
                        <div className="product-quantity">
                          <input id="product-quantity" type="text" defaultValue={1} readOnly className="form-control input-sm" />
                        </div>
                      </td>
                      <td className="goods-page-price">
                        <strong><span>$</span>47.00</strong>
                      </td>
                      <td className="goods-page-total">
                        <strong><span>$</span>47.00</strong>
                      </td>
                      <td className="del-goods-col">
                        <a className="del-goods" href="javascript:;">&nbsp;</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="goods-page-image">
                        <a href="javascript:;"><img src="/assets/frontend/pages/img/products/model4.jpg" alt="Berry Lace Dress" /></a>
                      </td>
                      <td className="goods-page-description">
                        <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                        <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                        <em>More info is here</em>
                      </td>
                      <td className="goods-page-ref-no">
                        javc2133
                    </td>
                      <td className="goods-page-quantity">
                        <div className="product-quantity">
                          <input id="product-quantity2" type="text" defaultValue={1} readOnly className="form-control input-sm" />
                        </div>
                      </td>
                      <td className="goods-page-price">
                        <strong><span>$</span>47.00</strong>
                      </td>
                      <td className="goods-page-total">
                        <strong><span>$</span>47.00</strong>
                      </td>
                      <td className="del-goods-col">
                        <a className="del-goods" href="javascript:;">&nbsp;</a>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
              <div className="shopping-total">
                <ul>
                  <li>
                    <em>Sub total</em>
                    <strong className="price"><span>$</span>47.00</strong>
                  </li>
                  <li>
                    <em>Shipping cost</em>
                    <strong className="price"><span>$</span>3.00</strong>
                  </li>
                  <li className="shopping-total-price">
                    <em>Total</em>
                    <strong className="price"><span>$</span>50.00</strong>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart" /></button>
            <button className="btn btn-primary" type="submit">Checkout <i className="fa fa-check" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
