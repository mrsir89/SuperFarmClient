import React from 'react';
//import productDummy from './productDummy'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductV iew';
//import { addCart } from '../actions/action';
import { Actions } from '../../actions';
import './ProductDetail.css';


// 제품 상세 페이지
// 옵션, 가격을 form에 담아서 submit -> 바로구매 or 장바구니
// 테스트 
class ProductDetail extends React.Component {

   constructor(props) {    // props 굳이 안써줘도 넘어 옴
      super(props);
      const { userNum } = this.props.userDetails;

      this.state = {
         productInfo: '',
         userNumber: userNum,
         productBoardNum: '',
         cartProductName: '',
         cartProductOption1: '',
         cartProductOption2: '',
         cartProductPrice: '',
         cartProductCount: '',
         cartProductImg: '',
         tmpOption1:'',
         productChoiceNum: []
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this._renderProduct = this._renderProduct.bind(this);

      this._option1Change = this._option1Change.bind(this);
      this._option2Change = this._option2Change.bind(this);
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


   }

   _option1Check(productList) {

      var optionList = [];

      console.log('option1Check ----------',productList)
      if (productList !== undefined && productList !== null) {
         optionList = productList.map(productList => {
            return (
               productList
            );
         })
      }
      console.log(optionList,'ssssssss')
      return optionList;
   }
   _option1Change(event){
      console.log('여기는 option1Change --------',event)
      console.log('여기는 ',event.target.value)
      this.setState({
         tmpOption1:event.target.value
      })
   }

   _option2Check(productList){

      console.log('option2Check',this.state.tmpOption1)
      var optionList = [];

      console.log('option1Check ----------',productList)
      if (productList !== undefined && productList !== null) {
         optionList = productList.filter(productList=> this.state.tmpOption1===productList.productOption1);
         return optionList;
      }
      return optionList;
   }

   _option2Change = (event)=> {

      let productCode=''
      productCode = event.target.value;
      const { productList } = this.props.productBoardDetail;
      const { productChoiceNum } = this.state
      console.log(productChoiceNum ,' 확아아아아니')
      var choiceProduct = productList.filter(productList =>productList.productCode === productCode )
      this.setState({
         productChoiceNum:{
            ...productChoiceNum,
            choiceProduct}
      })
      console.log('여기는 state',this.state)
   }

   _loadProductDetail() {

      const productBoardNum = this.props.match.params.id;
      console.log(productBoardNum, ' productBoardNum!!')
      const { loadProductDetails } = this.props;

      loadProductDetails(productBoardNum);

   }
   _renderProduct = () => {

      const productId = this.props.match.params.id;
      const products = this.props.productBoard;
      console.log("products", products)
      var newProducts = [];
      if (products !== undefined && products !== null) {
         newProducts = products.filter((item) => (item.productBoardNum == productId));

         console.log("newProduct[0] >>>>", newProducts[0])

         this.setState({
            productInfo: newProducts[0],
            productBoardNum: newProducts[0].productBoardNum,
            cartProductName: newProducts[0].productList[0].productName,
            cartProductPrice: newProducts[0].productList[0].productPrice,

            cartProductCount: 1,   // 추후 변경 예정
            cartProductImg: newProducts[0].productBoardThumbnail,
            cartProductOption1: newProducts[0].productList[0].productOption1,
            cartProductOption2: newProducts[0].productList[0].productOption2
         });
      }
      return newProducts[0];
   }

   componentWillMount() {
      console.log(this.productBoard,' will mount')
      this._loadProductDetail();
      //this._renderProduct();
   }

   componentDidMount() {
      console.log('componentDidMount')
   }

   
   // TODO : userDetails가 없을 경우 에러 처리해줘야함 
   render() {
      console.log('r e n d e r 시작', this.props)

      const { productInfo } = this.state;
      const { productBoardDetail } = this.props;
      const {productList} = productBoardDetail;
      console.log('시작 이다!!!!!',productBoardDetail)
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
                              {/* {/* <tr>
                                 <th scope="row">상품 가격(옵션에 따라 달라질 예정)</th>
                                 {/* <td>{productList.productTaxprice}</td> */}
                              {/*</tr> */}

                              <tr>
                                 <th scope="row">배송비</th>
                                 <td>{productInfo.productBoardDeliveryPrice}</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <div className="form-row">
                 
                        <div className="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션1 선택</label>
                           < select name="option1" onChange={this._option1Change}>
                              <option value="default" selected="selected">옵션을 선택하세요</option>
                              {this._option1Check(productList).map((productList)=>(
                              <option value={productList.productOption1} >
                              {productList.productOption1}</option>
                              ))}
                              </select>
                        </div>
                        <div className="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션2 선택</label>
                           < select name="option2" onChange={this._option2Change}>
                              <option value="default" selected="selected">옵션을 선택하세요</option>
                              {this._option2Check(productList).map((productList)=>(
                              <option value={productList.productCode} >
                              {productList.productOption2}</option>
                              ))}
                              </select>
                        </div>
                        {/* <div className="form-group col-md-6">
                           <label for="exampleFormControlSelect1">옵션2 선택</label>
                           <select value={this.state.cartProductOption2} onChange={this.handleInputChange} name="cartProductOption2"  >
                              {this._selectOption2(productList)}
                           </select>
                        </div> */}
                        {/* <div>
                           <label> 개수</label>
                           <input type = "number" min="1" max="100"></input>
                        </div> */}
                        <div className="number-input md-number-input">
                           <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" className="minus"></button>
                           <input className="quantity" min="1" name="quantity" value="1" type="number"/>
                           <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" className="plus"></button>
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

