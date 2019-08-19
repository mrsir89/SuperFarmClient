import React from 'react';
import { connect } from 'react-redux';
import Accordion from "./Accordion";
import { bindActionCreators } from 'redux';
import { Actions } from '../../../actions/index';
import { isFor } from '@babel/types';


class ListReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviewBoards: []
    }
    console.log(this.props,'  props 확인 ')
  }
  // 시작시 ReviewBoard를 가져 온다.
  componentWillMount() {

    this._getReviewBoard('productBoard',5,10,1);
  }
  // getReviewBoard Action 여기서 리뷰보드 리스트 가져오는거 실행
  // type product 일때는 Type =productBoard  id= productBoard 번호
  // size 는 기본값 10 page 는 기본값 1
  _getReviewBoard(type, id, size,page){
    const { getReviews } = this.props;
    getReviews(type,id,size,page);
    console.log("this.props>>>>>>>>>>>>>>>>>>>", this.props)
  }
  _renderAllReviews = () => {
    console.log('renderAllREviews ', this.props)
    const { reviewBoard } = this.props;
    const { items } = reviewBoard;
    var reviewItems = [];

    if (items !== undefined && items !== null) {
      reviewItems = items.map(review =>
        <Accordion key={review.reviewBoardNum} review={review} />
      )
    }
    return reviewItems
  }
  _addReview(){
    window.open('/review/write', 'Review  작성', 'width=430,height=500,location=no,status=no,scrollbars=yes')
  }
  // 다음 페이지 
  _nextPage = () =>{
    console.log('Next Page 작동')
    const { reviewBoard } = this.props;
    console.log('NextPage ',reviewBoard)
    
    let hasNextPage = reviewBoard.hasNext;
    console.log('hasNext',hasNextPage, )

    var page = reviewBoard.page
    var size = reviewBoard.size
    let productBoardNum = reviewBoard.boardNum

    if(hasNextPage === true){
      page = page +1;
      console.log( page, '실제 다음페이지가 있을떄 작동');
      this._getReviewBoard('productBoard',productBoardNum,size,page)
    }    
  }
  // 이전 페이지
  _prevPage = () =>{
    
    console.log('Prev Page 작동')
    const { reviewBoard } = this.props;
    console.log('NextPage ',reviewBoard)
    
    let hasNextPage = reviewBoard.hasNext;
    console.log('hasNext',hasNextPage, )

    var page = reviewBoard.page
    var size = reviewBoard.size
    let productBoardNum = reviewBoard.boardNum

    if(page > 1 ){
      page = page - 1;
      console.log( page, '실제 다음페이지가 있을떄 작동');
      this._getReviewBoard('productBoard',productBoardNum,size,page)
    }    

  }


  render() {
    console.log("this.props!=>>", this.props)
    return (
      <div className="content">
        {this._renderAllReviews()}
        <input type="button" value="이전" onClick={this._prevPage} />        
        <input type="button" value="다음" onClick={this._nextPage} />
        <input type="button" value="작성" onClick={this._addReview}/>
      </div>
    );
  }


}

function mapStateToProps(state) {

  console.log(state, ' mapStateToProps state')
  const { board } = state;
  const { reviewBoard } = board
  console.log('mpaStateToProps', reviewBoard)
    return {
    reviewBoard
  };
}

const mapDispatchToProps=(dispatch)=>({
    
    getReviews: (product,id,size,page ) => dispatch(Actions.getReviews(product,id,size,page)),
    removeReview:() => dispatch(Actions.removeReview())
})
export default connect(mapStateToProps, mapDispatchToProps)(ListReview);

