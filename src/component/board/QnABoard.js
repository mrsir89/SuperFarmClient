import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { qnaboardWrite} from './QnABoardWrite';
import NewWindow from 'react-new-window';

// const qnaboardList = (productNum,size,page) => dispatch => {
//   return dispatch(Actions.getQnABoard())
//     .then(response => {
//       if (response.type === ActionTypes.QNABOARD_SUCCESS) {
//         console.log(' QnABoard Reading 성공')
//       } else {
//         return Promise.reject(response);
//       }
//     });
// };

// 추가 라이브러리 npm i react-new-window --save <--- 윈도우 새창 띄우기숌

// const writeQnABoard = (qnaContent) => dispatch => {
//   return dispatch(Actions.writeQnABoard())
//     .then(response => {
//       if (response.type === ActionTypes.QNABOARD_SUCCESS) {
//         console.log('QnA READ SUCCESS')
//         return dispatch(Actions.getQnABoard())
//       } else {
//         return Promise.reject(response);
//       }
//     });
// };

// const writeQnABoard=()={
//   return (

//   )
// }


class QnABoard extends React.Component {

  constructor(props) {
    super(props)
    const { auth } = this.props;
    this.state = {
      answerContent:'',
      userDetails : auth.userDetails
    }
    // this.handleClick=this.handleClick.bind(this);
    this._answerContentChange=this._answerContentChange.bind(this);
    this._answerWrite=this._answerWrite.bind(this);
    console.log('여기 실행 되나?', this.state)
  }
  _loadList = (productNum, size, page) => {
    const { loadqnaboardList } = this.props;
    loadqnaboardList(productNum, size, page);
  }
  componentWillMount() {
    const { board } = this.props;
    const { qnaBoard } = board
    console.log(this.state, ' <<<<< willMount State')
    console.log( this.props, 'this.props !!!!!!!!!!!!!!')
    console.log(board,'<-------- Board')
    let productNum = 5
    let size
    let page
    console.log(qnaBoard.size, ' qnaBoardList item Size')
    if (qnaBoard === null || qnaBoard ===undefined) {
      size = 10
      page = 1
    } else if (qnaBoard.legnth === 0) {
      page = 1
    } else {
      size = qnaBoard.size
      page = qnaBoard.page
      console.log('WillMount size : ', size, '  WillMount page : ', page)
    }

    this._loadList(productNum, size, page);
  }

  _onClickPopUp=()=> {
  var wind = window.open(`qnaboardWrite/${1}`, 'QnA작성', 'width=430,height=500,location=no,status=no,scrollbars=yes');

  }
  _nextPage = () => {
    const { board } = this.props;
    const { qnaBoard } = board;
    console.log(board,'nextPage  Board~~!')
    console.log(qnaBoard, '  nextpage');

    let hasNextPage = qnaBoard.hasNext;
    console.log(hasNextPage, ' hasNextPage');
    
    var page = qnaBoard.page
    var size = qnaBoard.size
    let productBoardNum = qnaBoard.boardNum;
    console.log(page, ' next 누를대 page 확인 ');

    if (hasNextPage === true) {
      page = page + 1;
      console.log(page, ' 실제 클릭 했을 경우 값 ');
      this._loadList(productBoardNum, size, page)
    }

  }
  _prevPage = () => {
    const { board } = this.props;
    const { qnaBoard } = board
    console.log(this.props, '  prev Page')
    var page = qnaBoard.page
    console.log(page, ' preve 의  클릭 전 page 확인')
    var size = qnaBoard.size
    let productBoardNum = qnaBoard.boardNum;
    if (page !== 1) {
      page = page - 1;
      console.log(page, ' preve 클릭후 확인 ')
      this._loadList(productBoardNum, size, page)
    }
  }
  _editQnABoard(e) {
    const questionBoardNum = e.target.name;
    console.log(questionBoardNum)
  }
  _deleteQnABoard = (e)=> {
    const {deleteQnABoard } =this.props;
    console.log(e.target)
    var questionBoardNum = e.target.name;
    console.log(questionBoardNum, ' target.name ')
    this._idCheck();
    const { items } = this.props.board.qnaBoard
    console.log('board',items)
    console.log('questionBoardNum',questionBoardNum)
    const qnaboard = items.filter(items => items.questionBoardNum == questionBoardNum)
    console.log(qnaboard, ' delete 선택된 qnaBoard')
    console.log(qnaboard[0])
    const tmp = qnaboard[0];
    deleteQnABoard(tmp);

  }
  _idCheck(){
    const{ auth } = this.props;
    const{ userDetails } = auth;
    let userId = userDetails.userId; 
    console.log(userId,' 본인 확인 ')
  }
  _answerWrite(e){
    const {writeAnswer } = this.props;
    console.log(e)
    console.log(this.state)
    console.log(e.target.name)

    var questionAnswer={
      answerContent:this.state.answerContent,
      questionBoardNum:e.target.name,
      answerWriter: this.state.userDetails.userId
    }

    writeAnswer(questionAnswer);
  }
  _answerContentChange(e){
    this.setState({
      ...this.state,
      answerContent:e.target.value
    })
    console.log(this.state.answerContent,' this.state.answerContent')
  }

