import { ActionTypes } from '../contants';
// React 컴포넌트같은 것이 직접 접근하려고 하면 안됨.
// 직접 접근하기 위해 "Action"이라는 의식을 거쳐야 한다.
// 1)_ Store에 대해 뭔가 하고 싶은 경우엔 Action 을 발행한다.
// 2)_ Store의 문지기(Reducer)가 Action의 발생을 감지하면, 새로운 State가 생성된다.


// type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼"
// payload: "액션의 실행에 필요한 임의의 데이터"
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

const userEdit = (changeUserInfo) => {
  const formData = new FormData();
  formData.append('userEdit', changeUserInfo);
  console.log('userEdit Actions ====> ', changeUserInfo);
  return({
    type: ActionTypes.USER_EDIT,
    payload: {
      request:{
        method:'POST',
        url:'/oauth/token',
        data:formData
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

<<<<<<< HEAD
=======
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

const loadqnaboardList = (productNum, size, page) => {
  const formdata = new FormData();
  formdata.append('productNum', 5);
  formdata.append('size', '10');
  formdata.append('page', '1');
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

>>>>>>> dev_sj

// 0810 장바구니 추가 action (local storage에 저장, db에는 저장 안함)
// const addCart = (item) => ({
//   type: ActionTypes.ADD_CART,
//   item
// });

// 0814 장바구니 추가 (user)
// userNum,
const addCart = ( cartModel  ) => {
  // console.log ("userNum 넘어옴?? >>>> ", userNum)
   console.log ("cartModel 넘어옴?? >>>> ",cartModel)


  return ({
    type: ActionTypes.ADD_CART,
    payload: {
    request: {
      method : 'POST',
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
const getCartByUser = (userNum)=> {
  return ({
    type: ActionTypes.GET_CART,
    payload: {
      request: {
        method : 'POST',
        url: `/cart?userNum=${userNum}`,
      }
    }
  })
}

// 0810 DB에 있는 상품 데이터 가져오는 action => axios 타입 action으로 변경 
const loadProductList = () => {
  console.log('loadProductList')
  return ({
    type: ActionTypes.LOAD_PRODUCTLIST,
    payload: {
      request: {
        method: 'POST',
        url: `/product/all`
      }
    }
  })
};

// DB에 페이지를 요청한다
const questionByProduct = (productNum, page) => {
  console.log('questionByProduct')
  return ({
    type: ActionTypes.QUESTION_BY_PRODUCT,
    payload: {
      request: {
        page,
        productNum,
        method: 'GET',
        url: `/product/${productNum}`
      }
    }
  })
};

// 카테고리 DB에서 가져오는 action 추가 
const getCategories = ()=> {
  return ({
    type: ActionTypes.GET_CATEGORIES,
    payload: {
      request: {
        method : 'POST',
        url: '/category'
      }
    }
  })
}



export const Actions = {
  login,
  signup,
  getClientToken,
  logout,
  getUserMe,
<<<<<<< HEAD
  addCart,
  loadProductList,
  questionByProduct,
  userEdit

=======
  loadqnaboardList,
  writeQnABoard,
  addCart,
  loadProductList,
  getCategories,
  getCartByUser,
  writeQnABoard
>>>>>>> dev_sj
};