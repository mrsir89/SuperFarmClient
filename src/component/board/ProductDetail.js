import React from 'react';
//import productDummy from './productDummy'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductView';
//import { addCart } from '../actions/action';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';


// 제품 상세 페이지
// 옵션, 가격을 form에 담아서 submit -> 바로구매 or 장바구니
// 테스트 
class ProductDetail extends React.Component {
   constructor(props) {    // props 굳이 안써줘도 넘어 옴
      super(props);
      const { userNum } = this.props.userDetails;
      const { productBoard } = this.props;

      this.state = {
         productInfo: '',
         userNumber: `${userNum}`,
         productBoardNum: '',
         cartProductName: '',
         cartProductOption1:'',
         cartProductOption2: '',
         cartProductPrice: '',
         cartProductCount: '',
         cartProductImg: '',
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this._renderProduct= this._renderProduct.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();
      const cartModel = {

         userNum: this.state.userNumber,
         productBoardNum: this.state.productBoardNum,
         cartProductName: this.state.cartProductName,
         cartProductOption1: this.state.cartProductOption1,
         cartProductOption2: this.state.cartProductOption2,
         cartProductPrice: this.state.cartProductPrice,
         cartProductCount: this.state.cartProductCount,
         cartProductImg: this.state.cartProductImg
      };

      const { addCart } = this.props;
      console.log("장바구니 추가>>>", cartModel)
      addCart(cartModel);
   }

   handleInputChange(event) {
      console.log("handler가 실행이 됨 ")
      const target = event.target;
      const value = target.value;
      const name = target.name;


      this.setState({
         [name]: value
      });

      console.log("value?? >>", value);
      console.log("name?? >>", name);
      console.log("target?? >>", target);
   }

   // 해당 productBoard 번호에 맞는 product Detail정보를 필터를 이용해서 꺼냄 
   // setState
   // productBoardNum : {value: newProducts[0].productBoardNum},
   //       cartProductName : {value:newProducts[0].product.productName},
   //       cartProductPrice : {value:newProducts[0].product.productPrice},
   //       cartProductCount : {value:1},
   //       cartProductImg : {value:newProducts[0].productBoardThumbnail},

   _renderProduct = () => {

      const productId = this.props.match.params.id;
      const products = this.props.productBoard;
      console.log("products", products)
      var newProducts = [];
      if (products !== undefined && products !== null) {
         newProducts = products.filter((item) => (item.productBoardNum == productId));
      }
      console.log("newProduct[0] >>>>", newProducts[0])

      this.setState({
         productInfo: newProducts[0],
         productBoardNum: newProducts[0].productBoardNum,
         cartProductName: newProducts[0].productList.productName,
         cartProductPrice: newProducts[0].productList.productPrice,
         cartProductCount: 1,   // 추후 변경 예정
         cartProductImg: newProducts[0].productBoardThumbnail,
         cartProductOption1: newProducts[0].productList.productOption1,
         cartProductOption2: newProducts[0].productList.productOption2
      });

      return newProducts[0];
   }

   componentWillMount() {
      this._renderProduct();
   }


   _selectOption1 = (productList) => {
      var optionList = [];
      if (productList !== undefined && productList !== null) {
         optionList = productList.map(item => {
            return (
               <option value={item.productOption1}>{item.productOption1}</option>
            );
         })
      }
      return optionList;
   }

   _selectOption2 = (productList) => {
      var optionList = [];
      if (productList !== undefined && productList !== null) {
         optionList = productList.map(item => {
            return (
               <option value={item.productOption2}>{item.productOption2}</option>
            );
         })
      }
      return optionList;
   }


   // TODO : userDetails가 없을 경우 에러 처리해줘야함 
   render() {
      const { productInfo } = this.state;
      const { productList } = productInfo;
      console.log("this.state >>>", this.state);
      
      console.log ("is State setted? >>", this.state)
      return (
         <div className="product-item">
            <div className="prod-info">
               <div className="prd-info">

                  <form onSubmit={this.handleSubmit}>
                     <div class="prd-table">
                        <table summary="">
                           <caption>상품정보 목록</caption>
                           <tbody>
                              <tr>
                                 <th scope="row">상품 이름</th>
                                 <td>{productInfo.productBoardTitle}</td>
                              </tr>
                              <tr>
                                 <th scope="row">상품 소분류</th>
                                 <td>{productInfo.lowerCode}</td>
                              </tr>
                              <tr>
                                 <th scope="row">상품 가격(옵션에 따라 달라질 예정)</th>
                                 <td>{productInfo.productList.productTaxprice}</td>
                              </tr>
                              <tr>
                                 <th scope="row">개수</th>
                                 <td>1 (추후 변경 예정)</td>
                              </tr>
                              <tr>
                                 <th scope="row">배송비</th>
                                 <td>{productInfo.productBoardDeliveryPrice}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <div class="form-row">

                        <div class="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션1 선택</label>
                           <select value={this.state.cartProductOption1} onChange={this.handleInputChange} name="cartProductOption1" >
                              <option value={productInfo.productList.productOption1}>{productInfo.productList.productOption1}</option>
                              <option value="옵션1 선택">옵션1 선택</option>
                           </select>
                        </div>

                        <div class="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션2 선택</label>
                           <select value={this.state.cartProductOption2} onChange={this.handleInputChange} name="cartProductOption2"  >
                              <option value={productInfo.productList.productOption2}>{productInfo.productList.productOption2}</option>
                              <option value="옵션2 선택">옵션2 선택</option>
                           </select>
                        </div>


                     </div>


                     <div className="btn-prd">
                        <p><a href="#" className="btn-buy">구매</a></p>
                        <a href="/cart" className="btn-buy">
                           <p>장바구니로 이동(링크)</p>
                        </a>
                        <input type="submit" id="submit" name="submit" value="장바구니 추가" />
                     </div>
                  </form>
               </div>
            </div>
            {/* <ProductView key = {product.productBoardNum} product ={product} /> */}
         </div>
      );
   }
}
//옵션 select 에서 class="form-control" id="exampleFormControlSelect1"

// store에서 state를 복사해서 컨테이너의 props에 붙여넣기 
function mapStateToProps(state) {
   const { product, auth } = state;
   const { userDetails } = auth;
   const { productBoard } = product
   return {
      productBoard,
      userDetails
   };
}


const mapDispatchToProps = dispatch => ({
   addCart: (cartModel) => dispatch(Actions.addCart(cartModel))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
