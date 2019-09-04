import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../../actions/index';
// import { ActionTypes } from '../../contants';
import { withRouter } from 'react-router-dom';
import { ActionTypes } from '../../../contants';
import '../WriteCss.css';



class AddReview extends React.Component {

  constructor(props) {

    super(props)
    const { reviewBoard } = this.props;
    const { userDetails } = this.props;
    console.log(this.props, 'constructor AddReviewBoard')
    this.state = {
      productBoardNum: this.props.match.params.boardNum,
      customerId: userDetails.userId,
      reviewBoardTitle: '',
      reviewBoardContent: '',
      reviewBoardRating: 3,
      reviewFiles: []
    }

    console.log(this.props, ' props 확인 넘어 오는 match 값도 확인')
    this._onChangeInput = this._onChangeInput.bind(this);
    this._onClickAction = this._onClickAction.bind(this);
    // this._onChnagereviewBoardRating = this._onChnagereviewBoardRating.bind(this);
    this._onChangeFileUpload = this._onChangeFileUpload.bind(this);
    this._starChangee = this._starChangee.bind(this);
  }

  _onClickAction = (e) => {
    e.preventDefault()
    const { uploadFileReview } = this.props;
    const reviewBoard = {
      productBoardNum: this.state.productBoardNum,
      customerId: this.state.customerId,
      reviewBoardTitle: this.state.reviewBoardTitle,
      reviewBoardContent: this.state.reviewBoardContent,
      reviewBoardRating: this.state.reviewBoardRating
    }
    const { addReview } = this.props

    addReview(reviewBoard).then(response => {
      if (response.type === ActionTypes.ADD_REVIEW_SUCCESS) {
        console.log(response, ' 성공하고 data')
        let reviewBoardNum = response.payload.data.reviewBoardNum;
        console.log('AddReview Response 확인 ', response)
        uploadFileReview(reviewBoardNum, this.state.reviewFiles[0]).then(response => {
          if (response.type === ActionTypes.UPLOADFILEREVIEW_SUCCESS) {
            console.log(response.type)
            window.opener.location.reload()
            window.close()
          }
        })
      } else
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
  // _onChnagereviewBoardRating(event) {
  //   console.log('eventddddddddddd', event.target.value)
  //   let rating = event.target.value;
  //   if (rating > 5) {
  //     rating = 5
  //     alert(' 너무 큰수를 입력하여서 5로 초기화 됨니다.')
  //     this.setState({
  //       reviewBoardRating:rating
  //     })
  //   } else {
  //     this.setState({
  //       reviewBoardRating:rating
  //     })
  //   } 
  // }
  _onChangeFileUpload(event) {
    console.log(event.target)
      this.setState({
        reviewFiles: event.target.files
      })
    
    console.log('onChagneFileUpload 실행', this.state.reviewFiles)
  }
  _starChangee(event) {
    let value = event.target.value;
    console.log(value, '   여기도 확인 해 봅시다.')

    this.setState({
      reviewBoardRating: value
    })

  }
  render() {
    console.log('render에서 props 찍어보기', this.props)
    return (

      <div id="form-main">

        <div id="form-div">
          <h3><strong>이용후기</strong> </h3>
          <br></br>
          <form className="form" id="form1">
            <p className="title">
              <label><h4><strong>제목</strong> </h4></label>
              <input name="reviewBoardTitle" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="title"
                placeholder="제목을 입력해 주세요" onChange={this._onChangeInput} />
            </p>
            <p className="name">
              <label><h4><strong>작성자</strong> </h4></label>
              <input className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" value={this.state.customerId} id="name" />
            </p>
            <p className="star">
              <label><h4><strong>별점 입력</strong> </h4></label>
              <br></br>
              <select className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                name="reviewBoardRating" onChange={this._starChangee} id="star">
                <option value="default" selected="selected">
                  별점 선택 </option>
                <option value='1' >1</option>
                <option value='2' >2</option>
                <option value='3' >3</option>
                <option value='4' >4</option>
                <option value='5' >5</option>
              </select>
            </p>

            <p className="photo">
              <label><h4><strong>이미지 올리기</strong> </h4></label>
              <input type="file" accept=".jpg,.jpeg,.png,.bmp" name="reviewFiles"
                file={this.state.reviewFiles} onChange={this._onChangeFileUpload}
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" id="photo" />
            </p>

            <p className="text">
              <label><h4><strong>후기</strong> </h4></label>
              <textarea name="reviewBoardContent" className="validate[required,length[6,300]] feedback-input" id="comment"
                onChange={this._onChangeInput} placeholder="내용을 입력해 주세요" ></textarea>
            </p>


            <div className="submit">
              <input type="submit" value="저장" id="button-blue"
                name="submit" onClick={this._onClickAction} />
              <div className="ease"></div>
            </div>
          </form>
        </div>
      </div>

    )
  }

}
const mapStateToProps = (state) => {

  const { userDetails } = state.auth;
  const { reviewBoard } = state.board;
  console.log(state, ' mapStateToProps')

  return {
    userDetails,
    reviewBoard

  };
}


const mapDispatchToProps = (dispatch) => ({
  addReview: (reviewBoard) => dispatch(Actions.addReview(reviewBoard)),
  uploadFileReview: (uploadInfo, file) => dispatch(Actions.uploadFileReview(uploadInfo, file)),
  asynAction:() => dispatch(Actions.asynAction())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddReview));
