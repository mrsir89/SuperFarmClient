import React from 'react';
import NoticeItem from './noticeItem';
// import Noticejson from './Notice.json';
import { connect } from 'react-redux';
import { Actions } from '../../../actions/index';



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
    
    loadNoticeBoard().then(response => {
      console.log(response , '  response!!!!!!!!!!!!!!!!')
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
        <br/><br/><br/><br/><br/><br/>
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