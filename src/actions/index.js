import { ActionTypes } from '../contants';
import { userInfo } from 'os';
// React 컴포넌트같은 것이 직접 접근하려고 하면 안됨.
// 직접 접근하기 위해 "Action"이라는 의식을 거쳐야 한다.
// 1)_ Store에 대해 뭔가 하고 싶은 경우엔 Action 을 발행한다.
// 2)_ Store의 문지기(Reducer)가 Action의 발생을 감지하면, 새로운 State가 생성된다.


// type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼"
// payload: "액션의 실행에 필요한 임의의 데이터"


// 초기 페이지 설정 값

const initBoardListsize = 10
const initBoardListPage = 1


const getClientToken = () => {
  const formData = new FormData();
  formData.append('grant_type', 'client_credentials');
  console.log('Actions의 getClientToken 발급 받는다. ');
  return ({
    type: ActionTypes.GET_TOKEN,
    payload: {
      request: {
        method: 'POST',
        url: '/oauth/token',
        data: formData
      }
    }
  });
};


//////////////////////////////////////////////
//           회원 가입 

/**
 * 회원가입 
 * @param {singupCustomer} signupCustomer 
 * @Return User<Customer>
 */
const signup = (signupCustomer,history) => {
  console.log(signupCustomer, ' 여기는 signup 안쪽')

  return ({
    type: ActionTypes.SIGNUP,
    payload: {
      request: {
        method: 'POST',
        url: '/signup',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(signupCustomer)
      }
    }
  }
  );
};

/**
 * id 중복 체크
 * @param String id
 * @return true or notfoud 
 */
const idCheck = (id) => {
  console.log('idCheck 실행 ', id)

  const formData = new FormData();
  formData.append('id', id);
  return ({
    type: ActionTypes.IDCHECK,
    payload: {
      request: {
        method: 'POST',
        url: '/signup/idCheck',
        data: formData
      }
    }
  });
};

const emailCheck = (email) => {
  const formData = new FormData();
  formData.append('email', email);
  return ({
    type: ActionTypes.EMAILCHECK,
    payload: {
      request: {
        method: 'POST',
        url: '/signup/emailCheck',
        data: formData
      }
    }
  });
}

//////////////////////////////////////////////////////
//        로 그 인 



const login = (customerId, password) => {
  const formData = new FormData();
  formData.append('grant_type', 'password');
  formData.append('username', customerId);
  formData.append('password', password);
  console.log(customerId, 'ID ', password, ' Password')
  return ({
    type: ActionTypes.LOGIN,
    payload: {
      request: {
        method: 'POST',
        url: '/oauth/token',
        data: formData
      }
    }
  });
};

const userEdit=(customerEdit)=>{
  return ({
    type: ActionTypes.USER_EDIT,
    payload: {
      request: {
        method: 'POST',
        url: '/users/edit',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(customerEdit)
      }
    }
  }
  );
};


const getUserMe = () => {
  return ({
    type: ActionTypes.GET_USERME,
    payload: {
      request: {
        method: 'POST',
        url: '/users/me'

      }
    }
  });
};

const logout = () => {
  return({
  type: ActionTypes.LOGOUT
  })
}



const refreshToken = (refresh_token) => {
  const formData = new FormData();
  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', refresh_token);

// 미들웨어 형식 
  return ({   
    type: ActionTypes.REFRESH_TOKEN,
    payload: {
      request: {
        method: 'POST',
        url: '/oauth/token',
        data: formData
      }
    }
  });
};


/**
 * @author 심인선
 * @param {*} writeQnA 
 */

 /////////////////////////////////////////////////////////////////////
 //faq

 const loadFrequentlyAskedQuestionBoard = ()=>{
  const formData = new FormData();
  console.log('Action FrequentlyAskedBoard 실행')
  return({
    type:ActionTypes.LOAD_FREQUENTLYASKEDBOARD,
    payload:{
      request:{
        method:'POST',
        url:'/faqboard',
        data:formData
      }
    }
  })
}

/**
 * @author 심인선
 * @param {*} writeQnA 
 */
/////////////////////////////////////////////////////////////////
/////          notice board

