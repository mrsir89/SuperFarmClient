import React, { Component } from 'react';
 
export default class ProductInfo extends Component {
    render() {
        return (
            <div>{this.props.product.productname}</div>
        );
    }
}
