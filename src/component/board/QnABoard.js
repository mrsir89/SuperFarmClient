import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { qnaboardWrite } from './QnABoardWrite';
import NewWindow from 'react-new-window';
import { ActionTypes } from '../../contants';



class QnABoard extends React.Component {

  constructor(props) {
    super(props)
    const { auth } = this.props;
    this.state = {
      answerContent: '',
      userDetails: auth.userDetails
    }
    // this.handleClick=this.handleClick.bind(this);
    this._answerContentChange = this._answerContentChange.bind(this);
    this._answerWrite = this._answerWrite.bind(this);
    console.log('여기 실행 되나?', this.state)
  }

  // QnABoard 목록 불러오기
  _loadList = (productNum, size, page) => {
    const { loadqnaboardList } = this.props;
    loadqnaboardList(productNum, size, page);
  }

  //초기에 실행
  componentWillMount() {
    const { board } = this.props;
    const { qnaBoard } = board
    console.log(this.state, ' <<<<< willMount State')
    console.log(this.props, 'this.props !!!!!!!!!!!!!!')
    console.log(board, '<-------- Board')
    let productNum = 5
    let size
    let page
    console.log(qnaBoard.size, ' qnaBoardList item Size')
    if (qnaBoard === null || qnaBoard === undefined) {
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

  // 작성 페이지 팝업으로 뜨게 하기
  _onClickPopUp = () => {
    let writeInfo = 1;
    window.open(`qnaboardWrite/1`, 'QnA작성', 'width=430,height=500,location=no,status=no,scrollbars=yes');

  }
  _onClickInsertPopUp = () =>{

  }



  // 다음페이지 버튼
  _nextPage = () => {
    const { board } = this.props;
    const { qnaBoard } = board;
    console.log(board, 'nextPage  Board~~!')
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

  //이전 페이지 버튼
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
    }else if( page==1 ){
      alert(' 첫 페이지 입니다. ')
    }
  }

  //QnABoard 수정 하기
  _editQnABoard(e) {
    const questionBoardNum = e.target.name;
    console.log(questionBoardNum)
  }

  //QnABoard 삭제하기
  _deleteQnABoard = (e) => {
    e.preventDefault();
    const { deleteQnABoard } = this.props;
    console.log(e.target)
    var questionBoardNum = e.target.name;
    console.log(questionBoardNum, ' target.name ')
    this._idCheck();
    const { items } = this.props.board.qnaBoard
    console.log('board', items)
    console.log('questionBoardNum', questionBoardNum)
    const qnaboard = items.filter(items => items.questionBoardNum == questionBoardNum)
    console.log(qnaboard, ' delete 선택된 qnaBoard')
    console.log(qnaboard[0])
    const tmp = qnaboard[0];
    if (this._idCheck(tmp.userId)) {
      deleteQnABoard(tmp);
      alert(' 삭제 되었습니다. ')
    } else {
      alert(' 작성자가 아닙니다.')
    }
  }

  //작성자랑 현재 로그인 아이디랑 체크
  _idCheck(writeId) {
    const { auth } = this.props;
    const { userDetails } = auth;
    let userId = userDetails.userId;
    console.log(userId, ' 본인 확인 ')
    if (userId === writeId) {
      return true;
    } else {
      return false;
    }
  }

  //댓글 작성
  _answerWrite(e) {
    const { writeAnswer } = this.props;
    console.log(e)
    console.log(this.state)
    console.log(e.target.name)

    var questionAnswer = {
      answerContent: this.state.answerContent,
      questionBoardNum: e.target.name,
      answerWriter: this.state.userDetails.userId
    }
    writeAnswer(questionAnswer);
  }

  // 댓글 삭제
  _answerDelete = (e) => {
    e.preventDefault();
    const { deleteAnswer } = this.props;
    let userId = this.state.userDetails.userId;

    console.log(userId, ' <--- userId')
    console.log(e.target.name, ' <----- name;')
    var questionAnswer = {
      answerNum: e.target.name,
      answerWriter: userId
    }
    deleteAnswer(questionAnswer).then(response => {
      console.log(' deleteAnswer 실행후 promise')
      console.log(response)
      if (response.type === ActionTypes.DELETE_QNABOARDANSWER_SUCCESS) {
        alert(' 삭제에 성공 하였습니다. ')
      } else {
        alert('삭제 하실 수 없습니다.')
      }
    });
  }
  _answerContentChange(e) {
    this.setState({
      ...this.state,
      answerContent: e.target.value
    })
    console.log(this.state.answerContent, ' this.state.answerContent')

  }

  render() {

    console.log(this.props, '<----- props!@!@!@')
    const { board } = this.props;
    const { qnaBoard } = board;
    const { items } = qnaBoard;
    console.log(qnaBoard, ' props.board.qnaBoard <--------->')
    console.log(items, ' <------- 현재 상태  ')
    
    return (
      <div>
        <form>
          <div className="row">
            <div className="col">답변상태</div>
            <div className="col-7">제목</div>
            <div className="col-1">작성자</div>
            <div className="col-2">작성일</div>
          </div>
          <form>
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
                          <input type="submit" name={item.questionBoardNum} value="삭제" onClick={this._deleteQnABoard} />
                        </div>
                      </div>
                      {item.questionAnswer.map((answer) => (
                        <div className="row" hidden={item.isExpanded}>
                          <div className="col-2" name="answerWriter">{answer.answerWriter}</div>
                          <div className="col-10" name="answerContent">{answer.answerContent}
                            <input type="submit" name={answer.answerNum} value="삭제" onClick={this._answerDelete} />
                          </div>
                          <div>
                          </div>
                        </div>
                      ))}
                      <textarea row="10" name="answerContent" vlaue={this.state.answerContent}
                        onChange={this._answerContentChange} />
                      <input type="submit" name={item.questionBoardNum} value="작성"
                        onClick={this._answerWrite} />
                    </details>
                  </div>
                  <div>
                  </div>
                  <div className="col-1">{item.userId}</div>
                  <div className="col-2">{item.questionBoardRegdate}</div>
                </div>
              </div>
            ))}
          </form>
          <div>
            <input type="button" value="이전" onClick={this._prevPage} />
            <input type="button" value="다음" onClick={this._nextPage} />
            <input type="submit" value="작성" onClick={this._onClickPopUp} />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state, '  mapStateToProps 시작')
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
  deleteQnABoard: (questionBoard) => dispatch(Actions.deleteQnABoard(questionBoard)),
  writeAnswer: (questionAnswer) => dispatch(Actions.writeAnswer(questionAnswer)),
  deleteAnswer: (questionAnswer) => dispatch(Actions.deleteAnswer(questionAnswer))

});


export default connect(mapStateToProps, mapDispatchToProps)(QnABoard);