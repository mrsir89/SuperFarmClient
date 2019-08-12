import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';
// import {ActionTypes} from '../../contants';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';


// 제품 전체 리스트 페이지 
class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const { loadProductList } = this.props;
    loadProductList();
  }

  _renderAllProducts = () => {
    const { items } = this.props;
    var productItems = [];

    if (items !== undefined && items !== null) {
      productItems = items.map(item => {
        return <Link to={`/product/${item.productBoardNum}`}>
          <ProductItem key={item.productBoardNum} item={item} />
        </Link>
      })
    }
    return productItems

  }// _renderAllproducts end

  render() {
    return (
      <div>
        {this._renderAllProducts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state;
  const { items } = product;
  return {
    items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProductList: bindActionCreators(Actions.loadProductList, dispatch)
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   loadProductList: () => dispatch(Actions.loadProductList())
// });

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
