import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import './ProductList.css';


// 제품 전체 리스트 페이지 
class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productBoard: [],
      
    }
  }


  componentWillMount() {
    const { loadProductList } = this.props;
    //loadProductList();
    const lowerId = this.props.match.params.id;
    console.log("lowerId >>>>>>>>>>>", lowerId);
    loadProductList('lower', lowerId);

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

  }// _renderAllproducts end

  render() {
    const {category, productBoard}= this.props;

    // const upper =  productBoard[0].upperCode ;
    // const upperCategories = category[upper-1];


    return (
      <div className="product">

        {/* best 상품 */}
        <div className="product-top">
          <ul className="product-best">


            <li className="product-best-item">
              <a href="#none">
                <div className="product-best-item--rank">
                  best1
                </div>
                <div className="product-best-item--thumb">
                  <img src="https://placeimg.com/280/280/nature/sepia" />
                </div>
                <div className="product-best-item--info">
                  <div className="product-best-item--icon">
                    <p className="icon">아이콘</p>
                  </div>
                  <div className="product-best-item--title">
                    내용입력
                  </div>
                  <div className="product-best-item--price">
                    <span className="price">30,000</span> 원
                  </div>
                </div>
              </a>
            </li>


          </ul>
        </div>


        {/* Sidebar */}
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
      // <div className="main">
      //   <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
      //     <div className="col-md-9 col-sm-7">
      //       {this._renderAllProducts()}
      //     </div>
      //   </div>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state;
  const { productBoard, category } = product;
  return {
    productBoard,
    category
  };
}


const mapDispatchToProps = (dispatch) => ({
  loadProductList: (type, id) => dispatch(Actions.loadProductList(type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);