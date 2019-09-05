import React from 'react';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';


// 제품 전체 리스트 페이지 
class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productBoard: []
    }
  }

  componentWillMount() {
    const { loadProductList } = this.props;
    //loadProductList();
    const lowerId = this.props.match.params.id;
    console.log("lowerId >>>>>>>>>>>", lowerId);
    setTimeout( ()=>{
      loadProductList('lower', lowerId).then(response=>{
        if(response !== null && response !== undefined){
          this.setState({
            productBoard:response.payload.data
          })
        }
      });
    },3000)

  }
  componentDidMount() {
    const { loadProductList } = this.props;
    //loadProductList();
    const lowerId = this.props.match.params.id;

    console.log("lowerId >>>>>>>>>>>", lowerId);
    await loadProductList('lower', lowerId);

  }

  _renderAllProducts = () => {
    const { productBoard } = this.props;
    var productItems = [];
    console.log(productBoard, ' _renderAllProduct')
    if (productBoard !== undefined && productBoard !== null
      && productBoard.length !== 0) {
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