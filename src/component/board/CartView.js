import React from "react"
import { isTemplateElement } from "@babel/types";




// css 적용, 수량 변경 , 
class CartView extends React.Component {

  constructor(props){
    super(props)
    this.state={
      count :1
    }
  }
  _changeQuantity(event){
    console.log('버튼  확인',event)
    console.log(event.target.name)
    console.log(event.target.value)
 
  }
  render() {
    console.log('cartView render',this.props)
    const {item} = this.props;
    
    return (

      <div className="main">
        <div className="container">
          {/* <!-- BEGIN SIDEBAR & CONTENT --> */}
          <div className="row margin-bottom-40">
            {/* <!-- BEGIN CONTENT --> */}
            <div className="col-md-12 col-sm-12">
              <h1>장바구니</h1>
              <div className="goods-page">
                <div className="goods-data clearfix">
                  <div className="table-wrapper-responsive">
                    <table summary="Shopping cart">
                      <tbody><tr>
                        <th className="goods-page-image">제품</th>
                        <th className="goods-page-description">제품 목록</th>
                        <th className="goods-page-ref-no">제품 번호</th>
                        <th className="goods-page-quantity">수량</th>
                        <th className="goods-page-price">단가</th>
                        <th className="goods-page-total" colspan="2">가격 </th>
                      </tr>
                        <tr>
                          <td className="goods-page-image">
                            <a href={`/product/${item.productBoardNum}`}><img src={item.cartProductImg} alt="Berry Lace Dress" /></a>
                          </td>
                          <td className="goods-page-description">
                            <h3><a href={`/product/${item.productBoardNum}`}>{item.productBoardTitle}</a></h3>
                            <p><strong>{item.cartProductOption1==null?'':'옵션1 '} </strong> {item.cartProductOption1==null?'':item.cartProductOption1} </p>
                            <p><strong>{item.cartProductOption2==null?'':'옵션2 '} </strong> {item.cartProductOption2==null?'':item.cartProductOption1} </p>
                           </td>
                          <td className="goods-page-ref-no">
                             {item.productCode}
                          </td>
                          <td >
                            <input type = "number" min ="1" max ="20" name ={item.cartNum}  onChange={this._changeQuantity} size="4"></input>
                            <input type ="button" value ="적용" onClick={this._changeQuantity}/>
                          </td>
                          {/* <td className="goods-page-quantity">
                            <div className="product-quantity">
                              <div className="input-group bootstrap-touchspin input-group-sm"><span className="input-group-btn">
                                <button className="btn quantity-down bootstrap-touchspin-down" type="button" >
                                  <i className="fa fa-angle-down"></i>
                                  </button>
                                  </span>
                                  <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }}></span>
                                    <input id="product-quantity" type="text" value={this.state.count} readonly="" 
                                    onChange={this._changeQuantity} className="form-control input-sm" style={{ display: 'block' }} />
                                  <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }}></span>
                                  <span className="input-group-btn">
                                    <button className="btn quantity-up bootstrap-touchspin-up" type="button" onClick={this._changeQuantity}>
                                    <i className="fa fa-angle-up"></i></button></span></div>
                            </div>
                          </td> */}
                          <td className="goods-page-price">
                            <strong>{item.cartProductPrice}</strong>
                          </td>
                          <td className="goods-page-total">
                            <strong>{this.aaa}</strong>
                          </td>
                          <td className="del-goods-col">
                            <a className="del-goods" href="javascript:;">&nbsp;</a>
                          </td>
                        </tr>
                        {/* <tr>
                          <td className="goods-page-image">
                            <a href="javascript:;"><img src="../../assets/frontend/pages/img/products/model4.jpg" alt="Berry Lace Dress" /></a>
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
                              <div className="input-group bootstrap-touchspin input-group-sm">
                                <span className="input-group-btn">
                                  <button className="btn quantity-down bootstrap-touchspin-down" type="button">
                                    <i className="fa fa-angle-down"></i>
                                  </button>
                                </span>
                                <span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }}></span>
                                <input id="product-quantity2" type="text" value="1" readonly="" className="form-control input-sm" style={{ display: "block" }} />
                                <span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }}></span>
                                <span className="input-group-btn">
                                  <button className="btn quantity-up bootstrap-touchspin-up" type="button"><i className="fa fa-angle-up"></i></button>
                                </span>
                              </div>
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
                        </tr> */}
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
                <button className="btn btn-default" type="submit">Continue shopping <i className="fa fa-shopping-cart"></i></button>
                <button className="btn btn-primary" type="submit">Checkout <i className="fa fa-check"></i></button>
              </div>
            </div>
            {/* <!-- END CONTENT --> */}
          </div>
          {/* <!-- END SIDEBAR & CONTENT --> */}

          {/* <!-- BEGIN SIMILAR PRODUCTS --> */}

          {/* <!-- END SIMILAR PRODUCTS --> */}
        </div>
      </div>
    );
  }

}

export default CartView


{/* <div >
          <img src={this.props.item.cartProductImg} />
          <p>cartNum : {this.props.item.cartNum}</p>  
          <p>수량 : {this.props.item.cartProductCount}</p>  
          <p>상품 이름 : {this.props.item.cartProductName}</p>  
          <p>옵션1 : {this.props.item.cartProductOption1}</p>  
          <p>옵션2 : {this.props.item.cartProductOption2}</p> 
          <p>가격 : {this.props.item.cartProductPrice}</p>
      </div> */}


