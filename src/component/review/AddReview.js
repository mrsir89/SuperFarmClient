
import React from 'react';
import { connect } from 'react-redux';
import {Actions} from '../../actions/index';
// import { ActionTypes } from '../../contants';
import { withRouter } from 'react-router-dom';



// const addReviewAsync = (num,pnum,title,content,rating) => (addReview) => {
//    console.log('addReview',JSON.stringify({reviewBoardNum:num,reviewBoardTitle:title, reviewBoardContent:content,reviewBoardRating:rating}));
//    return fetch('http://localhost:8080/review/write',{
//        method : 'POST',
//        headers:
//            {'Accept' : 'application/json; charset:utf-8',
//            'Content-Type' : 'application/json; charset:utf-8'},
//        body : JSON.stringify({reviewBoardNum:num,reviewBoardTitle:title, reviewBoardContent:content,reviewBoardRating:rating})
//    }).then(
//        response => {
//         addReview((num,pnum,title,content,rating, response.status === 200));
//        },
//        error => {
//         addReview((num,pnum,title,content,rating,false));
//            console.log('error', error);
//        }
//    )
// }

// --------------------------------------------------------------------------------------

const AddReview = ({addReview}) => {
    let titleInput;
    let contentInput;
    let ratingInput;
    let numInput;
    let productInput;


    const onSubmit = (e) => {
        e.preventDefault(); 

        const num =numInput.value.trim();
        const pnum =productInput.value.trim();
        const title= titleInput.value.trim();
        const content=contentInput.value.trim();
        const rating= ratingInput.value.trim();

        

        addReview(num,pnum,title,content,rating);
          
          titleInput.value='';
          contentInput.value='';
          ratingInput.value='';
          numInput.value ='';
          productInput.value= '';
      }
      
      

      return (
              <div className="AddReview" >
                   
              <form onSubmit={e => onSubmit(e)}>

                 
                <div className="input-group"> 
                Review 작성
                <br />
             
                <input type="number"  ref={(element) => productInput = element}
                   className="form-control" placeholder="프로덕트넘을 입력하세요" />
                  <br />

                  <input type="number"  ref={(element) => numInput = element}
                   className="form-control" placeholder="보드넘을 입력하세요" />
                  <br />
        
        
                  <input type="text"  ref={(element) => titleInput = element}
                   className="form-control" placeholder="제목을 입력하세요" />
                  <br />
        
        
                <textarea    ref={(element) => contentInput = element}
                   className="form-control" placeholder="내용을 입력하세요" />
                   <br />
        
                  <input type="number"  ref={(element) => ratingInput = element}
                   className="form-control" placeholder="별점을 입력하세요" />
        
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-secondary">Add</button> 
                  </div>
                </div>
              </form>
              
              </div>
        );
}



const mapDispatchToProps = (dispatch) =>({
  addReview : (num,pnum,title,content,rating) => dispatch(Actions.addReview(num,pnum,title,content,rating))
  });

export default withRouter(connect(null, mapDispatchToProps)(AddReview));

// import React from 'react';
// import { Actions } from '../../actions/index';
// import { ActionTypes } from '../../contants';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';



// class AddReview extends React.Component {

//     constructor(props) {
//         super(props)
//         const { data } = this.props
//         this.state = {
//             reviewBoardNum: data.reviewBoardNum,
//             productBoardNum: data.productBoardNum,
//             reviewBoardTitle: data.reviewBoardTitle,
//             reviewBoardContent: data.reviewBoardContent,
//             reviewBoardRating: data.reviewBoardRating
//         }
//         this._onChangeInput = this._onChangeInput.bind(this);
//         this._onClickAction = this._onClickAction.bind(this);
//     }

//     componentWillMount() {
//     }
//     shouldComponentUpdate() {
//         return (this.state)
//     }
//     _onClickAction(e) {
//         e.preventDefault();
//         const addReviewBoard =this.state
//         console.log(this.props)
//         console.log('onSubmit ')
//         const{ addReviewBoard }=this.props
//         addReview(addReviewBoard);
//         window.close()
        
