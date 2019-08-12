import React from 'react';
import { Actions } from '../../actions/index';
import { ActionTypes } from '../../contants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const listQnaBoard = () => dispatch => {
  return dispatch(Actions.getQnABoard())
    .then(response => {
      if (response.type === ActionTypes.QNABOARD_SUCCESS) {
        console.log(' QnABoard Reading 성공')
      } else {
        return Promise.reject(response);
      }
    });
};


const writeQnABoard = (qnaContent) => dispatch => {
  return dispatch(Actions.writeQnABoard())
    .then(response => {
      if (response.type === ActionTypes.QNABOARD_SUCCESS) {
        console.log('QnA READ SUCCESS')
        return dispatch(Actions.getQnABoard())
      } else {
        return Promise.reject(response);
      }
    });
};

class QnABoard extends React.Component {

  constructor(props) {
    super(props)
    const { items } = props;
    this.state = {
      items: items
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
    const { qnaBoard } = this.props
    qnaBoard();
  }

  _writeQnA() {
    const { writeQnABoard } = this.props

  }

  render() {
    const { items } = this.state;
    console.log(this.state, 'render');
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
                <input type="textarea"></input>
                <input type="botton" value="작성"></input>
              </div>
              <div className="col-1">{item.user.username}</div>
              <div className="col-2">{item.questionBoardRegdate}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  qnaBoard: () => dispatch(Actions.getQnABoard()),
  writeQnABoard: (qnaContent) => dispatch(writeQnABoard(qnaContent))
});


export default withRouter(connect(null, mapDispatchToProps)(QnABoard));