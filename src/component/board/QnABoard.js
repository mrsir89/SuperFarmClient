import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    const { qnaBoard } = this.props;
    this.state = {
      qnaBoardList: qnaBoard
    }
    // this.handleClick=this.handleClick.bind(this);
    console.log('여기 실행 되나?', this.state)
  }

  //   handleClick(e){
  //     const {Clickitem}=this.state;
  //     this.setState({
  //       Clickitem:{
  //         ...Clickitem,
  //         isExpanded : !this.setState.isExpanded
  //       }
  //     })
  //   }
  
  componentWillMount() {
    const { loadqnaboardList } = this.props;
    console.log(this.state, ' <<<<< willMount')
    let productNum = 5
    let size = 10
    let page = 1
    console.log(loadqnaboardList, ' qnaboardList 실행')
    loadqnaboardList(productNum, size, page);
  }
  componentDidMount(){
    const { loadqnaboardList } = this.props;
    console.log(this.state, ' <<<<< willMount')
    let productNum = 5
    let size = 10
    let page = 1
    console.log(loadqnaboardList, ' qnaboardList 실행')
    loadqnaboardList(productNum, size, page);
  }

  _writeQnA() {
    const { writeQnABoard } = this.props
  }
  _onClickPopUp() {
    window.open('qnaboardWrite', 'window_name', 'width=430,height=500,location=no,status=no,scrollbars=yes');
  }

  render() {
    console.log(this.props, '<----- props')
    const { qnaBoard } = this.props;
    const list = qnaBoard.data;
    const { items } = list;
    console.log(list.items, ' <------- ')
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
                  <summary>{item.questionBoardContent}</summary>
                  {item.questionAnswer.map((answer) => (
                    <div className="row" hidden={item.isExpanded}>
                      <div className="col-2">{answer.answerWriter}</div>
                      <div className="col-10">{answer.answerContent}</div>
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
          <input type="button" value="작성" onClick={this._onClickPopUp}></input>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=> {
  console.log(state)
  const { product } = state;
  const { qnaBoard } = product;
  // const { data } = qnaBoard;
  console.log(qnaBoard, '<--------- qnaBoad')
  console.log(product, ' <--------- product')
  // console.log(data, '<------------ data')
  return {
    qnaBoard
  };

}


const mapDispatchToProps = (dispatch) => ({
  loadqnaboardList: (productNum, size, page) => dispatch(Actions.loadqnaboardList(productNum, size, page))
  //writeQnABoard: (qnaContent) => dispatch(writeQnABoard(qnaContent))
});


export default connect(mapStateToProps, mapDispatchToProps)(QnABoard);