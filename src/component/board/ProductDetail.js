import React from 'react';
//import productDummy from './productDummy'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductView';
//import { addCart } from '../actions/action';
import { Actions } from '../../actions';



// 제품 상세 페이지
// 옵션, 가격을 form에 담아서 submit -> 바로구매 or 장바구니
// 테스트 
class ProductDetail extends React.Component {

   constructor(props) {    // props 굳이 안써줘도 넘어 옴
      super(props);
      const { userNum } = this.props.userDetails;
      const { productBoardDetail } = this.props;
      const { productList } = productBoardDetail;
      this.state = {
         ProductDetail:productBoardDetail,
         productList: productList,
         productInfo: '',
         userNumber: userNum,
         quantity: 1,
         tmpOption1: null,
         tmpOption2: null,
         productChoice: '',
         stock: '',
         totalPrice: 0
      };

 
      this._renderProduct = this._renderProduct.bind(this);
      this._option1Change = this._option1Change.bind(this);
      this._option2Change = this._option2Change.bind(this);
   }

   handleSubmit = (e) => {

      const  productChoice  = this.state.productChoice;

      e.preventDefault();
      console.log("productChoice >>>>>>", productChoice)
      const cartModel = {

         userNum: productChoice.userNumber,
         productBoardNum: productChoice.productBoardNum,
         productBoardTitle:ProductDetail.productBoardTitle,
         cartProductName: productChoice.cartProductName,
         cartProductOption1: productChoice.cartProductOption1,
         cartProductOption2: productChoice.cartProductOption2,
         cartProductPrice: productChoice.cartProductPrice,
         cartProductCount: productChoice.cartProductCount,
         cartProductImg: productChoice.cartProductImg
      };

      const { addCart } = this.props;
      console.log("장바구니 추가>>>", cartModel)
      addCart(cartModel)
      .then(response => {
         if(response.type === ActionTypes.ADD_CART_SUCCESS){
            return alert("해당 상품이 장바구니에 추가되었습니다.")
         } else if(response.type === ActionTypes.ADD_CART_FAIL){
            return alert("옵션을 선택해주세요.")
         }
      }
         
         
      )//
   }

   _option1Check(productList) {

      var optionList = [];
      this.setState({
         tmpOption2: null
      })

      if (productList !== undefined && productList !== null) {
         optionList = productList.map(productList => {
            return (
               productList
            );
         })
      }
      console.log(optionList, 'ssssssss')
      return optionList;
   }
   _option1Change(event) {

      console.log('여기는 ', event.target.value)
      this.setState({
         tmpOption1: event.target.value
      })
   }

   _option2Check(productList) {

      console.log('option1Check', this.state.tmpOption1)
      var optionList = [];

      console.log('option1Check ----------', productList)
      if (productList !== undefined && productList !== null) {
         optionList = productList.filter(productList => this.state.tmpOption1 === productList.productOption1);
         return optionList;
      }
      return optionList;
   }

   // 옵션2 선택시 변경
   _option2Change = (event, productListFromProps) => {

      let tmpCode = ''
      tmpCode = event.target.value;
      const productList = productListFromProps;
      console.log("option2 [[productList]]", productList)
      const choiceProduct = productList.filter(productList => productList.productCode == tmpCode)
      console.log(choiceProduct, 'ssssssssssssssssssssssss')
      if (choiceProduct.length !== 0) {
         this.setState({
            productChoice: choiceProduct[0],
            tmpOption2: choiceProduct[0].productOption2,
            totalPrice: choiceProduct[0].productPrice
         })
      }
   }

   _quantityChange = (event) => {
      console.log('수량 변경 전 확인', this.state)
      // if (this.state.tmpOption1 !== null && this.state.tmpOption2 !== null) {
      console.log(' 금액 확인 ', this.state)
      let quantity = 0;
      let price = 0;
      quantity = event.target.value;
      price = this.state.productChoice.productPrice;
      console.log(event.target.value, ' 수량 확인')
      var calcPrice = quantity * price
      this.setState({
         quantity: quantity,
         totalPrice: calcPrice
      })
      // }else{
      //    alert('옵션을 먼저 선택하세요')
      // }

   }

