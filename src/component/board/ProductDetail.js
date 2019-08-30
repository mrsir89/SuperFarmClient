import React from 'react';
//import productDummy from './productDummy'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductView from './ProductView';
//import { addCart } from '../actions/action';
import { Actions } from '../../actions';
import './ProductDetail.css';
import QnABoard from './QnABoard';
import ListReview from './reviewBoard/ListReview'

// import { thisTypeAnnotation } from '@babel/types';



// 제품 상세 페이지
// 옵션, 가격을 form에 담아서 submit -> 바로구매 or 장바구니
// 테스트 
class ProductDetail extends React.Component {


   constructor(props) {    // props 굳이 안써줘도 넘어 옴
      super(props);
      // const { userNum } = this.props.userDetails;
      const { productBoardDetail } = this.props;
      const { productList } = productBoardDetail;
      this.state = {
         productBoardNum : this.props.match.params.id, 
         ProductDetail: productBoardDetail,
         productList: productList,
         productInfo: '',
         userNumber: '',
         quantity: 1,
         tmpOption1: null,
         tmpOption2: null,
         productChoice: '',
         stock: '',
         totalPrice: 0
      };


      //this._renderProduct = this._renderProduct.bind(this);
      // this._renderProduct = this._renderProduct.bind(this);
      this._option1Change = this._option1Change.bind(this);
      this._option2Change = this._option2Change.bind(this);
   }

   // 장바구니 추가 -> action으로 갈 cartModel 
   handleSubmit = (e) => {
      //const  productChoice  = this.state.productChoice;
      const { productChoice, userNumber, ProductDetail, quantity } = this.state
      e.preventDefault();
      console.log("productChoice >>>>>>", productChoice)
      const cartModel = {
         userNum: userNumber,
         productBoardNum: productChoice.productBoardNum,
         productBoardTitle: ProductDetail.productBoardTitle,
         cartProductName: productChoice.productName,
         cartProductOption1: productChoice.productOption1,
         cartProductOption2: productChoice.productOption2,
         cartProductPrice: productChoice.productPrice,
         cartProductCount: Number.parseInt(quantity),
         cartProductImg: ProductDetail.productBoardCommon,
         productCode: productChoice.productCode
      };

      const { addCart } = this.props;
      console.log("장바구니 추가>>>", cartModel)
      addCart(cartModel);
   }

