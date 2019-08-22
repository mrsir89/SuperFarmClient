// import React from 'react';
// import { Link } from 'react-router-dom';
// // import './NaviBar.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Actions } from '../../actions/index';
// // import { StateLoader } from '../util';
// // upper, lower 카테고리 가져와서 보여줘야함. 


// class NaviBar extends React.Component {

//   // 2. 카테고리 불러오기 
//   componentDidMount() {
//     const { getCategories } = this.props;
//     getCategories();
//   }

//   _loadUpperCategory = () => {
//     const { category } = this.props;
//     var categoryArr = [];

//     if (category !== undefined && category !== null) {
//       categoryArr = category.map(item => {
//         return (
//           <li class="dropdown">
//             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               {item.upperTitle}
//             </a>

//             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              
//             </div>
//           </li>
//         )
//       })
//     }

//     return categoryArr;
//   }


//   _loadLowerCategory = () => {
//     const { category } = this.props;
//     var categoryArr = [];

//     if (category !== undefined && category !== null) {
//       categoryArr = category.map(item => {
//         return (
//            <a class="dropdown-item" href="#">Action</a>
//         )
//       })
//     }

//     return categoryArr;
//   }


//   render() {
//     console.log("category 불러왔니 ", this.props.category);
//     const { category } = this.props;
//     return (

//       <div className="container">
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             <div className="list-group list-group-horizontal-md" >
//               {/* <Product/> */}

//               <ul class="navbar">
//                 <li><Link className="active" to="/product">Home</Link></li>
//                 <li><Link to="/review/all">About</Link></li>

//                 {this._loadUpperCategory()}

//                 <li><Link to="/review/all">Notice</Link></li>
//                 <li><Link to="/review/all">Contact</Link></li>
//                 <li><Link to="/cart">장바구니</Link></li>
//                 <li><Link to="/mypage">마이페이지</Link></li>
//               </ul>


//               <br></br>
//               <br></br>
//               <p><strong>글자 수 테스트</strong></p>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { product } = state;
//   const { category } = product;
//   return {
//     category
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     getCategories: bindActionCreators(Actions.getCategories, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NaviBar);