   componentWillMount() {
      //this._loadProductDetail();
      const productBoardNum = this.props.match.params.id;
      const { loadProductDetails } = this.props;
      loadProductDetails(productBoardNum)
      .then(response => {
         if(response.type=="LOAD_PRODUCTDETAIL_SUCCESS"){
            this.setState({
               ProductDetail : response.payload.data
            })
         } 
      });
     
   }

  
   shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate')
      return (JSON.stringify(nextState) != JSON.stringify(this.state));
   }

   // TODO : userDetails가 없을 경우 에러 처리해줘야함 
   render() {

      const { ProductDetail } = this.state;
      const { productList } = ProductDetail;
      const {productBoardTitle, lowerCode, productBoardDeliveryPrice} = ProductDetail;


      return (

         <div className="product-item">
            <div className="prod-info">
               <div className="prd-info">
                  {/* ------------------------------------------------------------------------------------------------ */}
                  <div className="col-md-6 col-sm-6">
                     <div className="product-main-image" style={{ position: 'relative', overflow: 'hidden' }}>
                        <img src="../../images/rice.jpg" alt="Cool green dress with red bell" className="img-responsive" data-bigimgsrc="../../images/rice.jpg" />
                        <img src="../../images/rice.jpg" className="zoomImg" style={{ position: 'absolute', top: '-290.619px', left: '-180.201px', opacity: '0', width: '600px', height: '800px', border: 'none', maxWidth: 'none' }} />
                     </div>
                  </div>
                  {/* ------------------------------------------------------------------------------------------------ */}

                  <form onSubmit={this.handleSubmit}>
                     <div className="col-md-6 col-sm-6">

                        <table summary="">
                           <caption><strong>상품정보 목록</strong></caption>
                           <tbody>
                              <tr>
                                 <th scope="row">상품 이름</th>
                                 <td>{productBoardTitle}</td>
                              </tr>
                              <tr>
                                 <th scope="row">상품 소분류</th>
                                 <td>{lowerCode}</td>
                              </tr>
                              {/* {/* <tr>
                                 <th scope="row">상품 가격(옵션에 따라 달라질 예정)</th>
                                 {/* <td>{productList.productTaxprice}</td> */}
                              {/*</tr> */}

                              <tr>
                                 <th scope="row">배송비</th>
                                 <td>{productBoardDeliveryPrice}</td>
                              </tr>

                              <tr> 
                                 <th scope ="row"> 옵션1 선택</th> &nbsp;
                           < select name="option1" onChange={this._option1Change}>
                              <option value='defaultValue' selected="selected">옵션을 선택하세요</option>
                              {this._option1Check(productList).map((productList) => (
                                 <option value={productList.productOption1} >
                                    {productList.productOption1}</option>
                              ))}
                               </select>
                              </tr>

                              <tr> 
                                 <th scope ="row"> 옵션2 선택</th> &nbsp;
                                 < select name="option2" onChange={e => this._option2Change(e,productList)}>
                              <option value="default" selected="selected">
                                 옵션을 선택하세요</option>
                              {this._option2Check(productList).map((productList) => (
                                 <option value={productList.productCode} >
                                    {productList.productOption2}</option>
                              ))}
                                 </select>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div className="form-row">
                        {/* <div className="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션1 선택</label> &nbsp;
                           < select name="option1" onChange={this._option1Change}>
                              <option value='defaultValue' selected="selected">옵션을 선택하세요</option>
                              {this._option1Check(productList).map((productList) => (
                                 <option value={productList.productOption1} >
                                    {productList.productOption1}</option>
                              ))}
                           </select>
                        </div> */}

                        

                        <div>
                           <label > 개수</label> &nbsp;
                           <input type="number" min="1" max="100" value={this.state.quantity}
                              step="1" onChange={this._quantityChange}></input>
                        </div>
                        <div>
                           <label> 가격</label> &nbsp;
                           {this.state.totalPrice}
                        </div>
                        <div>
                           <label > 개수</label>
                           <input type="number" min="1" max="100" value={this.state.quantity}
                              step="1" onChange={this._quantityChange}></input>
                        </div>
                        <div>
                           <label> 가격</label>
                           {this.state.totalPrice}
                        </div>
                     </div>
                     <div className="btn-prd">
                        <p><button><a href="#" className="btn-buy">구매</a></button></p>
                        <a href="/cart" className="btn-buy">
                           <p>장바구니로 이동(링크)</p>
                        </a>
                        <input type="submit" id="submit" name="submit" value="장바구니 추가" />
                     </div>
                  </form>
               </div>
            </div>
            <ProductView />
         </div>
      );
   }
}
//옵션 select 에서 class="form-control" id="exampleFormControlSelect1"

// store에서 state를 복사해서 컨테이너의 props에 붙여넣기 
function mapStateToProps(state) {
   console.log('mapStateToProps ->>>>>>', state)
   const { product, auth } = state;
   const { userDetails } = auth;
   const { productBoard } = product
   const { productBoardDetail } = product;
   return {
      productBoard,
      userDetails,
      productBoardDetail
   };
}


const mapDispatchToProps = dispatch => ({
   addCart: (cartModel) => dispatch(Actions.addCart(cartModel)),
   loadProductDetails: (productNum) => dispatch(Actions.loadProductDetails(productNum))
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
