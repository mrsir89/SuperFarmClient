import React from 'react';
import { connect } from 'react-redux';
import Accordion from "./Accordion";
import { bindActionCreators } from 'redux';
import { Actions} from '../../actions/index';


// export const  removeReview  =(reviewBoardNum) =>  (dispatch) => {
//   return fetch(`http://localhost:8080/review/delete/${reviewBoardNum}`, {method: 'DELETE'})
//   .then(response => dispatch(removeReview(reviewBoardNum))
//   )
// };
 

 class RemoveReview extends React.Component {
 constructor(props){
     super(props);
     this.state = {
      reviewBoards: []
     }
   }

   componentDidMount() {
     const {removeReview} = this.props;
     removeReview();
     console.log("this.props>>>>>>>>>>>>>>>>>>>", this.props)
   }

    
  //  removeReviewHandler()  {
  //   const {removeReview} = this.props; 
  //   removeReview();
  //   console.log("this.props>>>>>>>>remove", this.props)
  //  }

     _renderRemoveReview = () => {
        const {items} = this.props; 
        console.log ("reviewlist>>>> ", items)
        var reviewItems =[];

        if(items !== undefined && items !== null){
           reviewItems = items.map (review => 
          <Accordion key = {review.reviewBoardNum} review ={review}/> 
        )
      }
       return reviewItems 
    }


     render() {
       console.log("this.props!=>>", this.props)
        return (
             <div className="remove">
             {this._renderRemoveReview()} 
             </div>   
        );
      }
    
    
     }
    
     function mapStateToProps (state){
       const {reviews} = state;
       const {reviewBoards} = reviews
       const {items} = reviewBoards;
    

       return {
        items
       
       };
     }
    
     function mapDispatchToProps (dispatch) {
       return {
         getReviews: bindActionCreators(Actions.getReviews, dispatch),
         removeReview: bindActionCreators(Actions.removeReview,dispatch)
     
       
       }
     }
       export default connect(mapStateToProps ,mapDispatchToProps)(RemoveReview);
    
 