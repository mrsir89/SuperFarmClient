import React from 'react';
// import { NoticeItem }  from './noticeItem';
// import Noticejson from './Notice.json';
import { connect } from 'http2';






class Notice extends React.Component {

  constructor(props){
    super(props)
  }


  render(){
  return (
      <div className="main">
        <div className="container">
          <ul className="breadcrumb">
            <li><a href="index.html">Home</a></li>
            <li><a href>Store</a></li> 
            <li className="active">Notice</li>
          </ul>
          {/* BEGIN SIDEBAR & CONTENT */}
          <div className="row margin-bottom-40">
            {/* BEGIN SIDEBAR */}
            <div class="sidebar col-md-3 col-sm-3">
            <ul class="list-group margin-bottom-25 sidebar-menu">
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Login/Register</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Restore Password</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> My account</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Address book</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Wish list</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Returns</a></li>
              <li class="list-group-item clearfix"><a href="javascript:;"><i class="fa fa-angle-right"></i> Newsletter</a></li>
            </ul>
          </div>
            {/* END SIDEBAR */}
            {/* BEGIN CONTENT */}
            <div className="col-md-9 col-sm-7">
              <h1>Notice</h1>
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

                        {/* {Noticejson.noticeItems.map((item,index) => (<NoticeItem {...item} NoticeNum={index} key={index} />))} */}


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
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  console.log('notice mapStateToProps----------',state);
}
const mapDispatchToProps = (dispatch) =>({

})


export default connect(mapStateToProps,mapDispatchToProps)(Notice);