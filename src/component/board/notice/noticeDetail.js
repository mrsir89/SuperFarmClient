import React from 'react';
import { connect } from 'react-redux';
// import notices from './Notice.json';



function NoticeDetail(props) {
  const { noticeNum } = props.match.params; //props.match.params.id라고 써도 됨
  const { noticeBoard } = props;
  const { items } = noticeBoard;
  console.log("NoticeDetail props:111111111111111111111111111111111111111111111 ",props);
  //props(notice에서 받아온 것)에 match에 params안에서 noticeNum을 가져와서 쓰려고하는것 

  const noticelist = items.filter(item => (item.noticeNum == noticeNum));
  // console.log('items >>>', items);
  //json 파일에서 noticeItems배열에서 items=[{item}조건맞는거 하나의 객체를 찾음], 
  //item.noticeNum은 json더미 파일안의 것이고 noticeNum은 props를 match로 가져온거 
  //그걸 비교해서 items에 넣은 것
  
  const { noticeTitle, noticeWriterName, noticeWriteDate, noticeContent } = noticelist[0];
  // 배열에는 어차피 하나의 객체가 있던거라 조건에 맞는 배열items에 0번째 객체의 쓸것들을 가져옴 


  return (
    <div className="main">
      <div className="container">
        
        {/* <div className="row">
          <div className="col">column 1</div>
          <div className="col">column 1</div>
          <div className="col">column 1</div>
        </div> */}


        {/* BEGIN SIDEBAR & CONTENT */}
        <div className="row margin-bottom-40">
          {/* BEGIN SIDEBAR */}


          {/* END SIDEBAR */}
          {/* BEGIN CONTENT */}
          <div className="col-md-9 col-sm-7">
            <h1>Notice</h1>
            <div className="goods-page">
              <div className="goods-data clearfix">
                <div className="table-wrapper-responsive">
                  <table summary="Shopping cart">
                    <tbody>
                      <tr clssName="subject" style={{ textAlign: 'center' }}>
                        <td>
                          <h2>{noticeTitle}</h2>
                        </td>
                      </tr>

                      {/* <tr className="subject">
                        <th scope="col">작성자 : {noticeWriterName} &emsp; 작성일 : {noticeWriteDate} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 문의전화 : 250-8965</th>
                      </tr> */}

                      <tr><div> &emsp; </div></tr>
                      <tr clssName="subject">
                         <div className="row"> 
                          {/* <td> */}
                          <div className="col-md-3" style={{ textAlign: 'center' }}>Item 1</div>
                          <div className="col-md-2"  style={{ textAlign: 'left' }}>작성자 : {noticeWriterName}</div>
                          <div className="col-md-4" style={{ textAlign: 'left' }}>작성일 : {noticeWriteDate}</div>
                          {/* </td> */}
                         </div> 
                      </tr>

                      <tr >
                      <div className="col-md-12" style={{ textAlign: 'right' }}>문의전화 : 123-4567</div>
                      </tr>

                      <tr>
                        <th title="내용" className="bbs_content">
                          <div className="photo_area clearfix">
                          </div>
                          <div id="bbs_ntt_cn_con">
                            <br />
                            <br />
                            <br /> 내용이 들어가야함{noticeContent}<br />
                          </div>
                          <div id="ntt_cn_wdv" style={{ height: '1px', width: '800px' }} />
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
export default connect(mapStateToProps,null)(NoticeDetail);