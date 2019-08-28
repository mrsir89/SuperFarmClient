import React from 'react'

function productlist(props) {
    return ( 
        <div className="main">
            <div className="row list-view-sorting clearfix">
                <div className="col-md-2 col-sm-2 list-view">
                    <a href="javascript:;"><i className="fa fa-th-large" /></a>
                    <a href="javascript:;"><i className="fa fa-th-list" /></a>
                </div>
                <div className="col-md-10 col-sm-10">
                    <div className="pull-right">
                        <label className="control-label">Show:</label>
                        <select className="form-control input-sm">
                            <option value="#?limit=24" selected="selected">24</option>
                            <option value="#?limit=25">25</option>
                            <option value="#?limit=50">50</option>
                            <option value="#?limit=75">75</option>
                            <option value="#?limit=100">100</option>
                        </select>
                    </div>
                    <div className="pull-right">
                        <label className="control-label">Sort&nbsp;By:</label>
                        <select className="form-control input-sm">
                            <option value="#?sort=p.sort_order&order=ASC" selected="selected">Default</option>
                            <option value="#?sort=pd.name&order=ASC">Name (A - Z)</option>
                            <option value="#?sort=pd.name&order=DESC">Name (Z - A)</option>
                            <option value="#?sort=p.price&order=ASC">Price (Low &gt; High)</option>
                            <option value="#?sort=p.price&order=DESC">Price (High &gt; Low)</option>
                            <option value="#?sort=rating&order=DESC">Rating (Highest)</option>
                            <option value="#?sort=rating&order=ASC">Rating (Lowest)</option>
                            <option value="#?sort=p.model&order=ASC">Model (A - Z)</option>
                            <option value="#?sort=p.model&order=DESC">Model (Z - A)</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* BEGIN PRODUCT LIST */}
            <div className="row product-list">
                {/* PRODUCT ITEM START */}
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="product-item">
                        <div className="pi-img-wrapper">
                            <img src="/assets/frontend/pages/img/products/model1.jpg" className="img-responsive" alt="Berry Lace Dress" />
                            <div>
                                <a href="/assets/frontend/pages/img/products/model1.jpg" className="btn btn-default fancybox-button">Zoom</a>
                                <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                            </div>
                        </div>
                        <h3><a href="shop-item.html">{props.item.productBoardTitle}</a></h3>
                        <div className="pi-price">{props.item.productPrice}</div>
                        <a href="javascript:;" className="btn btn-default add2cart">장바구니 담기</a>
                    </div>
                </div>
                {/* PRODUCT ITEM END */}
            </div>
            {/* END PRODUCT LIST */}
            {/* BEGIN PAGINATOR */}
            <div className="row">
                <div className="col-md-4 col-sm-4 items-info">Items 1 to 9 of 10 total</div>
                <div className="col-md-8 col-sm-8">
                    <ul className="pagination pull-right">
                        <li><a href="javascript:;">«</a></li>
                        <li><a href="javascript:;">1</a></li>
                        <li><span>2</span></li>
                        <li><a href="javascript:;">3</a></li>
                        <li><a href="javascript:;">4</a></li>
                        <li><a href="javascript:;">5</a></li>
                        <li><a href="javascript:;">»</a></li>
                    </ul>
                </div>
            </div>
            {/* END PAGINATOR */}
        </div>
    );
}

export default productlist;