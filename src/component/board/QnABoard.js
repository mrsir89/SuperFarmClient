import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Qnacontent from './QnaContent';
import './QnaContent.css';
import { ActionTypes } from '../../contants';

class QnABoard extends React.Component {

  constructor(props) {
    super(props)
    const { qnaBoard } = this.props;
    this.state = {
      productBoardNum: this.props.productBoardNum,
      qnaBoard: qnaBoard
    }
    // this.handleClick=this.handleClick.bind(this);
    console.log('여기 실행 되나?', this.state)
  }



  componentWillMount() {

    this._loadqnaBoardList();

  }
  componentDidMount(){
    this._loadqnaBoardList();
  }
  // componentDidMount() {

  //   this._loadqnaBoardList();
  // }

  // shouldComponentUpdate(nextState, nextProps) {
  //   console.log('shouldComponentUpdate')
  //   if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
  //     console.log(' 여기는 false')
  //     return true
  //   } else {
  //     console.log('여기는 true')
  //     return false
  //   }
  // }


  _loadqnaBoardList(size, page) {

    const { loadqnaboardList } = this.props;
    console.log(this.state, ' <<<<< willMount')

    console.log(this.state.productBoardNum, ' productBoardNum 실행')

    loadqnaboardList('productBoard', this.state.productBoardNum, size, page)
      .then(response => {
        if (response.type === ActionTypes.LOAD_QNABOARDLIST_SUCCESS) {
          this.setState({
            qnaBoard: response.payload.data
          })
        }
      }).catch(error => {
        console.log(error);
      });
  }


  _onClickPopUp = () => {
    window.open(`/qnaboardWrite/${this.state.productBoardNum}`, ' 질문 작성', 'width=500,height=650,location=no,status=no,scrollbars=yes')
  }

  _renderQnaBoard = () => {
    console.log()

    if (this.state.qnaBoard !== undefined && this.state.qnaBoard !== null) {
      if (this.state.qnaBoard.length !== 0) {
        console.log(' length!=0')
        if (this.state.qnaBoard.totalcount !== 0) {
          return (
            (this.state.qnaBoard.items.map((item, index) => (<Qnacontent {...item} index={index} key={index} />)))
          )
        } else {
          console.log()
          return (
            <div>
              현재 게시된 게시물이 없습니다.
          </div>
          )
        }
      } else {
        return (
          <div>
            현재 게시된 게시물이 없습니다.
        </div>
        )
      }
    } else {
      return (
        <div>
          현재 게시된 게시물이 없습니다.
      </div>
      )
    }
  }

  // 다음 페이지 
  _nextPage = () => {
    const { qnaBoard } = this.props;
    const { loadqnaBoardList } = this.props;
    let hasNextPage = qnaBoard.hasNext;

    var page = qnaBoard.page
    var size = qnaBoard.size

    let productBoardNum = qnaBoard.boardNum

    if (hasNextPage === true) {
      page = page + 1;
      console.log(page, '실제 다음페이지가 있을떄 작동');
      loadqnaBoardList('productBoard', productBoardNum, size, page)
    } else {
      alert('마지막 페이지 입니다.')
    }
  }
  // 이전 페이지
  _prevPage = () => {

    console.log('Prev Page 작동')
    var qnaBoard = this.state.qnaBoard
    var page = qnaBoard.page
    var size = qnaBoard.size
    let productBoardNum = qnaBoard.boardNum
    const { loadqnaBoardList } = this.props
    if (page > 1) {
      page = page - 1;
      loadqnaBoardList('productBoard', productBoardNum, size, page);
    } else {
      alert('첫 페이지 입니다.')
    }
  }


  render() {
    const { qnaBoard } = this.state;
    return (

      <div>
        <h2><strong>QnA 게시판 </strong></h2>

        <table className="tg">
          <tbody>
            <br />
            <div className="row">
              <div className="col-lg-2" align="center"><h4>답변상태</h4></div>
              <div className="col-lg-8" align="center"><h4>제목</h4></div>
              <div className="col-lg-2" align="center"><h4>작성자</h4></div>
            </div>

            <br />
            <div className="col-lg-12">
              {this._renderQnaBoard(qnaBoard)}
              {/* {
            (qnaBoard !== null || qnaBoard !== undefined )?
            (qnaBoard.items.map((item, index) => (<Qnacontent {...item} index={index} key={index} />))):
            `아직 작성된 QnA 목록이 없습니다.`
          } */}
            </div>
            <br />
          </tbody>
        </table>


        <div>
          <table>
            <tbody>
              <tr height="20px"></tr>
            </tbody>
          </table>


        </div>
        <div className="row" align="center">
          <div className="col-lg-10" align="left">
            <button type="button" className="btn btn-light" name="prev" onClick={this._prevPage}>이전</button>
            <button type="button" className="btn btn-light" name="next" onClick={this._nextPage}>다음</button>

          </div>
          <div className="col-lg-2" align="right">
            <button type="button" className="btn btn-light" onClick={this._onClickPopUp}>작성</button>
          </div>
        </div>


        {/* <table>
          <tr height="100px">

          </tr>
        </table>
      <div>
        <table width="100%">
          <tr>
            <td>

            </td>
          </tr>
        </table>
      </div> */}
      </div>


    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  const { board } = state;
  const { qnaBoard } = board;

  console.log(qnaBoard, '<--------- qnaBoad')
  console.log(board, ' <--------- product')
  return {
    qnaBoard
  };

}


const mapDispatchToProps = (dispatch) => ({
  loadqnaboardList: (productNum, size, page) => dispatch(Actions.loadqnaboardList(productNum, size, page)),
  writeQnABoard: (qnaContent) => dispatch(Actions.writeQnABoard(qnaContent))
});


export default connect(mapStateToProps, mapDispatchToProps)(QnABoard);