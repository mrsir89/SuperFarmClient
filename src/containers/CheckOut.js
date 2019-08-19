import React from 'react';
import { withRouter } from 'react-router-dom';

function CheckOut({ history, location, matcher }) {
  return (
    <div className="main">
      <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-12 col-sm-12">
          <h1>Checkout</h1>
          {/* BEGIN CHECKOUT PAGE */}
          <div className="panel-group checkout-page accordion scrollable" id="checkout-page">
            {/* BEGIN CHECKOUT */}
            <div id="checkout" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#checkout-content" className="accordion-toggle">
                    Step 1: Checkout Options
                </a>
                </h2>
              </div>
              <div id="checkout-content" className="panel-collapse collapse in">
                <div className="panel-body row">
                  <div className="col-md-6 col-sm-6">
                    <h3>New Customer</h3>
                    <p>Checkout Options:</p>
                    <div className="radio-list">
                      <label>
                        <input type="radio" name="account" defaultValue="register" /> Register Account
                    </label>
                      <label>
                        <input type="radio" name="account" defaultValue="guest" /> Guest Checkout
                    </label>
                    </div>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                    <button className="btn btn-primary" type="submit" data-toggle="collapse" data-parent="#checkout-page" data-target="#payment-address-content">Continue</button>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h3>Returning Customer</h3>
                    <p>I am a returning customer.</p>
                    <form role="form" action="#">
                      <div className="form-group">
                        <label htmlFor="email-login">E-Mail</label>
                        <input type="text" id="email-login" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password-login">Password</label>
                        <input type="password" id="password-login" className="form-control" />
                      </div>
                      <a href="javascript:;">Forgotten Password?</a>
                      <div className="padding-top-20">
                        <button className="btn btn-primary" type="submit">Login</button>
                      </div>
                      <hr />
                      <div className="login-socio">
                        <p className="text-muted">or login using:</p>
                        <ul className="social-icons">
                          <li><a href="javascript:;" data-original-title="facebook" className="facebook" title="facebook" /></li>
                          <li><a href="javascript:;" data-original-title="Twitter" className="twitter" title="Twitter" /></li>
                          <li><a href="javascript:;" data-original-title="Google Plus" className="googleplus" title="Google Plus" /></li>
                          <li><a href="javascript:;" data-original-title="Linkedin" className="linkedin" title="LinkedIn" /></li>
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* END CHECKOUT */}
            {/* BEGIN PAYMENT ADDRESS */}
            <div id="payment-address" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#payment-address-content" className="accordion-toggle">
                    Step 2: Account &amp; Billing Details
                </a>
                </h2>
              </div>
              <div id="payment-address-content" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-md-6 col-sm-6">
                    <h3>Your Personal Details</h3>
                    <div className="form-group">
                      <label htmlFor="firstname">First Name <span className="require">*</span></label>
                      <input type="text" id="firstname" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastname">Last Name <span className="require">*</span></label>
                      <input type="text" id="lastname" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-Mail <span className="require">*</span></label>
                      <input type="text" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telephone">Telephone <span className="require">*</span></label>
                      <input type="text" id="telephone" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fax">Fax</label>
                      <input type="text" id="fax" className="form-control" />
                    </div>
                    <h3>Your Password</h3>
                    <div className="form-group">
                      <label htmlFor="password">Password <span className="require">*</span></label>
                      <input type="password" id="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-confirm">Password Confirm <span className="require">*</span></label>
                      <input type="text" id="password-confirm" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <h3>Your Address</h3>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input type="text" id="company" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address1">Address 1</label>
                      <input type="text" id="address1" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address2">Address 2</label>
                      <input type="text" id="address2" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City <span className="require">*</span></label>
                      <input type="text" id="city" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="post-code">Post Code <span className="require">*</span></label>
                      <input type="text" id="post-code" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country <span className="require">*</span></label>
                      <select className="form-control input-sm" id="country">
                        <option value> --- Please Select --- </option>
                        <option value={244}>Aaland Islands</option>
                        <option value={1}>Afghanistan</option>
                        <option value={2}>Albania</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="region-state">Region/State <span className="require">*</span></label>
                      <select className="form-control input-sm" id="region-state">
                        <option value> --- Please Select --- </option><option value={3513}>Aberdeen</option><option value={3514}>Aberdeenshire</option><option value={3515}>Anglesey</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-12">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" /> I wish to subscribe to the OXY newsletter.
                    </label>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultChecked="checked" /> My delivery and billing addresses are the same.
                    </label>
                    </div>
                    <button className="btn btn-primary  pull-right" type="submit" data-toggle="collapse" data-parent="#checkout-page" data-target="#shipping-address-content" id="button-payment-address">Continue</button>
                    <div className="checkbox pull-right">
                      <label>
                        <input type="checkbox" /> I have read and agree to the <a title="Privacy Policy" href="javascript:;">Privacy Policy</a> &nbsp;&nbsp;&nbsp;
                    </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END PAYMENT ADDRESS */}
            {/* BEGIN SHIPPING ADDRESS */}
            <div id="shipping-address" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#shipping-address-content" className="accordion-toggle">
                    Step 3: Delivery Details
                </a>
                </h2>
              </div>
              <div id="shipping-address-content" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="firstname-dd">First Name <span className="require">*</span></label>
                      <input type="text" id="firstname-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastname-dd">Last Name <span className="require">*</span></label>
                      <input type="text" id="lastname-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email-dd">E-Mail <span className="require">*</span></label>
                      <input type="text" id="email-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telephone-dd">Telephone <span className="require">*</span></label>
                      <input type="text" id="telephone-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="fax-dd">Fax</label>
                      <input type="text" id="fax-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company-dd">Company</label>
                      <input type="text" id="company-dd" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="form-group">
                      <label htmlFor="address1-dd">Address 1</label>
                      <input type="text" id="address1-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address2-dd">Address 2</label>
                      <input type="text" id="address2-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city-dd">City <span className="require">*</span></label>
                      <input type="text" id="city-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="post-code-dd">Post Code <span className="require">*</span></label>
                      <input type="text" id="post-code-dd" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country-dd">Country <span className="require">*</span></label>
                      <select className="form-control input-sm" id="country-dd">
                        <option value> --- Please Select --- </option>
                        <option value={244}>Aaland Islands</option>
                        <option value={1}>Afghanistan</option>
                        <option value={2}>Albania</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="region-state-dd">Region/State <span className="require">*</span></label>
                      <select className="form-control input-sm" id="region-state-dd">
                        <option value> --- Please Select --- </option><option value={3513}>Aberdeen</option><option value={3514}>Aberdeenshire</option><option value={3515}>Anglesey</option><option value={3516}>Angus</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary  pull-right" type="submit" id="button-shipping-address" data-toggle="collapse" data-parent="#checkout-page" data-target="#shipping-method-content">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            {/* END SHIPPING ADDRESS */}
            {/* BEGIN SHIPPING METHOD */}
            <div id="shipping-method" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#shipping-method-content" className="accordion-toggle">
                    Step 4: Delivery Method
                </a>
                </h2>
              </div>
              <div id="shipping-method-content" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-md-12">
                    <p>Please select the preferred shipping method to use on this order.</p>
                    <h4>Flat Rate</h4>
                    <div className="radio-list">
                      <label>
                        <input type="radio" name="FlatShippingRate" defaultValue="FlatShippingRate" /> Flat Shipping Rate
                    </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="delivery-comments">Add Comments About Your Order</label>
                      <textarea id="delivery-comments" rows={8} className="form-control" defaultValue={""} />
                    </div>
                    <button className="btn btn-primary  pull-right" type="submit" id="button-shipping-method" data-toggle="collapse" data-parent="#checkout-page" data-target="#payment-method-content">Continue</button>
                  </div>
                </div>
              </div>
            </div>
            {/* END SHIPPING METHOD */}
            {/* BEGIN PAYMENT METHOD */}
            <div id="payment-method" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#payment-method-content" className="accordion-toggle">
                    Step 5: Payment Method
                </a>
                </h2>
              </div>
              <div id="payment-method-content" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-md-12">
                    <p>Please select the preferred payment method to use on this order.</p>
                    <div className="radio-list">
                      <label>
                        <input type="radio" name="CashOnDelivery" defaultValue="CashOnDelivery" /> Cash On Delivery
                    </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="delivery-payment-method">Add Comments About Your Order</label>
                      <textarea id="delivery-payment-method" rows={8} className="form-control" defaultValue={""} />
                    </div>
                    <button className="btn btn-primary  pull-right" type="submit" id="button-payment-method" data-toggle="collapse" data-parent="#checkout-page" data-target="#confirm-content">Continue</button>
                    <div className="checkbox pull-right">
                      <label>
                        <input type="checkbox" /> I have read and agree to the <a title="Terms & Conditions" href="javascript:;">Terms &amp; Conditions </a> &nbsp;&nbsp;&nbsp;
                    </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END PAYMENT METHOD */}
            {/* BEGIN CONFIRM */}
            <div id="confirm" className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#checkout-page" href="#confirm-content" className="accordion-toggle">
                    Step 6: Confirm Order
                </a>
                </h2>
              </div>
              <div id="confirm-content" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-md-12 clearfix">
                    <div className="table-wrapper-responsive">
                      <table>
                        <tbody><tr>
                          <th className="checkout-image">Image</th>
                          <th className="checkout-description">Description</th>
                          <th className="checkout-model">Model</th>
                          <th className="checkout-quantity">Quantity</th>
                          <th className="checkout-price">Price</th>
                          <th className="checkout-total">Total</th>
                        </tr>
                          <tr>
                            <td className="checkout-image">
                              <a href="javascript:;"><img src="/assets/frontend/pages/img/products/model3.jpg" alt="Berry Lace Dress" /></a>
                            </td>
                            <td className="checkout-description">
                              <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                              <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                              <em>More info is here</em>
                            </td>
                            <td className="checkout-model">RES.193</td>
                            <td className="checkout-quantity">1</td>
                            <td className="checkout-price"><strong><span>$</span>47.00</strong></td>
                            <td className="checkout-total"><strong><span>$</span>47.00</strong></td>
                          </tr>
                          <tr>
                            <td className="checkout-image">
                              <a href="javascript:;"><img src="/assets/frontend/pages/img/products/model4.jpg" alt="Berry Lace Dress" /></a>
                            </td>
                            <td className="checkout-description">
                              <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                              <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                              <em>More info is here</em>
                            </td>
                            <td className="checkout-model">RES.193</td>
                            <td className="checkout-quantity">1</td>
                            <td className="checkout-price"><strong><span>$</span>47.00</strong></td>
                            <td className="checkout-total"><strong><span>$</span>47.00</strong></td>
                          </tr>
                        </tbody></table>
                    </div>
                    <div className="checkout-total-block">
                      <ul>
                        <li>
                          <em>Sub total</em>
                          <strong className="price"><span>$</span>47.00</strong>
                        </li>
                        <li>
                          <em>Shipping cost</em>
                          <strong className="price"><span>$</span>3.00</strong>
                        </li>
                        <li>
                          <em>Eco Tax (-2.00)</em>
                          <strong className="price"><span>$</span>3.00</strong>
                        </li>
                        <li>
                          <em>VAT (17.5%)</em>
                          <strong className="price"><span>$</span>3.00</strong>
                        </li>
                        <li className="checkout-total-price">
                          <em>Total</em>
                          <strong className="price"><span>$</span>56.00</strong>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                    <button className="btn btn-primary pull-right" type="submit" id="button-confirm">Confirm Order</button>
                    <button type="button" className="btn btn-default pull-right margin-right-20">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONFIRM */}
          </div>
          {/* END CHECKOUT PAGE */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(CheckOut);
