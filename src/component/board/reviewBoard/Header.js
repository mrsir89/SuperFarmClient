// import { NavLink } from 'react-router-dom';
// import React from 'react';import ListReview from './ListReview';
// import NaviBar from './NaviBar';
// import ModalForm from './ModalForm';

// class Header extends React.Component {
//     state = {
//       show: false
//     };
//     showModal = e => {
//       this.setState({
//         show: !this.state.show
//       });
//     };
//     render() {
      
//       return (
//         <div className="Header">
//             <NaviBar/> 
//           <h4>이용후기 게시판</h4>
//          <NavLink to="/review/all" activeClassName='activeNav'>ReviewDash</NavLink>&nbsp;&nbsp;&nbsp;
//           <button data-toggle="modal" data-target="#modalForm" onClick={e => {this.showModal(e);}}>
//             ADD REVIEW
//           </button>
  
//           <ModalForm onClose={this.showModal} show={this.state.show}></ModalForm>
//         </div>
//       );
//     }
//   }
  
//   export default Header;