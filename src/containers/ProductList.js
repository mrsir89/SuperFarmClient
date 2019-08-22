import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Actions } from '../actions';
import ProductItem from './ProductItem';
import { bindActionCreators } from 'redux';

class ProductList extends React.Component {

  constructor(props){
    super(props)
    this.state={
      productBoard:[]
    }
  }
  
  componentDidMount(){
    const { loadProductList } = this.props;
    const lowerId = this.props.match.params.id;
    loadProductList('lower', lowerId);
  }

  _renderAllProducts = () => {
    const { productBoard } = this.props;
    var productItems =[];

    if(productBoard!==undefined&& productBoard!==null){
      productItems = productBoard.map(item=>{
        return <ProductItem key={item.productBoardNum} item={item}/>
      })
    }
    return productItems
  }

  render() {
    return (
      <div>
        <div className="container" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-9 col-sm-7">
            {this._renderAllProducts()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { product } = state;
  const { productBoard } = product;
  return{
    productBoard
  };
}

const mapDispatchToProps = (dispatch) => ({
  loadProductList: (type,id) => dispatch(Actions.loadProductList(type,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
