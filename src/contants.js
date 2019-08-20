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

    GET_USERME:'GET_USERME',
    GET_USERME_SUCCESS:'GET_USERME_SUCCESS',
    
    ////////////////////////////////////////////////////////////
    /////////QnABoard 관련 
    LOAD_QNABOARDLIST:'LOAD_QNABOARDLIST',
    LOAD_QNABOARDLIST_SUCCESS:'LOAD_QNABOARDLIST_SUCCESS',
    
    WRITE_QNABOARD:'WRITE_QNABOARD',
    WRITE_QNABOARD_SUCCESS:'WRITE_QNABOARD_SUCCESS',
    
    EDIT_QNABOARD:'EDIT_QNABOARD',
    EDIT_QNABOARD_SUCCESS:'EDIT_QNABOARD_SUCCESS',
    
    DELETE_QNABOARD:'DELETE_QNABOARD',
    DELETE_QNABOARD_SUCCESS:'DELETE_QNABOARD_SUCCESS',
    DELETE_QNABOARD_FAIL:'DELETE_QNABOARD_FAIL',

    WRITE_QNABOARDANSWER:'WRITE_QNABOARDANSWER',
    WRITE_QNABOARDANSWER_SUCCESS:'WRITE_QNABOARDANSWER_SUCCESS',
    WRITE_QNABOARDANSWER_FAIL:'WRITE_QNABOARDANSWER_FAIL',


    DELETE_QNABOARDANSWER:'DELETE_QNABOARDANSWER',
    DELETE_QNABOARDANSWER_SUCCESS:'DELETE_QNABOARDANSWER_SUCCESS',
    DELETE_QNABOARDANSWER_FAIL:'DELETE_QNABOARDANSWER_FAIL',

    QNABOARD_DELETE:'QNABOARD_WRITE',
    QNABOARD_EDIT:'QNABOARD_EDIT',
    QNABOARD_FAIL:'QNABOARD_FAIL',

    ///////////////////////////////////////////////////////
    ////////// ReviewBoard

    LOAD_REVIEWS: 'LOAD_REVIEWS',
    LOAD_REVIEWS_FAIL:'LOAD_REVIEWS_FAIL',
    LOAD_REVIEWS_SUCCESS:'LOAD_REVIEWS_SUCCESS',

    ADD_REVIEW : 'ADD_REVIEW',
    ADD_REVIEW_FAIL:'ADD_REVIEW_FAIL',
    ADD_REVIEW_SUCCESS:'ADD_REVIEW_SUCCESS',

    REMOVE_REVIEW: 'REMOVE_REVIEW',
    REMOVE_REVIEW_FAIL:'REMOVE_REVIEW_FAIL',
    REMOVE_REVIEW_SUCCESS:'REMOVE_REVIEW_SUCCESS',

    UPLOADFILEREVIEW:'UPLOADFILEREVIEW',
    UPLOADFILEREVIEW_SUCCESS:'UPLOADFILEREVIEW_SUCCESS',
    UPLOADFILEREVIEW_FIAL:'UPLOADFILEREVIEW_FAIL',
    
    ///////////////////////////////////////////////////////
    ////////// ProductList

    // 0810 loadProductList 
    LOAD_PRODUCTLIST : 'LOAD_PRODUCTLIST',
    LOAD_PRODUCTLIST_FAIL : 'LOAD_PRODUCTLIST_FAIL',
    LOAD_PRODUCTLIST_SUCCESS : 'LOAD_PRODUCTLIST_SUCCESS',

    ////////////////////////////////////////////////////////
    /////////// Cart

    // 0810 addCart
    ADD_CART : 'ADD_CART',
    ADD_CART_FAIL: 'ADD_CART_FAIL',
    ADD_CART_SUCCESS: 'ADD_CART_SUCCESS',

    // 0814 유저의 장바구니 불러오기
    GET_CART : 'GET_CART',
    GET_CART_FAIL : 'GET_CART_FAIL',
    GET_CART_SUCCESS : 'GET_CART_SUCCESS',


    ///////////////////////////////////////////////////////
    /////////// Category
    
    // 0814 카테고리 불러오기
    GET_CATEGORIES : 'GET_CATEGORIES',
    GET_CATEGORIES_FAIL : 'GET_CATEGORIES_FAIL',
    GET_CATEGORIES_SUCCESS : 'GET_CATEGORIES_SUCCESS',
    
}