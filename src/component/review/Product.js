import React, {Component} from 'react';
import ProductInfo from './ProductInfo';

class Product extends Component {
    state = {
        keyword: '',
        productData : [{
            productname: '감나무',
            productCode: '1'
        },{
            productname: '감귤',
            productCode: '2'
        },{
            productname: '한라봉초콜렛',
            productCode: '3'
        },{
            productname: '인삼',
            productCode: '4'
        },]
    }

    _searchProduct = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (product) =>{
                    return product.productname.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) >-1;
                }
            );
            return data.map(
                (product, i) => {
                    return (<ProductInfo product = {product} key ={i}/>);
                }
            
            );

        } 
        return (
            <div> 
                <h1>product</h1>
                <input productname ="keyword"
                placeholder="search"
                value={this.state.keyword}
                onChange={this._searchProduct}
                />
                <div>{mapToComponents(this.state.productData)}</div>
            </div> 
        )
    }
}

export default Product;