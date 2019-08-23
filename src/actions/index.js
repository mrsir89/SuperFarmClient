import { ActionTypes } from '../contants';
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
// 확인 
const signup = (signupCustomer) => {
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

const logout = () => ({
  type: ActionTypes.LOGOUT
})

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
const loadqnaboardList = (productNum, size, page ) => {
  const formdata = new FormData();
  formdata.append('productNum', 5); 
  formdata.append('size', size);
  formdata.append('page', page);
  console.log('Action loadQnABoard 실행')
  console.log('size',size, ' page ', page)
  return ({
    type: ActionTypes.LOAD_QNABOARDLIST,
    payload: {
      request: {
        method: 'POST',
        url: '/question/product',
        data: formdata
      }
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
        method: 'PATCH',
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
const getReviews = (type,id,size=initBoardListsize,
                            page=initBoardListPage) => {
  const formData = new FormData();
  type = 'productBoard'
  var url ='/review/product';
      formData.append('size',size)
      formData.append('page',page)
      formData.append('productBoardNum',5)
      console.log('Action LOAD_REVIEWS')
  
      if(type=='productBoard'){
        formData.append('productBoardNum',5)
        url = '/review/product';
      }
      if(type=='user'){
        formData.append('userId',id)
        url='/review/userId'
      }
      console.log('size', size, 'page',page,'id',id)
      return ({
        type: ActionTypes.LOAD_REVIEWS,
        payload: {
          request: {
            method: 'POST',
            url: url,
            data:formData,
          },
         
        }
      })
};

const uploadFileReview = (reviewBoardNum,file ) =>{
  console.log('uploadFileReivew Start ')  
  const formData = new FormData();
    formData.append('file',file);
    formData.append('reviewBoardNum',reviewBoardNum)
    return({
      type: ActionTypes.UPLOADFILEREVIEW,
      payload: {
        request:{
          headers:{
            'Content-Type':'multipart/form-data'
          },
          method: 'POST',
          url: '/storage/file',
          data:formData,
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
  // console.log ("userNum 넘어옴?? >>>> ", userNum)
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
  console.log('getCartByUser 실행 ',userNum)
  const formData = new FormData();
  formData.append('userNum',userNum)
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
  // const formData = new FormData();
  // formData.append('cartProductNum', cartProductNum);
  // formData.append('count', newCartList);
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
  return ({
    type: ActionTypes.REMOVE_CART_ID,
    payload: {
      request: {
        method: 'DELETE',
        url: `/cart/delete/${cartNum}`
      }
    }
  });
};

/////////////////////////////////////////////////////////////////
///////////   productBoard   ////////////////////////////////////

// 0810 DB에 있는 상품 데이터 가져오는 action => axios 타입 action으로 변경 
const loadProductList = (type, id) => {

  const formData = new FormData();
  let url = '/product/all'

  if (type === 'lower') {
    console.log('lower 확인 ,', type, id)
      url = '/product/lower';
      formData.append('lower', id);

  } else if (type === 'search') {
      url = '/product/search'
      formData.append('search', id)

  }
  console.log('loadProductList')

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

const loadProductDetails =(productBoardNum) =>{

  const formData = new FormData();
  formData.append('num',productBoardNum);
  return({
    type:ActionTypes.LOAD_PRODUCTDETAIL,
    payload:{
      request:{
        method:'POST',
        url:'/product/productDetail',
        data:formData
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



export const Actions = {

  signup, getUserMe,
  login, logout, getClientToken,
  writeQnABoard,
  addCart, editCartQty,getCartByUser, removeCartById,
  loadProductList,loadProductDetails,
  getCategories, 
  loadqnaboardList, writeQnABoard, editQnABoard, deleteQnABoard,
  writeAnswer, deleteAnswer,
  getReviews, removeReview, addReview,uploadFileReview

};