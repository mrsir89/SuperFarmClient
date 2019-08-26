// import { NavLink } from 'react-router-dom';
// import React from 'react';import ListReview from './ListReview';
 import AddReview from './AddReview';



// function modalForm() {
//     return (
//         <div id="modalForm" className="modal fade" tabindex="-1" data-backdrop="static" 
//         role="dialog"aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered" style={{overflowY:"initial !important"}}>
//           <div class="modal-content" style={{width:"fit-content"}} >
//             <div className="modal-header">
//               {/* <Header icon="add to calendar" content="Modal Header" /> */}
//               <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//           </button>
//             </div>
//             <div className="modal-body" style={{overflowY:"auto",padding:"20px"}}>
//               <AddReview/>
//             </div>
//             <div className="modal-footer">
//             {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//             <button type="button" class="btn btn-primary">Save changes</button> */}
//             </div>  
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default modalForm; //원본
  

import React from "react";

export default class ModalForm extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modalForm">
        <div class="content"> <AddReview/></div>
        <div class="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}