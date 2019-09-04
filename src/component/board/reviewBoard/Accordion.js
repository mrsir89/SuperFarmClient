import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import { Actions } from '../../../actions/index'
import { connect } from 'react-redux';
//import AddReview from "./AddReview";


import "./Accordion.css";


function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  const rating = useRef(null);

  const { removeReview } = props;
  

  function toggleAccordion(review) {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }
  console.log(props,' 여기는 아코디언 props')

  const _convertStart = (startNum) => {
    console.log(startNum,' 여기 확인 해 봅시다.')
    switch (startNum) {
      case 2:
        return (
        <div>
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
        </div>
        )
      case 3:
        return (
        <div>
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
        </div>
        )
      case 4:
        return (
        <div>
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
        </div>
        )
      case 5:
        return (
        <div>
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
          <img src="/image/star.jpg" width="40px" />
        </div>
        )
      default:
          return (<div>
            <img src="/image/star.jpg" width="40px" />
          </div>
          )
    }
  }

  const removeHandler = (e, reviewBoardNum) => {
    e.stopPropagation();
    removeReview(reviewBoardNum);
    window.location.reload()
  };

  return (

    <div className="accordion__section" alignt="center">


      <button className={`accordion ${setActive}`} alignt="center" onClick={toggleAccordion}>
        <p className="accordion__title">{props.review.reviewBoardTitle}</p>



        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>


      {/* 보드넘, 리뷰보드넘, 아이디, 제목  */}



      <div ref={content} className="row accordion__content" style={{ maxHeight: `${setHeight}` }}>
        <br/>
        <div claaName="row height">
        <div className="col-lg-12" align="right">
          <h5><b>작성자 : {props.review.customerId}</b></h5>
        </div>
        </div>
        <div className="col">
          <p className="accordion__text">
            <div ref={rating} style={{ maxHeight: `${setHeight}` }} className="rating">
            <img src={props.review.reviewBoardImg} width="500px"/>
              <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.review.reviewBoardContent }} />
              <strong>별점</strong> {_convertStart(props.review.reviewBoardRating)}
              <div align="right">
                <button type="button" class="btn btn-light"> 수정</button>
                <button type="button" class="btn btn-light" onClick={e => removeHandler(e, props.review.reviewBoardNum)}>삭제</button>
                {/* <input type="button" value="삭제" onClick ={e => removeHandler(e,props.review.reviewBoardNum)}/> */}
              </div>
              <br></br>
            </div>
          </p>
          {/* 내용, 별점 */}
        </div>
        <div className="col">
          {/* <img  src={"http://localhost:8080"+ "/resource/review07.jpg" }/> */}
          {/* <img src = "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
          
        </div>
        {/* 사진  */}
        <div>
        </div>
      </div>
    </div>
  );
}




const mapDispatchToProps = (dispatch) => ({
  removeReview: (reviewBoardNum) => dispatch(Actions.removeReview(reviewBoardNum))
})
export default connect(null, mapDispatchToProps)(Accordion);