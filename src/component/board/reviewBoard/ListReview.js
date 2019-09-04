import React from 'react';
import { connect } from 'react-redux';
import Accordion from "./Accordion";
import { Actions } from '../../../actions/index';
import './ListReview.css';
import AddReview from './AddReview';


class ListReview extends React.Component {

  constructor(props) {
    super(props);
    console.log(' 여기 확인 ', this.props)
    const { userDetails } = this.props
    this.state = {
      userDetails: userDetails,
      reviewBoards: [],
      productBoardNum: this.props.productBoardNum
    }
    console.log(this.props, '  props 확인 ')
  }

  // 시작시 reviewBoards를 가져 온다.
  // componentWillMount() {
  //   this._getreviewBoards('productBoard', this.props.productBoardNum, 10, 1);
  // }

  // getreviewBoards Action 여기서 리뷰보드 리스트 가져오는거 실행
  // type product 일때는 Type =productBoard  id= productBoard 번호
  // size 는 기본값 10 page 는 기본값 1
  _getreviewBoards(type, id, size, page) {
    const { getReviews } = this.props;
    getReviews(type, id, size, page);
    console.log("this.props>>>>>>>>>>>>>>>>>>>", this.props)
  }


  
  _renderAllReviews = () => {
    console.log('renderAllREviews ', this.props)
    const { reviewBoard } = this.props;
    const { items } = reviewBoard;
    var reviewItems = [];

    if (items !== undefined && items !== null) {
      return (
        reviewItems = items.map(review =>
          <Accordion key={review.reviewBoardsNum} review={review} />
        ))
    } else {
      return (
        <div>
          <br /> 현재 작성된 리뷰 게시물이 없습니다.
        </div>
      )
    }
  }

  _addReview = () => {

    const { userDetails } = this.props
    const isLogin = userDetails;

    if (isLogin !== null && isLogin !== undefined) {

      window.open(`/review/write/${this.state.productBoardNum}`, 'Review  작성', 'width=500,height=700,location=no,status=no,scrollbars=yes')
    } else {
      return alert(' 로그인 후 이용해 주세요')
    }
  }
  // 다음 페이지 
  _nextPage = () => {
    console.log('Next Page 작동')
    const { reviewBoard } = this.props;
    console.log('NextPage ', reviewBoard)

    let hasNextPage = reviewBoard.hasNext;
    console.log('hasNext', hasNextPage)

    var page = reviewBoard.page
    var size = reviewBoard.size
    let productBoardNum = reviewBoard.boardNum

    if (hasNextPage === true) {
      page = page + 1;
      console.log(page, '실제 다음페이지가 있을떄 작동');
      this._getreviewBoards('productBoard', productBoardNum, size, page)
    } else {
      alert('마지막 페이지 입니다.')
    }
  }

  // 이전 페이지
  _prevPage = () => {

    console.log('Prev Page 작동')
    const { reviewBoard } = this.props;
    console.log('NextPage ', reviewBoard)

    let hasNextPage = reviewBoard.hasNext;
    console.log('hasNext', hasNextPage)
    var page = reviewBoard.page
    var size = reviewBoard.size
    let productBoardNum = reviewBoard.boardNum

    if (page > 1) {
      page = page - 1;
      console.log(page, '실제 다음페이지가 있을떄 작동');
      this._getreviewBoards('productBoard', productBoardNum, size, page)
    } else {
      alert('첫 페이지 입니다.')
    }

  }


  render() {
    console.log("this.props!=>>", this.props)
    return (
      <div className="content">
        <h2> 리뷰 게시판</h2>
        <table className="tg" >
          {this._renderAllReviews()}
        </table>
        <div className="div1">
          <div >
            <button type="button" className="btn btn-light" onClick={this._prevPage} >이전 </button>
            <button type="button" className="btn btn-light" onClick={this._nextPage} >다음 </button>
          </div>
          <div className="divButton">
            <button type="button" className="btn btn-light" onClick={this._addReview} >작성 </button>
          </div>
        </div>
        <table>
          <tr height="50px"></tr>
        </table>
      </div>
    );
  }



}

function mapStateToProps(state) {

  console.log(state, ' mapStateToProps state')
  const { board } = state;
  const { reviewBoard } = board
  const { userDetails } = state.auth
  // const {items} = reviewBoards
  console.log('mpaStateToProps', reviewBoard)
  return {
    reviewBoard,
    userDetails
  };
}

const mapDispatchToProps = (dispatch) => ({
  getReviews: (product, id, size, page) => dispatch(Actions.getReviews(product, id, size, page)),
  removeReview: () => dispatch(Actions.removeReview())
})
export default connect(mapStateToProps, mapDispatchToProps)(ListReview);