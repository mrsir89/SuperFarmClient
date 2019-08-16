export const ActionTypes={

    GET_TOKEN:'GET_TOKEN',
    GET_TOKEN_FAIL:'GET_TOKEN_FAIL',
    GET_TOKEN_SUCCESS:'GET_TOKEN_SUCCESS',

    REFRESH_TOKEN: 'REFRESH_TOKEN',
    REFRESH_TOKEN_FAIL: 'REFRESH_TOKEN_FAIL',
    REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS',

    IDCHECK:'IDCHECK',
    IDCHECK_FAIL:'IDCHECK_FAIL',
    IDCHECK_SUCCESS:'IDCHECK_SUCCESS',

    EMAILCHECK:'EMAILCHECK',
    EMAILCHECK_FAIL:'EMAILCHECK_FAIL',
    EMAILCHECK_SUCCESS:'EMAILCHECK_SUCCESS',

    SIGNUP:'SIGNUP',
    SIGNUP_FAIL:'SIGNUP_FAIL',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',

    LOGIN:'LOGIN',
    LOGIN_FAIL:'LOGIN_FAIL',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',

    LOGOUT:'LOGOUT',

    // user정보 수정
    USER_EDIT:'USER_EDIT',
    USER_EDIT_SUCCESS:'USER_EDIT_SUCCESS',
    USER_EDIT_FAIL:'USER_EDIT_FAIL',


    GET_USERME:'GET_USERME',
    GET_USERME_SUCCESS:'GET_USERME_SUCCESS',
    
    // question에대한 페이지 호출 응답받는 actions
    // 기존 Board action들 삭제.
    // REQUEST_QUESTION_PAGE:'REQUEST_QUESTION_PAGE',
    // RESPONSE_QUESTION_PAGE:'RESPONSE_QUESTION_PAGE',
    QUESTION_BY_PRODUCT:'QUESTION_BY_PRODUCT',

    //QnABoard 관련 
    LOAD_QNABOARDLIST:'LOAD_QNABOARDLIST',
    LOAD_QNABOARDLIST_SUCCESS:'LOAD_QNABOARDLIST_SUCCESS',
    WRITE_QNABOARD:'WRITE_QNABOARD',
    WRITE_QNABOARD_SUCCESS:'WRITE_QNABOARD_SUCCESS',
    DELETE_QNABOARD:'DELETE_QNABOARD',
    DELETE_QNABOARD_SUCCESS:'DELETE_QNABOARD_SUCCESS',
    QNABOARD_EDIT:'QNABOARD_EDIT',
    QNABOARD_FAIL:'QNABOARD_FAIL',

    // 0810 loadProductList 
    LOAD_PRODUCTLIST : 'LOAD_PRODUCTLIST',
    LOAD_PRODUCTLIST_FAIL : 'LOAD_PRODUCTLIST_FAIL',
    LOAD_PRODUCTLIST_SUCCESS : 'LOAD_PRODUCTLIST_SUCCESS',

    // 0810 addCart
    ADD_CART : 'ADD_CART',
    // 필요한가..??
    // ADD_CART_FAIL: 'ADD_CART_FAIL',
    // ADD_CART_SUCCESS: 'ADD_CART_SUCCESS'

    ADD_CART : 'ADD_CART',
    ADD_CART_FAIL: 'ADD_CART_FAIL',
    ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',

    // 0814 카테고리 불러오기
    GET_CATEGORIES : 'GET_CATEGORIES',
    GET_CATEGORIES_FAIL : 'GET_CATEGORIES_FAIL',
    GET_CATEGORIES_SUCCESS : 'GET_CATEGORIES_SUCCESS',

    // 0814 유저의 장바구니 불러오기
    GET_CART : 'GET_CART',
    GET_CART_FAIL : 'GET_CART_FAIL',
    GET_CART_SUCCESS : 'GET_CART_SUCCESS'
}