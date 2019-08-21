
import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../../actions/index';
// import { ActionTypes } from '../../contants';
import { withRouter } from 'react-router-dom';
import { ActionTypes } from '../../../contants';




class AddReview extends React.Component {

  constructor(props) {

    super(props)
    const { reviewBoard } = this.props;
    const { userDetails } = this.props;
    console.log(this.props, 'constructor AddReviewBoard')
    this.state = {
      productBoardNum: 5,
      customerId: userDetails.userId,
      reviewBoardTitle: '',
      reviewBoardContent: '',
      reviewBoardRating: 3,
      reviewFiles:[]
    }

    console.log(this.props, ' props 확인 넘어 오는 match 값도 확인')
    this._onChangeInput = this._onChangeInput.bind(this);
    this._onClickAction = this._onClickAction.bind(this);
    this._onChnagereviewBoardRating = this._onChnagereviewBoardRating.bind(this);
    this._onChangeFileUpload = this._onChangeFileUpload.bind(this);
  }

  _onClickAction=(e)=> {
    const { uploadFileReview }= this.props;
    const reviewBoard = {
      productBoardNum: this.state.productBoardNum,
      customerId: this.state.customerId,
      reviewBoardTitle: this.state.reviewBoardTitle,
      reviewBoardContent: this.state.reviewBoardContent,
      reviewBoardRating: this.state.reviewBoardRating
    }
    const { addReview } = this.props

    addReview(reviewBoard).then(response =>{
      if(response.type===ActionTypes.ADD_REVIEW_SUCCESS){
        console.log(response,' 성공하고 data')
        let reviewBoardNum = response.payload.data.reviewBoardNum;
        console.log('AddReview Response 확인 ',response)
        uploadFileReview(reviewBoardNum,this.state.reviewFiles)
      }else
      console.log('Add 실패 한다~!!')
    })
     //window.close()

  }
  _onChangeInput(event) {

    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(target.name, ' name')
    console.log(value)

    this.setState({
      [name]: value
    });

    console.log(this.state, 'this state')
  }
  _onChnagereviewBoardRating(event) {
    console.log('eventddddddddddd', event.target.value)
    let rating = event.target.value;
    if (rating > 5) {
      rating = 5
      alert(' 너무 큰수를 입력하여서 5로 초기화 됨니다.')
      this.setState({
        reviewBoardRating:rating
      })
    } else {
      this.setState({
        reviewBoardRating:rating
      })
    } 
  }
  _onChangeFileUpload(event){
    console.log(event.target)
    this.setState({
      reviewFiles:event.target.files[0]
    })
    console.log('onChagneFileUpload 실행',this.state.reviewFiles)
  }

  render() {
    console.log('render에서 props 찍어보기', this.props)
    return (
      
      <div className="container" role="main">
        <h2>Review 게시판</h2>
        <form onSubmit={this._onClickAction}>
          <div className="mb-3">
            <label >제목</label>
            <input type="text" className="form-control" name="reviewBoardTitle"
              onChange={this._onChangeInput} placeholder="제목을 입력해 주세요" />
          </div>

          <div className="mb-3">
            <label >작성자</label>
            <div>
              <img src ="http://localhost:8080/storage/files/0ed289c878d0d08a018e1602369e8adf4bc707206bcc40b95ee48fe37a70ea4d"/>
              <b>{this.state.customerId} </b>
            </div>
          </div>

          <div>
            <input type="number" min="1" max="5" name="reviewBoardRating" onChange={this._onChnagereviewBoardRating}
              className="form-control" placeholder="별점을 입력하세요" />
          </div>

          <div>
            <label >이미지 올리기</label>
          </div>
          <div>
            <input type="file" accept=".jpg, .jpeg, .png, .bmp" name="reviewBoardRating" 
               file={this.state.reviewFiles}onChange={this._onChangeFileUpload}/>
          </div>

          <div className="mb-3">
            <label >내용</label>
            <textarea className="form-control" rows="5" name="reviewBoardContent" id="content"
              onChange={this._onChangeInput} placeholder="내용을 입력해 주세요" ></textarea>
          </div>

          <div >
            <input type="button" className="btn btn-sm btn-primary"
              name="submit" value="저장" onClick={this._onClickAction} />
            <button type="reset" className="btn btn-sm btn-primary" >목록</button>
          </div>
        </form>
      </div>
    )
  }

}
const mapStateToProps = (state) => {

  const { userDetails } = state.auth;
  const { reviewBoard } = state.board;
  console.log(state, ' mapStateToProps')

  console.log(reviewBoard, ' <------------  ReviewBoard ')
  console.log(userDetails, ' <----------- userDetails')
  console.log(userDetails.userId, ' <----------- userId')

  return {
    userDetails,
    reviewBoard

  };
}


const mapDispatchToProps = (dispatch) => ({
  addReview: (reviewBoard) => dispatch(Actions.addReview(reviewBoard)),
  uploadFileReview:(uploadInfo,file) =>dispatch(Actions.uploadFileReview(uploadInfo,file))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReview));