   _option1Check(productList) {

      var optionList = [];
      // this.setState({
      //    tmpOption2: null
      // })

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
   _option2Change = (event) => {

      let tmpCode = ''
      tmpCode = event.target.value;
      const productList = this.state.productList;
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
      if (this.state.tmpOption1 !== null ) {
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
   }

   _loadProductDetail() {

      const productBoardNum = this.state.productBoardNum;
      console.log(productBoardNum, ' productBoardNum!!')
      const { loadProductDetails } = this.props;

      loadProductDetails(productBoardNum)
      // .then(response=>{
      //    const{ productDetail } = this.props;
      //    this.setState({
      //       productDetail:productDetail
      //    })
      // });;

   }

   componentWillMount() {
      console.log(this.productBoard, ' will mount')
      this._loadProductDetail()
   }


   // shouldComponentUpdate(nextProps, nextState) {
   //    console.log('shouldComponentUpdate')
   //    if (this.props.productBoardDetail!==nextProps.productBoardDetail){
   //          return true
   //       }else{
   //          return false
   //       }
   // }

   // componentWillUpdate(nextProps, nextState){
   //    this._loadProductDetail();

   // }


   _checkout=()=>{
      const { userDetails } = this.props
      const { history } = this.props
      if(userDetails === undefined || userDetails === null){
         alert('login이 필요한 페이지 입니다.')
         return history.push("/login")
      }else{

      }
      
   }

   // TODO : userDetails가 없을 경우 에러 처리해줘야함 
   render() {
      console.log('r e n d e r 시작', this.props)
      console.log(' render state 확인!!!!!!!', this.state)
      const { productBoardDetail } = this.props
      // const productDetail = this.state.ProductDetail;
      const productList = this.state.productList;
      console.log('시작 이다!!!!!', productList)
      return (

         <div className="product-item">
            <div className="prod-info">
               <div className="prd-info">
                  {/* ------------------------------------------------------------------------------------------------ */}
                  <div className="col-md-6 col-sm-6">
                     <div className="product-main-image" style={{ position: 'relative', overflow: 'hidden' }}>
                        <img src={productBoardDetail.productBoardThumbnail} alt="Cool green dress with red bell" className="img-responsive" data-bigimgsrc={productBoardDetail.productBoardThumbnail}/>
                        <img src={productBoardDetail.productBoardThumbnail} className="zoomImg" style={{ position: 'absolute', top: '-290.619px', left: '-180.201px', opacity: '0', width: '600px', height: '800px', border: 'none', maxWidth: 'none' }} />
                     </div>
                  </div>
                  {/* ------------------------------------------------------------------------------------------------ */}

                  <form onSubmit={this.handleSubmit}>
                     <div className="col-md-6 col-sm-6">
                        <h2><bold>상품정보 목록</bold></h2>
                        <table summary="" className="tg" >
                           <tbody>
                              <tr>
                                 <th scope="">상품 이름</th>
                                 <td>{productBoardDetail.productBoardTitle}</td>
                              </tr>
                              <tr>
                                 <th scope="row">상품 소분류</th>
                                 <td>{productBoardDetail.lowerCode}</td>
                              </tr>
                              {/* {/* <tr>
                                 <th scope="row">상품 가격(옵션에 따라 달라질 예정)</th>
                                 {/* <td>{productList.productTaxprice}</td> */}
                              {/*</tr> */}

                              <tr>
                                 <th scope="row">배송비</th>
                                 <td>{productBoardDetail.productBoardDeliveryPrice}</td>
                              </tr>

                              <tr>
                                 <th scope="row"> 옵션1 선택</th> &nbsp; &nbsp;
                                   < select name="option1" onChange={this._option1Change}>
                                    <option value='defaultValue' selected="selected">옵션을 선택하세요</option>
                                    {this._option1Check(productList).map((productList) => (
                                       <option value={productList.productOption1} >
                                          {productList.productOption1}</option>
                                    ))}
                                 </select>
                              </tr>

                              <tr>
                                 <th scope="row"> 옵션2 선택</th> &nbsp;&nbsp;
                                 < select name="option2" onChange={this._option2Change}>
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

                     <div className="col-md-6 col-sm-6">
                        <table className="tg">
                           <tbody>
                              <tr>
                                 <th scope="row">개수</th>
                                 <td className="tdset">  
                                 <input type="number" min="1" max="100" 
                                    value={this.state.quantity}
                                    step="1" onChange={this._quantityChange}></input></td>
                              </tr>
                              <tr>
                                 <th scope="row">가격</th>
                                 <td><strong> 
                                 {/* {(this.state.tmpOption1 !==null && this.state.tmpOption2 !==null)? */}
                                    {this.state.totalPrice} 
                                    {/* : 0} */}
                                 </strong></td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                     <br/>
                     <div>
                     <div className="col-md-6" align="right">
                        <div className="col-lg-12" align="right">
                           <button><a href="#" className="btn-buy">구매</a></button>
                           <a href="/cart" className="btn-cart">장바구니</a>
                           <button type="submit" class="btn-cart2">카트담기</button>
                        </div>
                     </div>
                     </div>
                  </form>
               </div>
               <table className="tg">
                  <tr height="100px">
                  </tr>
               </table>
            </div>
            <ProductView productDetail={productBoardDetail}/>
            <div>

            </div>
               <ListReview productBoardNum={productBoardDetail.productBoardNum}/>
               <br/><br/><br/><br/>
               <QnABoard productBoardNum={productBoardDetail.productBoardNum} />
             
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
      productBoardDetail,
   };
}


const mapDispatchToProps = dispatch => ({
   addCart: (cartModel) => dispatch(Actions.addCart(cartModel)),
   loadProductDetails: (productNum) => dispatch(Actions.loadProductDetails(productNum))
});



export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);