const loadNoticeBoard = ()=>{
  const formData = new FormData();
  console.log('Action NoticeBoard 실행')
  return({
    type:ActionTypes.LOAD_NOTICEBOARD,
    payload:{
      request:{
        method:'POST',
        url:'/notice',
        data:formData
      }
    }
  })
}






/////////////////////////////////////////////////////////////////
/////////// QnA Board ///////////////////////////////////////

const writeQnABoard = (writeQnA) => {
  console.log('writeQnABoard')
  return ({
    type: ActionTypes.WRITE_QNABOARD,
    payload: {
      request: {
        method: 'POST',
        url: '/question/write/question',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(writeQnA)
      }
    }
  })
}



//QnABoard productBoardNum에 맞게 불러 오기
const loadqnaboardList = (type, id, size = initBoardListsize, 
  page = initBoardListPage) => {
  console.log(id,' loadQnaBoard Action')
  const formData = new FormData();
  type='productBoard'
  var url = '/question/product '
  formData.append('size', size);
  formData.append('page', page);

  if (type === 'productBoard') {
    formData.append('productBoardNum', id)
    url = '/question/product' ;
  }else if (type === 'user') {
    formData.append('userId', id)
    url = '/question/userId'
  }
  return ({
    type: ActionTypes.LOAD_QNABOARDLIST,
    payload: {
      request: {
        method: 'POST',
        url: url,
        data: formData,
      },
    }
  })
}







//QnABoard 내용수정
const editQnABoard = (editQnABoard) => {
  console.log(' edit QnABoard Action 실행')
  return ({
    type: ActionTypes.EDIT_QNABOARD,
    payload: {
      request: {
        method: 'POST',
        url: '/update/question',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(editQnABoard)
      }
    }
  })
}
// QnABOARD 작성
const deleteQnABoard = (deleteQnABoard) => {
  console.log(' delete QnABoard action 실행 ')
  return ({
    type: ActionTypes.DELETE_QNABOARD,
    payload: {
      request: {
        method: 'POST',
        url: '/question/delete/question',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(deleteQnABoard)
      }
    }
  })
}

// QnABOARD 댓글 작성 
const writeAnswer = (questionAnswer) => {
  console.log(' writeAnswer QnABoard action 실행')
  return ({
    type: ActionTypes.WRITE_QNABOARDANSWER,
    payload: {
      request: {
        method: 'POST',
        url: '/question/write/answer',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(questionAnswer)
      }
    }
  })
}

//QnABoard 댓글 soft삭제
const deleteAnswer = (questionAnswer) => {
  console.log(' deleteAnswer QnABoard action 실행')
  return ({
    type: ActionTypes.DELETE_QNABOARDANSWER,
    payload: {
      request: {
        method: 'POST',
        url: '/question/delete/answer',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(questionAnswer)
      }
    }
  })
}

/////////////////////////////////////////////////////////////////
/////////// Review Board ///////////////////////////////////////

// 리뷰 추가
const addReview = (reviewBoard) => {

  console.log('Action AddReview 실행 ')
  return ({
    type: ActionTypes.ADD_REVIEW,
    payload: {
      request: {
        method: 'POST',
        url: '/review/write',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(reviewBoard)
      }
    }
  });
};

// 리뷰 삭제
// const removeReview = (reviewBoardNum) => {
//   console.log('removieReviewsd')
//   return ({
//     type: ActionTypes.REMOVE_REVIEW,
//     payload: {
//       request: {
//         method: 'DELETE',
//         url: `/review/delete?reviewBoardNum=${reviewBoardNum}`
//       }
//     }
//   });
// };


const removeReview = (reviewBoardNum) => {
  console.log('removieReviewsd')
  const formData = new FormData();
  formData.append('reviewBoardNum', reviewBoardNum)
  return ({
    type: ActionTypes.REMOVE_REVIEW,
    payload: {
      request: {
        method: 'DELETE',
        url: `/review/delete`,
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: formData,
      }
    }
  });
};

