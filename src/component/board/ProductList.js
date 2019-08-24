import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';
// import {ActionTypes} from '../../contants';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';


// 제품 전체 리스트 페이지 
class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productBoard: []
    }
  }

  componentDidMount() {
    const { loadProductList } = this.props;
    //loadProductList();
    const lowerId = this.props.match.params.id;

    console.log("lowerId >>>>>>>>>>>", lowerId);
    loadProductList('lower', lowerId);

  }

  _renderAllProducts = () => {
    const { productBoard } = this.props;
    var productItems = [];

    if (productBoard !== undefined && productBoard !== null) {
      productItems = productBoard.map(item => {
        return <Link to={`/product/${item.productBoardNum}`}>
          <ProductItem key={item.productBoardNum} item={item} />
        </Link>
      })
    }
    return productItems

  }// _renderAllproducts end

  render() {
    return (
      <div className="main">
        <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-9 col-sm-7">
            {this._renderAllProducts()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state;
  const { productBoard } = product;
  return {
    productBoard
  };
}


const mapDispatchToProps = (dispatch) => ({
  loadProductList: (type, id) => dispatch(Actions.loadProductList(type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
