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
class ProductDetail extends React.Component {
   constructor(props) {    // props 굳이 안써줘도 넘어 옴
      super(props)
      const { items } = this.props;
      this.state = {
         productId: this.props.match.params.id,
         products: items
      };
   }

   _renderProduct = () => {
      const { productId, products } = this.state;
      console.log("this.state >>>>>", this.state);
      console.log("this.props >>>>>", this.props);

      var newProducts = [];
      if (products !== undefined && products !== null) {
         newProducts = this.state.products.filter((item) => (item.productBoardNum == productId));
      }
      console.log("newProduct >>>>", newProducts)
      return newProducts[0];
   }



   render() {
      const product = this._renderProduct();
      console.log("product >>>> ", product);
      const { addCart } = this.props
      return (
         <div className="product-item">
            <div className="prod-info">
               <div className="prd-info">
                  <div class="prd-table">
                     <table summary="">
                        <caption>상품정보 목록</caption>
                        <tbody>
                           <tr>
                              <th scope="row">상품 코드</th>
                              <td>{product.productBoardNum}</td>
                           </tr>
                           <tr>
                              <th scope="row">상품 이름</th>
                              <td>{product.productBoardTitle}</td>
                           </tr>
                           <tr>
                              <th scope="row">상품 소분류</th>
                              <td>{product.lowerCode}</td>
                           </tr>
                           <tr>
                              <th scope="row">상품 가격</th>
                              <td>{product.productBoardDeliveryPrice}</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <form>
                  <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="exampleFormControlSelect1">옵션1 선택</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                           <option>{product.product.productOption1}</option>
                           <option>없음</option>
                        </select>
                     </div>
                     <div class="form-group col-md-6">
                        <label for="exampleFormControlSelect1">옵션2 선택</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                           <option>{product.product.productOption2}</option>
                           <option>없음</option>
                        </select>
                     </div>
                  </div>
                  </form>
                  <div className="btn-prd">
                     <p><a href="#" className="btn-buy">구매</a></p>
                     <a href="/cart" className="btn-buy">
                        <p>장바구니로 이동(링크)</p>
                     </a>
                     <button className="btn-cart" onClick={e => addCart(product)}>장바구니에 추가</button>
                  </div>
               </div>
            </div>
            <ProductView />
         </div>
      );
   }
}


// store에서 state를 복사해서 컨테이너의 props에 붙여넣기 
function mapStateToProps(state) {
   const { product } = state;
   const { items } = product
   return {
      items
   };
}


const mapDispatchToProps = dispatch => ({
   addCart: (product) => dispatch(Actions.addCart(product))
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

