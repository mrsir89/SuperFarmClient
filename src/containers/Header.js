import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderCart from './Headercart'
import Menu from './Menu';
import  { Actions }  from '../actions/index';


class Header extends React.Component{

// ({ history, location, matcher, cartlist, getCategories}) 
//   console.log('cartList >>>>>',cartlist);
//   console.log('categories >>>>>',getCategories);
  constructor(props){
    super(props)
    const { category } = this.props
    this.state = {
      category : [],
      cartlist : [],
      search:''
    }
    this._searchChange = this._searchChange.bind(this)
  }

  componentDidMount(){
    
    const{ getCategories } = this.props;
      getCategories()
  }
  _searchChange(e){
    console.log(e.target.value)
    this.setState({
      search:e.target.value
    })
  }
  _submit(e){
    e.preventDefault()
    console.log('category search',e.target.name)
    const { search } = e.target.search.value
    console.log(search ,' target.name.value')
    console.log(this.state)
    const { history } = this.props
    console.log(history, '음 히스토리 확인')
    window.location.href='http://localhost:3000/productlist/search/'+this.state.search;
  }
  render(){
    //const{ category } = this.state
    const{ category } = this.props
    const{ cartlist } = this.props
    return (
      <div className="header">
        <div className="container">
          <a className="site-logo" href="/"><img src="../image/logo.png" alt="Metronic Shop UI" /></a>
          <a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars" /></a>
          {/* BEGIN CART */}
            <HeaderCart items={cartlist} />
          {/*END CART */}
          {/* BEGIN NAVIGATION */}
          <div className="header-navigation">
            <ul>
              
             {/* 여기에 map 형식으로 뿌려준다 menu에게 전달 한다.*/}
            {category.map((items,index) => <Menu {...items} key={index}/>)}
              <li><a href="/notice">공지사항</a></li>
              <li><a href="/faqboard">FAQ</a></li>
              {/* BEGIN TOP SEARCH */}
              <li className="menu-search">
                <span className="sep" />
                <i className="fa fa-search search-btn" />
                <div className="search-box">
                  <form onSubmit={e=>this._submit(e)}>
                    <div className="input-group">
                      <input type="text" placeholder="Search" name="search" className="form-control" 
                        value={this.state.search} onChange={this._searchChange} />
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
}


const mapStateToProps = (state) =>{
  
  const { cartlist } =  state.cart;
  const { category } = state.product;
  const { history } = state;

  return{
    cartlist,
    category,
    history

  }
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(Actions.getCategories())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
//export default withRouter(Header);