  render() {
    console.log(this.props, '<----- props!@!@!@')
    const { board } = this.props;
    const {qnaBoard} = board;
    const { items } = qnaBoard;
    console.log(qnaBoard,' props.board.qnaBoard <--------->')
    console.log(items, ' <------- 현재 상태  ')
    return (
      <div>
        <div className="row">
          <div className="col">답변상태</div>
          <div className="col-7">제목</div>
          <div className="col-1">작성자</div>
          <div className="col-2">작성일</div>
        </div>
        {items.map((item) => (
          <div>
            <div className="row">
              <div className="col">{item.questionBoardStatus}</div>
              <div className="col-7">
                <details>
                  <summary>{item.questionBoardTitle}</summary>
                  <div>
                    {item.questionBoardContent}
                  </div>
                  <div>
                    <div>
                    <input type="button" name={item.questionBoardNum} value="수정" onClick={this._editQnABoard} />
                    <input type="button" name={item.questionBoardNum} value="삭제" onClick={this._deleteQnABoard} />
                    </div>
                  </div>
                  {item.questionAnswer.map((answer) => (
                    <div className="row" hidden={item.isExpanded}>
                      <div className="col-2">{answer.answerWriter}</div>
                      <div className="col-10">{answer.answerContent}
                      <input type="button" name={answer.answerNum} value="삭제"/>
                      </div>
                      <div>
                      </div>
                    </div>
                  ))}
                    <textarea row="10" name="answerContent" vlaue={this.state.answerContent}
                    onChange={this._answerContentChange}/>
                    <input type="button" name ={item.questionBoardNum} value="작성"
                    onClick ={this._answerWrite}/>
                </details>
              </div>
              <div>

              </div>
              <div className="col-1">{item.userId}</div>
              <div className="col-2">{item.questionBoardRegdate}</div>
            </div>
          </div>
        ))}
        <div>
          <input type="button" value="이전" onClick={this._prevPage} />
          <input type="button" value="다음" onClick={this._nextPage} />
          <input type="button" value="작성" onClick={this._onClickPopUp} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state,'  mapStateToProps 시작')
  const { product } = state;
  const { board } = state;
  const { qnaBoard } = board;
  const { auth } = state;
  console.log(board, '<--------- board')
  console.log(qnaBoard, '<--------- qnaBoard')
  console.log(product, ' <--------- product')
  return {
    board,
    product,
    auth
  };
}


const mapDispatchToProps = (dispatch) => ({
  loadqnaboardList: (productNum, size, page) => dispatch(Actions.loadqnaboardList(productNum, size, page)),
  deleteQnABoard:(questionBoard) => dispatch(Actions.deleteQnABoard(questionBoard)),
  writeAnswer:(questionAnswer) => dispatch(Actions.writeAnswer(questionAnswer))
});


export default connect(mapStateToProps, mapDispatchToProps)(QnABoard);