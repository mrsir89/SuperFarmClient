import React from 'react';
import { connect } from 'react-redux';
// import notices from './Notice.json';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
// import aaa from '../../../../public/images/tangerin.png'


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
  
  const { noticeTitle, noticeWriterName, noticeContent,noticeImg } = noticelist[0];
  // 배열에는 어차피 하나의 객체가 있던거라 조건에 맞는 배열items에 0번째 객체의 쓸것들을 가져옴 

  var date = new Date(noticelist[0].noticeWriteDate);
  console.log('>>>>>>>>>>>>', items[0].noticeWriteDate);
  const current = moment(date).format('YYYY-MM-DD');
  console.log('current', noticelist[0].noticeWriteDate, current);

  console.log(date, "========> var date", typeof date);
  //const writedate = getFormatDate(date);
  //console.log(writedate, "==========> const writedate");

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
            <h1>공지사항</h1>
            <div className="goods-page">
              <div className="goods-data clearfix">
                <div className="table-wrapper-responsive">
                  <table summary="Shopping cart">
                    <tbody>
                      <tr clssName="subject" style={{ textAlign: 'center' }}>
                        <td>
                          <h2>{ReactHtmlParser(noticeTitle)}</h2>
                        </td>
                      </tr>

                      {/* <tr className="subject">
                        <th scope="col">작성자 : {noticeWriterName} &emsp; 작성일 : {noticeWriteDate} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 문의전화 : 250-8965</th>
                      </tr> */}

                      <tr><div> &emsp; </div></tr>
                      <tr clssName="subject">
                         <div className="row"> 
                          {/* <td> */}
                          {/* <div className="col-md-3" style={{ textAlign: 'center' }}>Item 1</div> */}
                          <div className="col-md-2"  style={{ textAlign: 'left' }}>작성자 : {noticeWriterName}</div>
                          {/* <div className="col-md-4" style={{ textAlign: 'left' }}>작성일 : {getFormtDate(noticeWriteDate)}</div> */}
                          <div className="col-md-4" style={{ textAlign: 'left' }}>작성일 : {current}
                          {/* </td> */}
                         </div> 
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
                            <img src="/image/fruits.jpg" width="300px"  />
                            <br />
                            <br />
                            <br />{ReactHtmlParser(noticeContent)}<br />
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

// function getFormatDate(date){
//   console.log("function date ====> ",date);
//    var year = date.getFullYear();   //yyyy 
//    var month = (1 + date.getMonth());   //M 
//    month = month >= 10 ? month : '0' + month;   //month 두자리로 저장 
//    var day = date.getDate();   //d 
//    day = day >= 10 ? day : '0' + day;   //day 두자리로 저장 
//    var hour = date.getHours();
//    var min = date.getMinutes();
//    var sec = date.getSeconds();
   
//    return year + '.' + month + '.' + day; 
// }

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