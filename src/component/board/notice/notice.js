import React from 'react';
<<<<<<< HEAD
import  NoticeItem   from './noticeItem';
=======
import NoticeItem from './noticeItem';
>>>>>>> dev_sj
// import Noticejson from './Notice.json';
import { connect } from 'react-redux';
import { Actions } from '../../../actions/index';


<<<<<<< HEAD
class Notice extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    const { loadNoticeBoard } = this.props;
    loadNoticeBoard();
  }

  render(){
  const { noticeBoard } = this.props;
  const { items } =noticeBoard;
  console.log('00000000000000000000000000000000000000',noticeBoard)
  return (
      <div className="main">
        <div className="container">
        
          {/* BEGIN SIDEBAR & CONTENT */}
        
            {/* END SIDEBAR */}
            {/* BEGIN CONTENT */}
            <div className="col-md-9 col-sm-7">
              <h1>공지사항</h1>
              <div className="goods-page">
                <div className="goods-data clearfix">
                  <div className="table-wrapper-responsive">
                    <table summary="Shopping cart">
                      <tbody><tr>
                          <th className="goods-page-image" >&emsp;&emsp;번호</th>
                          <th className="goods-page-description">&emsp;&emsp;&emsp;제목</th>
                          <th className="goods-page-stock" >&emsp;&emsp;&emsp;작성자</th>
                          <th className="goods-page-date" >&emsp;&emsp;&emsp;작성일</th>
                          <th className="goods-page-price" >&emsp;&emsp;&emsp;조회수</th>
                        </tr>

                        {items.map((item,index) => (<NoticeItem {...item} NoticeNum={index} key={index} />))}


                        {/* <tr>
                          <td className="goods-page-image">
                            <a href="javascript:;"><img src="../../assets/frontend/pages/img/products/model4.jpg" alt="Berry Lace Dress" /></a>
                          </td>
                          <td className="goods-page-description">
                            <h3><a href="javascript:;">Cool green dress with red bell</a></h3>
                            <p><strong>Item 1</strong> - Color: Green; Size: S</p>
                            <em>More info is here</em>
                          </td>
                          <td className="goods-page-stock">
                            In Stock
                          </td>
                          <td className="goods-page-price">
                            <strong><span>$</span>47.00</strong>
                          </td>
                          <td className="del-goods-col">
                            <a className="del-goods" href="javascript:;">&nbsp;</a>
                            <a className="add-goods" href="javascript:;">&nbsp;</a>
                          </td>
                        </tr> */}
                      </tbody></table>
                  </div>
                </div>
              </div>
            </div>
            {/* END CONTENT */}
          </div>
          {/* END SIDEBAR & CONTENT */}
        </div>
   
    )
  }
}
const mapStateToProps = (state)=>{
  console.log('notice mapStateToProps----------',state);
  const { board } = state;
  const { noticeBoard } = board;
  console.log(noticeBoard,' 000000000 00000000000000000000')
  return{
    noticeBoard
  }
}
const mapDispatchToProps = (dispatch) =>({
  loadNoticeBoard:() => dispatch(Actions.loadNoticeBoard())
})


export default connect(mapStateToProps,mapDispatchToProps)(Notice);
=======

class Notice extends React.Component {

  constructor(props) {
    super(props)
    this.state ={
      noticeBoard : [],
      items: props.items
    }
  }

  componentWillMount() {
    const { loadNoticeBoard } = this.props;
    loadNoticeBoard()
    .then(response => {
      const { payload } = response;
      const { data } = payload;
      console.log("notice의 data",data)
      this.setState({     // state가 바뀌면 rerender 
        noticeBoard: data.items
      })
    })
  }

  render() {
    const { noticeBoard } = this.props;
    const { items } = noticeBoard;
    console.log('00000000000000000000000000000000000000', noticeBoard)
    return (
      <div className="main">
        <div className="container">

          {/* BEGIN SIDEBAR & CONTENT */}

          {/* END SIDEBAR */}
          {/* BEGIN CONTENT */}
          <div className="col-md-9 col-sm-7">
            <h1>공지사항</h1>
            <div className="goods-page">
              <div className="goods-data clearfix">
                <div className="table-wrapper-responsive">
                  <table summary="Shopping cart">
                    <tbody><tr>
                      <th className="goods-page-image" >번호</th>
                      <th className="goods-page-description">&emsp;&emsp;&emsp;제목</th>
                      <th className="goods-page-stock" >작성자</th>
                      <th className="goods-page-date" >&emsp;작성일</th>
                      <th className="goods-page-price" >조회수</th>
                    </tr>

                      {
                        ((items !== undefined && items !== null ) ? 
                          items.map((item, index) => (<NoticeItem {...item} NoticeNum={index} key={index} />))
                          : [] )
                        
                      }

                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
          {/* END CONTENT */}
        </div>
        {/* END SIDEBAR & CONTENT */}
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  console.log('notice mapStateToProps----------', state);
  const { board } = state;
  const { noticeBoard } = board;
  console.log(noticeBoard, ' 00000000000000000000000000000')
  return {
    noticeBoard
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadNoticeBoard: () => dispatch(Actions.loadNoticeBoard())
})


export default connect(mapStateToProps, mapDispatchToProps)(Notice);
>>>>>>> dev_sj
