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
    const { board } = this.props;
    const { qnaBoard } = board;
    console.log(qnaBoard,' constructorBoard ')
    this.state = {
      qnaBoardList: qnaBoard
    }
    // this.handleClick=this.handleClick.bind(this);
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
  var wind = window.open(`${<qnaboardWrite/>}`, 'QnA작성', 'width=430,height=500,location=no,status=no,scrollbars=yes');

  }
  _nextPage = () => {
    const { qnaBoard } = this.props
    console.log(qnaBoard, '  nextpage');

    let hasNextPage = qnaBoard.data.hasNext;
    console.log(hasNextPage, ' hasNextPage');
    
    var page = qnaBoard.data.page
    var size = qnaBoard.data.size
    let productBoardNum = qnaBoard.data.boardNum;
    console.log(page, ' next 누를대 page 확인 ');

    if (hasNextPage === true) {
      page = page + 1;
      console.log(page, ' 실제 클릭 했을 경우 값 ');
      this._loadList(productBoardNum, size, page)
    }

  }
  _prevPage = () => {
    const { qnaBoard } = this.props
    console.log(this.props, '  prev Page')
    var page = qnaBoard.data.page
    console.log(page, ' preve 의  클릭 전 page 확인')
    var size = qnaBoard.data.size
    let productBoardNum = qnaBoard.data.boardNum;
    if (page !== 1) {
      page = page - '1';
      console.log(page, ' preve 클릭후 확인 ')
      this._loadList(productBoardNum, size, page)
    }
  }
  _editQnABoard = () => {

  }
  _deleteQnABoard = () => {

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
                    <div><input type="button" value="수정" onClick={this._editQnABoard} /></div>
                    <div><input type="button" value="삭제" onClick={this._deleteQnABoard} /></div>
                  </div>
                  {item.questionAnswer.map((answer) => (
                    <div className="row" hidden={item.isExpanded}>
                      <div className="col-2">{answer.answerWriter}</div>
                      <div className="col-10">{answer.answerContent}</div>
                      <div>


                      </div>
                    </div>
                  ))}
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
  console.log(board, '<--------- board')
  console.log(qnaBoard, '<--------- qnaBoard')
  console.log(product, ' <--------- product')
  return {
    board,
    product
  };

}


const mapDispatchToProps = (dispatch) => ({
  loadqnaboardList: (productNum, size, page) => dispatch(Actions.loadqnaboardList(productNum, size, page))
});


export default connect(mapStateToProps, mapDispatchToProps)(QnABoard);