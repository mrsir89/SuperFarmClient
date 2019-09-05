import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import './ProductList.css';
import { ActionTypes } from '../../contants';
import Carousel from '../../containers/Carousel';
import { reject } from 'q';
import { thisTypeAnnotation } from '@babel/types';


// 제품 전체 리스트 페이지 
class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productBoard: [],
      productBest: [],
      lowerId:props.match.params.id
    }
  }


  componentWillMount() {
    this._loadProductList();
   }

  //  shouldComponentUpdate(nextProps, nextState){
  //    const { productBoard } = this.props
  //    if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
  //     //  window.location.reload();
  //      return true
  //    }
  //  }

   _loadProductList=()=>{
    const { loadProductList } = this.props;
    const { loadBestProductList } = this.props;
    const lowerId = this.props.match.params.id;
    console.log("lowerId >>>>>>>>>>>", lowerId);
    loadProductList('lower', lowerId)
      .then(response => {
        if (response.type === ActionTypes.LOAD_PRODUCTLIST_SUCCESS) {
          console.log(response,'response1')
            this.setState({
              productBoard: response.payload.data
            })
            return loadBestProductList(lowerId)
        }
      }).then(response => {
        if (response.type === ActionTypes.LOAD_BESTPRODUCTLIST_SUCCESS) {
          console.log(response,'response2')
          this.setState({
            productBest: response.payload.data
          })
        }
      });
   }

 
  componentDidMount() {
    this._loadProductList();
    setTimeout(()=>{
      this.setState({
         isReadyComplete:true
      })
   },2000)
  }


  _renderSideBar = () => {
    const { category, productBoard } = this.props;
    if (productBoard !== null && productBoard !== undefined && productBoard.length != 0) {
      console.log("여기로 왔니", productBoard)
      const upper = productBoard[0].upperCode;
      const upperCategories = category[upper - 1];

      return (
        <dl className="product-sidebar">
          <dt className="sidebar-title">

            {upperCategories.upperTitle}
          </dt>
          <dd className="sidebar-menu">
            {/* productlist의 lower category,  
                    map  */}
            {upperCategories.lowerCategory.map(item => {
              return <a href={'http://localhost:3000/productlist/' + item.lowerCode}> {item.lowerTitle}</a>
            })}

          </dd>
        </dl>
      );
    } else {
      return (
        <dl className="product-sidebar">
          <dt className="sidebar-title">
            알 수 없음
          </dt>
          <dd className="sidebar-menu">
            알 수 없음
          </dd>
        </dl>
      )
    }

  }

  // _returnBestProduct = () => {
  //   const { productBoard } = this.props;
  //   console.log(productBoard, ' map 들어가기전')
  //   var bestProduct = []
  //   if (productBoard !== null && productBoard !== undefined) {
  //     bestProduct = productBoard.map(productBoard => {
  //       if (productBoard.productBoardBest > 0) {
  //         return productBoard;
  //       }
  //     })
  //   } else {
  //     return null
  //   }
  //   console.log('best 상품 보자', bestProduct)
  // }

  _renderAllProducts = () => {
    const { productBoard } = this.props;
    var productItems = [];
    console.log(productBoard, ' _renderAllProduct')
    if (productBoard !== undefined && productBoard !== null && productBoard.length != 0) {
      productItems = productBoard.map(item => {
        return <Link to={`/product/${item.productBoardNum}`}>
          <ProductItem key={item.productBoardNum} item={item} />
        </Link>
      })
    } else {
      return (
        <div>
          찾으시는 물품이 없습니다.
        </div>
        // 여기에 물품이 없을 경우 페이지 만들기 
        // 찾으시는 물품이 없습니다가 잘 나오게 


      )
    }
    return productItems

  }
  // _renderAllproducts end
  
  render() {
    const {  productBoard,mainBest,bestList } = this.props;
    // var bestList = this.state.productBest;
    // var productBoard = this.state.productBoard;
    
    // const upper =  productBoard[0].upperCode ;
    // const upperCategories = category[upper-1];
    
    return (
      <div className="product">
        <br/><br/><br/>

          <div className="main" >
            <div className="container margin-bottom-40">
              <div className="row margin-bottom-40 margin-top-70 " >
                <Carousel className={'col-md-12 col-sm-8'} carouselName={'owl-carousel owl-carousel3 margin-top-70'}
                  srbtitle={'SUPER FARM'} title={'BEST PRODUCT'} items={bestList} />
              </div>
            </div>
          </div>
        // {/* Sidebar */}
        <div className="product-bot">

          <div className="product-bot-left">
            {this._renderSideBar()}
          </div>

          <div className="product-bot-right">
            {/* 필터 */}
            <div className="product-total">
              <div className="product-total-bar">
                <span className="total-item">현재 </span>
                카테고리 내
                <span className="total-count"> {productBoard.length}</span>개의 상품이 있습니다.
              </div>
              <div className="product-filter">
                필터
              </div>
            </div>
            {/* 상품 리스트 */}
            <ul className="product-best product-bot-list">
              {this._renderAllProducts()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state;
  const { productBoard, category,bestList,mainBest } = product;
  return {
    productBoard,
    category,
    mainBest,
    bestList
  };
}


const mapDispatchToProps = (dispatch) => ({
  loadProductList: (type, id) => dispatch(Actions.loadProductList(type, id)),
  loadBestProductList: (num) => dispatch(Actions.loadBestProductList(num))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);