// 리뷰 가져오기
const getReviews = (type, id, size = initBoardListsize,
  page = initBoardListPage) => {
  const formData = new FormData();
  // 현재 productBoard만 사용중
  type = 'productBoard'
  var url = '/review/product';
  formData.append('size', size)
  formData.append('page', page)

  if (type === 'productBoard') {
    formData.append('productBoardNum', id)
    url = '/review/product';
  }else if (type === 'user') {
    formData.append('userId', id)
    url = '/review/userId'
  }
  return ({
    type: ActionTypes.LOAD_REVIEWS,
    payload: {
      request: {
        method: 'POST',
        url: url,
        data: formData,
      },
    }
  })
};

const uploadFileReview = (reviewBoardNum, file) => {
  console.log('uploadFileReivew Start ')
  const formData = new FormData();
  formData.append('file', file);
  formData.append('reviewBoardNum', reviewBoardNum)
  return ({
    type: ActionTypes.UPLOADFILEREVIEW,

    payload: {
      request: {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        method: 'POST',
        url: '/storage/file',
        data: formData,
      }
    }
  })
}


/////////////////////////////////////////////////////////////////
///////////     Cart      ///////////////////////////////////////


// 0810 장바구니 추가 action (local storage에 저장, db에는 저장 안함)
// const addCart = (item) => ({
//   type: ActionTypes.ADD_CART,
//   item
// });

// 0814 장바구니 추가 (user)
// userNum,
const addCart = (cartModel) => {
  console.log("cartModel 넘어옴?? >>>> ", cartModel)

  return ({
    type: ActionTypes.ADD_CART,
    payload: {
      request: {
        method: 'POST',
        url: `/cart/add`,
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(cartModel)
      }
    }
  })

};

// 0814 장바구니 불러오기 (user)
const getCartByUser = (userNum) => {
  console.log('getCartByUser 실행 ', userNum)
  
  const formData = new FormData();
  formData.append('userNum', userNum)
  return ({
    type: ActionTypes.GET_CART,
    payload: {
      request: {
        method: 'POST',
        url: '/cart',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: formData,
      }
    }
  })
}

// 0822 장바구니 수량 수정
const editCartQty = (newCartList) => {
  console.log("newCartlist ?????", newCartList)
  return ({
    type: ActionTypes.EDIT_CART,
    payload: {
      request: {
        method: 'PATCH',
        url: '/cart/edit',
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(newCartList)
      }
    }
  })
}

