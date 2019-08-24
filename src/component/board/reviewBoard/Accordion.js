import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

 import "./Accordion.css";

 function Accordion(props) {
   const [setActive, setActiveState] = useState("");
   const [setHeight, setHeightState] = useState("0px");
   const [setRotate, setRotateState] = useState("accordion__icon");

   const content = useRef(null);
   const rating = useRef(null);

   function toggleAccordion(review) {
     setActiveState(setActive === "" ? "active" : "");
     setHeightState(
       setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
     );
     setRotateState(
       setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
     );
   }

   return (
     <div className="accordion__section">
       <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__reviewBoardNum">reviewBN:{props.review.reviewBoardNum}<br></br>refPN:{props.review.productBoardNum}</p>
         <p className="accordion__title">{props.review.reviewBoardTitle}<br></br>ID: {props.review.customerId}</p>
         <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
       </button>
   
       {/* 보드넘, 리뷰보드넘, 아이디, 제목  */}



       <div ref={content} className="row accordion__content" style={{ maxHeight: `${setHeight}` }}>
        <div className="col">
        

        <p className="accordion__text">
         <div ref={rating} style={{ maxHeight: `${setHeight}` }} className="rating">
         <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.review.reviewBoardContent }}/>
           별점 {props.review.reviewBoardRating}
         <div> 
           <button input> 삭제</button>
           <button input> 수정</button>
           </div>
           </div>
         </p> 
      
      
          
           {/* <button className = "accordion__remove" onClick={removeReview(props.review.reviewBoardNum)}>remove</button> */}

   
       {/* 내용, 별점 */}
         </div>
         <div className="col">
     
           {/* <img  src={"http://localhost:8080"+ "/resource/review07.jpg" }/> */}
           {/* <img src = "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
           <img src={"http://localhost:3000" + props.review.reviewBoardImg}/>
         
         </div>
           {/* 사진  */}
         <div>
       </div>       
     </div>
     </div>
   );
 }

 export default Accordion;