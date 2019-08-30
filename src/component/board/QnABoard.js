import React from 'react';
import { Actions } from '../../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Qnacontent from './QnaContent';
import './QnaContent.css';
import { tsParenthesizedType } from '@babel/types';
import { ActionTypes } from '../../contants';

class QnABoard extends React.Component {

  constructor(props) {
    super(props)
    const{ qnaBoard } = this.props;
    this.state = {
      productBoardNum: this.props.productBoardNum,
      qnaBoard:qnaBoard
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
  
  shouldComponentUpdate(nextState, nextProps){
    console.log('shouldComponentUpdate')
    const { qnaBoard } = this.props;
    if(JSON.stringify(this.qnaBoard) !== JSON.stringify(nextState)){
      console.log(' 여기는 false')
      return true
    }else{
      console.log('여기는 true')
      return false
    }
  }


  _loadqnaBoardList(){

    const { loadqnaboardList } = this.props;
    console.log(this.state, ' <<<<< willMount')
    let size = 10
    let page = 1
    console.log(loadqnaboardList, ' qnaboardList 실행')

    loadqnaboardList(this.state.productBoardNum, size, page).then(response=>{
      if(response.type===ActionTypes.LOAD_QNABOARDLIST_SUCCESS){

        const{ data } = response.payload;
        console.log(data,'dAta 찍어 보는 중ㅇ 오는건가?')        

        this.setState({
          qnaBoard:data

          })
    }else{
      this.setState({
        qnaBoard:{
          items:[]
        }
      })
    }
    });
  }
  

  _onClickPopUp() {
    window.open('/qnaboardWrite', 'window_name', 'width=430,height=500,location=no,status=no,scrollbars=yes');
  }
  _renderQnaBoard(qnaBoard){
    console.log(qnaBoard,'  안의 값 확인 -----------------------------------')
    if(qnaBoard !== null && qnaBoard !== undefined ){
    return( 
      (qnaBoard.items.map((item, index) => (<Qnacontent {...item} index={index} key={index} />)))
    )
    }else{
      return(
        <div>
          <br/>
            현재 게시된 게시물이 없습니다.
        </div>
      )
    }
  }

//  // 다음 페이지 
//  _nextPage = () =>{
//   console.log('Next Page 작동')
//   const { reviewBoard } = this.props;
//   console.log('NextPage ',reviewBoard)
  
//   let hasNextPage = reviewBoard.hasNext;
//   console.log('hasNext',hasNextPage, )

//   var page = reviewBoard.page
//   var size = reviewBoard.size
//   let productBoardNum = reviewBoard.boardNum

//   if(hasNextPage === true){
//     page = page +1;
//     console.log( page, '실제 다음페이지가 있을떄 작동');
//     this._getreviewBoards('productBoard',productBoardNum,size,page)
//   }else{
//     alert('마지막 페이지 입니다.')
//   }    
// }
//   // 이전 페이지
//   _prevPage = () =>{
    
//     console.log('Prev Page 작동')
//     var qnaBoad = this.state.qnaBoard
//     console.log('NextPage ',qnaBoad)
    
//     let hasNextPage = qnaBoad.hasNext;
//     console.log('hasNext',hasNextPage, )
//     var page = reviewBoard.page
//     var size = reviewBoard.size
//     let productBoardNum = qnaBoad.boardNum

//     if(page > 1 ){
//       page = page - 1;
//       console.log( page, '실제 다음페이지가 있을떄 작동');
//       this.__loadqnaBoardList();
//     }else{
//       alert('첫 페이지 입니다.')
//     }    
//   }


  render() {
    console.log(this.props, '<----- props')
    const { qnaBoard } = this.props;
    console.log('qnaBoard Render ~!~!~!~!~!~!~!~!~!',qnaBoard)
    return (

      <div>
        <h2><strong>QnA 게시판 </strong></h2>
        
        <table className="tg">
          <tbody>
          <br/>
          <div className="row">
            <div className="col-lg-2" align="center"><h4>답변상태</h4></div>
            <div className="col-lg-8" align="center"><h4>제목</h4></div>
            <div className="col-lg-2" align="center"><h4>작성자</h4></div>
          </div>

          <br/>
          <div className="col-lg-12">
            {this._renderQnaBoard(qnaBoard)}
            {/* {
            (qnaBoard !== null || qnaBoard !== undefined )?
            (qnaBoard.items.map((item, index) => (<Qnacontent {...item} index={index} key={index} />))):
            `아직 작성된 QnA 목록이 없습니다.`
          } */}
          </div>
          <br/>
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
            <button type="button" className="btn btn-light" >이전</button>
              <button type="button" className="btn btn-light">작성</button>
            
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
  // const { data } = qnaBoard;
  console.log(qnaBoard, '<--------- qnaBoad')
  console.log(board, ' <--------- product')
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