// 0822 장바구니 삭제 
const removeCartById = (cartNum) => {
  const formData = new FormData();
  formData.append('cartNum', cartNum)
  console.log('cartdeleteNum',cartNum)
  return ({
    type: ActionTypes.REMOVE_CART_ID,
    payload: {
      request: {
        method: 'DELETE',
        url: `/cart/delete`,
        headers: {
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: formData,
      }
    }
  });
};

const removeCartAll= (userNum) =>{
  const formData = new FormData();
  formData.append('userNum',userNum)
  console.log(' cartAlldelete',userNum)
  return({
    type:ActionTypes.REMOVE_CART_ALL,
    payload:{
      request:{
        mehtod:'DELETE',
        url:'/cart/deleteAll',
        data:formData,
      }
    }
  })
}
/////////////////////////////////////////////////////////////////
///////////   productBoard   ////////////////////////////////////


//Main 화면 Best 상품만 가져오기

const loadMainBestProduct =() =>{
  return({
    type:ActionTypes.LOAD_MAINBESTPRODUCT,
    payload:{
      request :{
        method:'POST',
        url:'/productBoard/best'
      }
    }
  })
}
const loadBestProductList =(lower) =>{
  const formData = new FormData();
  formData.append('lower',lower)
  return({
    type:ActionTypes.LOAD_BESTPRODUCTLIST,
    payload:{
      request :{
        method:'POST',
        url:'/productBoard/bestLower',
        data:formData
      }
    }
  })
}

// 0810 DB에 있는 상품 데이터 가져오는 action => axios 타입 action으로 변경 
const loadProductList = (type, id) => {
  console.log('Action loadProductList')
  const formData = new FormData();
  let url = '/productBoard'
  if(type==='lower'){
    formData.append('lower',id)
    formData.append('upper',null)
    formData.append('search',null)
  }else if(type==='upper'){
    formData.append('lower',null)
    formData.append('upper',id)
    formData.append('search',null)
  }else if(type==='search'){
    formData.append('lower',null)
    formData.append('upper',null)
    formData.append('search',id)
  }else if(type==='all'){
    formData.append('lower',null)
    formData.append('upper',null)
    formData.append('search',null)
  }
  return ({
    type: ActionTypes.LOAD_PRODUCTLIST,
    payload: {
      request: {
        method: 'POST',
        url: url,
        data: formData
      },
    }
  })
};

// 상품 상세 정보 가져오기
const loadProductDetails = (productBoardNum) => {

  const formData = new FormData();
  formData.append('num', productBoardNum);
  return ({
    type: ActionTypes.LOAD_PRODUCTDETAIL,
    payload: {
      request: {
        method: 'POST',
        url: '/productBoard/detail',
        data: formData
      }
    }
  });
};



/////////////////////////////////////////////////////////////////
///////////   Category       ////////////////////////////////////


// 카테고리 DB에서 가져오는 action 추가 
const getCategories = () => {
  return ({
    type: ActionTypes.GET_CATEGORIES,
    payload: {
      request: {
        method: 'POST',
        url: '/category'
      }
    }
  })
}

///////////////////////////////////////////////////////////
////        KakaoPay 

const kakaoPayReady =(orderSend) =>{
  const formData = new FormData();
  return({
    type:ActionTypes.KAKAOPAYREADY,
    payload:{
      request:{
        method:'POST',
        url:'/kakaoPay',
        headers:{
          'Content-Type': 'application/json; charset: utf-8'
        },
        data:JSON.stringify(orderSend)
      }
    }
  })
}

const kakaoPaySuccess =(kakaopayResult) =>{
  console.log(kakaopayResult,' actionKaKaoPaySuccess')
  return({
    type:ActionTypes.KAKAOPAYRESULT,
    payload:{
      request:{
        method:'POST',
        url:'/kakaoPaySuccess',
        headers:{
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(kakaopayResult)
      }
    }
  })
}

///////////////////////////////////////////////////////////////////
/////     Order 관련 
const checkoutOrder=(orderModel)=>{
  console.log(orderModel,'Action에서 checkoutOrder 확인')
  return({
    type:ActionTypes.CHECKOUTORDERS,
    payload:{
      request:{
        method:'POST',
        url:'/orders',
        headers:{
          'Content-Type': 'application/json; charset: utf-8'
        },
        data: JSON.stringify(orderModel)
      }
    }
  })
}

const orderList =(orderList) =>{
  console.log('orderList 실행',orderList)
  return({
    type:ActionTypes.SAVEORDERLIST,
    data:orderList
  })
}

const loadUserOrder =(userNum) =>{
  console.log('num',userNum)
  const formData = new FormData()
  formData.append('num',userNum)
  return({
    type:ActionTypes.LOAD_USERORDER,
    payload:{
      request:{
        method:'POST',
        url:'/orders/user',
        data:formData
      }
    }
  })
}




//////////////////////////////////////////////////////////
///        비동기 처리를 위한 Action
const asynAction = () => {
  // window.setInterval(()=>{}, 100);
  return {
    type: ActionTypes.ASNYCACTION,
    payload: {
      request: {
        method: 'POST',
        url: '/signup/asyncAction'
      }
    }
  }
}


export const Actions = {

  signup, emailCheck, idCheck, getUserMe,
  login, logout, getClientToken,refreshToken,
  addCart,
  
  loadProductList, loadProductDetails, loadMainBestProduct,loadBestProductList,
  getCategories, getCartByUser,removeCartById,editCartQty, removeCartAll,
  loadqnaboardList, writeQnABoard, editQnABoard, deleteQnABoard,
  loadNoticeBoard,
  loadFrequentlyAskedQuestionBoard,
  writeAnswer, deleteAnswer,

  getReviews, removeReview, addReview, uploadFileReview,
  asynAction,

  userEdit,
  kakaoPayReady,kakaoPaySuccess,
  checkoutOrder,orderList,loadUserOrder
};