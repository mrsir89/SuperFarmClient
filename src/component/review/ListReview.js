 import React from 'react';
 import { connect } from 'react-redux';
import Accordion from "./Accordion";
import { bindActionCreators } from 'redux';
 import { Actions} from '../../actions/index';

 

 export const  _removeReviewAsync  =(num) =>  (removeReview) => {
  return fetch(`http://localhost:8080/review/${num}`, {method: 'DELETE'})
  .then(response => removeReview((num))
  )
};
 

 class ListReview extends React.Component {
 constructor(props){
     super(props);
     this.state = {
      reviewBoards: []
     }
   }

  

   componentDidMount() {
     const {getReviews} = this.props;
     getReviews();
     console.log("this.props>>>>>>>>>>>>>>>>>>>", this.props)
   }

    

     _renderAllReviews = () => {
        const {items} = this.props; 
        console.log ("reviewlist>>>> ", items)
        var reviewItems =[];

        if(items !== undefined && items !== null){
           reviewItems = items.map (review => 
          <Accordion key = {review.reviewBoardNum} review ={review}/> 
        )
           }
       
      // const reviewItems = this.props.map (review => 
         
       //)
       return reviewItems 
     }
     
    

     
//  
     render() {
       console.log("this.props!=>>", this.props)
        return (
             <div className="content">
             {this._renderAllReviews()} 
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
       export default connect(mapStateToProps ,mapDispatchToProps)(ListReview);
    
 