//     }
//     _onChangeInput(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         console.log(target.name, ' name')
//         console.log(value)
//         this.setState({
//             [name]: value
//         });
//         console.log(this.state, 'this state')
//     }
//     componentDidMount() {
//         console.log('componentDidMount')
//     }

//     render() {
      
//       return (
//               <div className="AddReview" >
                   
//               <form onSubmit={e => onSubmit(e)}>

                 
//                 <div className="input-group"> 
//                 Review 작성
//                 <br />
             
//                 <input type="number"  ref={(element) => productInput = element}
//                    className="form-control" placeholder="프로덕트넘을 입력하세요" />
//                   <br />

//                   <input type="number"  ref={(element) => numInput = element}
//                    className="form-control" placeholder="보드넘을 입력하세요" />
//                   <br />
        
        
//                   <input type="text"  ref={(element) => titleInput = element}
//                    className="form-control" placeholder="제목을 입력하세요" />
//                   <br />
        
        
//                 <textarea    ref={(element) => contentInput = element}
//                    className="form-control" placeholder="내용을 입력하세요" />
//                    <br />
        
//                   <input type="number"  ref={(element) => ratingInput = element}
//                    className="form-control" placeholder="별점을 입력하세요" />
        
//                   <div className="input-group-append">
//                     <button type="submit" className="btn btn-outline-secondary">Add</button> 
//                   </div>
//                 </div>
//               </form>
              
//               </div>
//         );
//     }

// }
// const mapStateToProps = (state) => {

  
//     const { qnaBoard } = state.product;
//     const { data } = qnaBoard;

//     console.log(data, ' <-------- data')
  
//     return {
//         data
//     };
// }
// const mapDispatchToProps = (dispatch) => ({
//     writeQnABoard: (writeQnA) => dispatch(Actions.addReview(writeQnA))
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReview));

// --------------------------------------------

// class QnABoardWrite extends React.Component {

//     constructor(props) {
//         super(props)
//         const { userDetails } = this.props;
//         const { data } = this.props
//         this.state = {
//             userId: userDetails.userId,
//             productBoardNum: data.boardNum,
//             questionBoardPassword: '',
//             questionBoardTitle: '',
//             questionBoardContent: ''

//         }
//         this._onChangeInput = this._onChangeInput.bind(this);
//         this._onClickAction = this._onClickAction.bind(this);
//     }

//     componentWillMount() {
//     }
//     shouldComponentUpdate() {
//         return (this.state)
//     }
//     _onClickAction(e) {
//         e.preventDefault();
//         const questionBoard =this.state
//         console.log(this.props)
//         console.log('onSubmit 실행 되어라')
//         const{ writeQnABoard }=this.props
//         writeQnABoard(questionBoard);
//         window.close()
        
//     }
//     _onChangeInput(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         console.log(target.name, ' name')
//         console.log(value)
//         this.setState({
//             [name]: value
//         });
//         console.log(this.state, 'this state')
//     }
//     componentDidMount() {
//         console.log('componentDidMount')
//     }



// const mapStateToProps = (state) => {

//     const { userDetails } = state.auth;
//     const { qnaBoard } = state.product;
//     const { data } = qnaBoard;


//     console.log(qnaBoard, ' qnaAnswerWrite Board  <--- MapStateToProps')
//     console.log(data, ' <-------- data')
//     console.log(data.boardNum, ' <------- boardNum')
//     console.log(userDetails, ' <----------- userDetails')
//     console.log(userDetails.userId, ' <----------- userId')
//     return {
//         data,
//         userDetails
//     };
// }
// const mapDispatchToProps = (dispatch) => ({
//     writeQnABoard: (writeQnA) => dispatch(Actions.writeQnABoard(writeQnA))
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QnABoardWrite));

