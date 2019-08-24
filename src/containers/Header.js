import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderCart from './HeaderCart'
import Menu from './Menu';
import { Actions } from '../../actions/index';

function Header({ history, location, matcher, cartlist, getCategories}) {
  console.log(cartlist);


  if(window.location.href !== "http://localhost:3000/review/write"){
    return (
      <div className="header">
        {_loadCategories}
        <div className="container">
          <a className="site-logo" href="/"><img src="/images/logo.jpg" alt="Metronic Shop UI" /></a>
          <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
          {/* BEGIN CART */}
            <HeaderCart items={cartlist} />
          {/*END CART */}
          {/* BEGIN NAVIGATION */}
          <div className="header-navigation">
            <ul>
              
             
            {/* {categoryItems.categoryItems.map((items,index) => <Menu {...items} key={index}/>)} */}
  
              {/* BEGIN TOP SEARCH */}
              <li className="menu-search">
                <span className="sep" />
                <i className="fa fa-search search-btn" />
                <div className="search-box">
                  <form action="#">
                    <div className="input-group">
                      <input type="text" placeholder="Search" className="form-control" />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Search</button>
                      </span>
                    </div>
                  </form>
                </div>
              </li>
              {/* END TOP SEARCH */}
            </ul>
          </div>
          {/* END NAVIGATION */}
        </div>
      </div>
    );
  } 
  else {
    return (
    <div></div>
    )
  }
 
}

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(Actions.getCategories())
});
const mapStateToProps = state => ({
  cartlist: state.cart.cartlist,
  
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
//export default withRouter(Header);