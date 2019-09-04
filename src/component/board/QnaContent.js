import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { Actions } from '../../actions/index';
import './QnaContent.css';


function QnaContent(props) {
  const { questionAnswer, questionBoardTitle, questionBoardStatus, questionBoardContent, userId,index } = props;
  console.log(questionAnswer,' 확인 ')
  return (
      <div className="panel-default ">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion1" href={'#accordion1_' + index} aria-expanded="false">
              <div className="row div1">
                <div className="col-lg-2" align="center"> {questionBoardStatus===true? '답변완료':'미답변' } </div>
                <div className="col-lg-8">{questionBoardTitle}</div>
                <div className="col-lg-2" align="right">{userId}</div>
                
              </div>
              <div className="row">

              </div>
            </a>
          </h4>
        </div>
        <div className="row">
          <div id={'accordion1_' + index} className="panel-collapse collapse" aria-expanded="false" style={{}}>
            <div className="col-lg-1 answerContentMargin"></div>
            <div className="col-lg-11 panel-body" align="left">
              {ReactHtmlParser(questionBoardContent)}
            </div>
            {questionAnswer.map((item=>
            <div className="row  panel-body " >
                  <div className="col-lg-1 answerContentMargin"></div>
                  <div className="col-lg-9 panel-heading answerContent">{item.answerContent}</div>
                  <div className="col-lg-2 panel-body" align="right">관리자</div>
            </div>
            ))}
            <div className="col-lg-10" align="center">
              <textarea cols="135" rows="4"></textarea>
            </div>
            <div className="col-lg-2" align="left">
              <button type="button" className="btn btn-light" > 작성 </button>
            </div>
          </div>
        </div>
      </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  writeQnABoard: (writeQnA) => dispatch(Actions.writeQnABoard(writeQnA))
})

export default withRouter(connect(null, mapDispatchToProps)(QnaContent));